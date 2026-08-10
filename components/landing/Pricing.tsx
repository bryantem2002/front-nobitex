'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'phosphor-react'
import {
  AffiliateCodeResponse,
  PlanCode,
  PlanDefinition,
  apiRequest,
} from '@/lib/api'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [plans, setPlans] = useState<PlanDefinition[]>([])
  const [loadingPlans, setLoadingPlans] = useState(true)
  const [plansError, setPlansError] = useState('')
  const [affiliateCode, setAffiliateCode] = useState('')
  const [affiliate, setAffiliate] = useState<AffiliateCodeResponse | null>(null)
  const [validatingAffiliate, setValidatingAffiliate] = useState(false)

  useEffect(() => {
    let active = true

    apiRequest<PlanDefinition[]>('/plans')
      .then((result) => {
        if (!active) return
        setPlans(result)
        setPlansError('')
      })
      .catch(() => {
        if (!active) return
        setPlansError('No pudimos cargar los planes. Intenta nuevamente en unos minutos.')
      })
      .finally(() => {
        if (active) setLoadingPlans(false)
      })

    return () => {
      active = false
    }
  }, [])

  const highlightedCode = useMemo(() => getHighlightedCode(plans), [plans])
  const activeAffiliate = affiliate?.valid ? affiliate : null

  async function applyAffiliateCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const code = affiliateCode.trim()

    if (!code) {
      setAffiliate(null)
      return
    }

    setValidatingAffiliate(true)
    try {
      const result = await apiRequest<AffiliateCodeResponse>(
        `/plans/affiliate-code?code=${encodeURIComponent(code)}`,
      )
      setAffiliate(result)
      if (result.valid) setAffiliateCode(result.code)
    } catch {
      setAffiliate({
        valid: false,
        code: code.toUpperCase(),
        discountPercent: '0.00',
        reason: 'invalid',
      })
    } finally {
      setValidatingAffiliate(false)
    }
  }

  function clearAffiliateCode() {
    setAffiliateCode('')
    setAffiliate(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="planes" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto w-full px-3 sm:px-4 lg:px-6">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#fd741a] md:text-base">
            Planes transparentes
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-[#101d69] md:text-4xl lg:text-5xl">
            Elige el plan perfecto para tu tienda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Sin sorpresas. Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </motion.div>

        <div className="mb-12 flex flex-col items-center gap-6 md:mb-20">
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-semibold md:text-base ${
                !isAnnual ? 'text-[#101d69]' : 'text-gray-600'
              }`}
            >
              Mensual
            </span>
            <button
              type="button"
              aria-label="Cambiar periodo de pago"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-10 w-16 items-center rounded-full bg-[#101d69]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:ring-offset-2 md:h-8 md:w-14"
            >
              <span
                className={`inline-block h-8 w-8 transform rounded-full bg-[#101d69] shadow transition-transform duration-200 ease-in-out md:h-6 md:w-6 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold md:text-base ${
                isAnnual ? 'text-[#101d69]' : 'text-gray-600'
              }`}
            >
              Anual
              {isAnnual && (
                <span className="ml-2 rounded-full bg-[#fd741a] px-2 py-1 text-xs text-white">
                  Ahorro anual
                </span>
              )}
            </span>
          </div>

          <form
            onSubmit={applyAffiliateCode}
            className="w-full max-w-xl rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={affiliateCode}
                onChange={(event) => setAffiliateCode(event.target.value)}
                placeholder="Codigo de afiliado"
                className="min-h-12 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 text-sm font-semibold uppercase text-[#101d69] outline-none transition focus:border-[#101d69] focus:ring-2 focus:ring-[#101d69]/15"
              />
              <button
                type="submit"
                disabled={validatingAffiliate || !affiliateCode.trim()}
                className="min-h-12 rounded-lg bg-[#101d69] px-5 text-sm font-bold text-white transition hover:bg-[#0d1650] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {validatingAffiliate ? 'Validando...' : 'Aplicar'}
              </button>
              {affiliate && (
                <button
                  type="button"
                  onClick={clearAffiliateCode}
                  className="min-h-12 rounded-lg border border-gray-200 px-5 text-sm font-bold text-[#101d69] transition hover:bg-gray-50"
                >
                  Quitar
                </button>
              )}
            </div>
            {affiliateMessage(affiliate)}
          </form>
        </div>

        {loadingPlans && (
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-600 shadow-sm">
            Cargando planes...
          </div>
        )}

        {!loadingPlans && plansError && (
          <div className="rounded-xl border border-red-100 bg-red-50 p-8 text-center text-red-700 shadow-sm">
            {plansError}
          </div>
        )}

        {!loadingPlans && !plansError && (
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {plans.map((plan) => {
              const highlighted = plan.code === highlightedCode
              const price = getPlanPrice(plan, isAnnual, activeAffiliate)
              const showDiscount = price.previous !== price.current
              const cta = plan.code === 'empresarial' ? 'Contactar ventas' : 'Comenzar ahora'

              return (
                <motion.div
                  key={plan.code}
                  className={`relative rounded-2xl bg-white transition-all duration-300 group ${
                    highlighted
                      ? 'z-10 shadow-2xl ring-2 ring-[#fd741a] xl:scale-105'
                      : 'z-0 border border-gray-200 shadow-lg hover:border-[#101d69]'
                  }`}
                  variants={cardVariants}
                  whileHover={{ y: highlighted ? -8 : -4 }}
                >
                  {highlighted && (
                    <div className="pointer-events-none absolute -top-20 left-1/2 z-20 h-28 w-28 -translate-x-1/2 md:-top-24 md:h-32 md:w-32">
                      <img
                        src="/tu-mascota-entera.png"
                        alt="Mascota recomendando el plan"
                        className="h-full w-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  )}

                  {highlighted && (
                    <div className="absolute left-0 right-0 top-6 z-10 bg-gradient-to-r from-[#fd741a] to-[#f5941a] py-2 text-center text-xs font-bold tracking-widest text-white shadow-sm">
                      Recomendado
                    </div>
                  )}

                  <div className={`p-6 ${highlighted ? 'pt-24 md:pt-28' : ''}`}>
                    <h3 className="mb-2 text-2xl font-bold text-[#101d69]">
                      {plan.name}
                    </h3>
                    <p className="mb-6 min-h-10 text-sm text-gray-600">
                      {planDescription(plan)}
                    </p>

                    <div className="mb-8 min-h-32">
                      {showDiscount && (
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <span className="text-base font-medium text-gray-400 line-through">
                            S/. {formatMoney(price.previous)}
                          </span>
                          <span className="rounded-md bg-[#fd741a]/10 px-2 py-1 text-xs font-bold text-[#fd741a]">
                            -{price.discountPercent}% OFF
                          </span>
                        </div>
                      )}
                      <div className="mb-2 flex flex-wrap items-baseline gap-1">
                        <span className="text-2xl font-bold text-[#101d69] md:text-3xl">
                          {price.free ? price.label : `S/. ${formatMoney(price.current)}`}
                        </span>
                        {!price.free && (
                          <span className="text-sm text-gray-600">
                            {isAnnual ? '/anio' : '/mes'}
                          </span>
                        )}
                      </div>
                      {isAnnual && !price.free && (
                        <p className="text-xs font-semibold text-[#fd741a]">
                          S/. {formatMoney(price.current / 12)} promedio mensual
                        </p>
                      )}
                      {!isAnnual &&
                        Number(plan.monthlyDiscountPercent) > 0 &&
                        !price.free && (
                          <p className="text-xs font-semibold text-[#fd741a]">
                            Oferta mensual incluida
                          </p>
                        )}
                    </div>

                    <a
                      href="#contacto"
                      className={`mb-8 block w-full rounded-lg px-4 py-3 text-center font-semibold transition-all ${
                        highlighted
                          ? 'bg-[#101d69] text-white shadow-lg hover:bg-[#0d1650] hover:shadow-xl'
                          : 'bg-gray-100 text-[#101d69] hover:bg-gray-200'
                      }`}
                    >
                      {cta}
                    </a>

                    <div className="space-y-4 border-t border-gray-200 pt-8">
                      {plan.highlights.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="flex-shrink-0 pt-1">
                            <Check
                              size={20}
                              weight="bold"
                              className="text-[#fd741a]"
                            />
                          </div>
                          <p className="text-sm text-gray-700 md:text-base">
                            {feature}
                          </p>
                        </div>
                      ))}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 pt-1">
                          <Check size={20} weight="bold" className="text-[#fd741a]" />
                        </div>
                        <p className="text-sm text-gray-700 md:text-base">
                          {formatLimit(plan.limits.documents)} comprobantes al mes
                        </p>
                      </div>
                    </div>
                  </div>

                  {highlighted && (
                    <div className="absolute -bottom-1 -right-1 -z-10 h-32 w-32 rounded-full bg-[#fd741a]/10 blur-2xl" />
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        )}

        <motion.div
          className="mt-12 text-center md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-base text-gray-600">
            Preguntas?{' '}
            <a href="#contacto" className="font-semibold text-[#101d69] hover:underline">
              Contacta con nosotros
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function getHighlightedCode(plans: PlanDefinition[]): PlanCode | null {
  if (plans.some((plan) => plan.code === 'crecimiento')) return 'crecimiento'

  const paidPlans = plans.filter((plan) => plan.code !== 'prueba')
  return paidPlans[1]?.code ?? paidPlans[0]?.code ?? plans[0]?.code ?? null
}

function planDescription(plan: PlanDefinition) {
  const descriptions: Record<PlanCode, string> = {
    prueba: `${plan.trialDays ?? 7} dias para probar Norbitex`,
    basico: 'Para vender y controlar lo esencial',
    emprendedor: 'Para tiendas que empiezan a crecer',
    crecimiento: 'La opcion mas completa para operar',
    empresarial: 'Para operaciones con mas volumen',
  }

  return descriptions[plan.code]
}

function getPlanPrice(
  plan: PlanDefinition,
  isAnnual: boolean,
  affiliate: Extract<AffiliateCodeResponse, { valid: true }> | null,
) {
  if (plan.code === 'prueba') {
    return {
      free: true,
      label: plan.trialDays ? `${plan.trialDays} dias gratis` : 'Gratis',
      previous: 0,
      current: 0,
      discountPercent: '0.00',
    }
  }

  const base = Number(isAnnual ? plan.annualPrice : plan.monthlyOfferPrice)
  const discountPercent = Number(affiliate?.discountPercent ?? 0)
  const current =
    discountPercent > 0 ? roundMoney(base - (base * discountPercent) / 100) : base

  return {
    free: false,
    label: '',
    previous: base,
    current,
    discountPercent: affiliate?.discountPercent ?? '0.00',
  }
}

function affiliateMessage(affiliate: AffiliateCodeResponse | null) {
  if (!affiliate) return null

  if (affiliate.valid) {
    return (
      <p className="mt-3 text-sm font-semibold text-emerald-700">
        Codigo {affiliate.code} aplicado: {affiliate.discountPercent}% de descuento.
      </p>
    )
  }

  return (
    <p className="mt-3 text-sm font-semibold text-red-600">
      {affiliate.reason === 'inactive'
        ? 'Este codigo no esta disponible.'
        : 'Codigo de afiliado no valido.'}
    </p>
  )
}

function roundMoney(value: number) {
  return Math.round(value * 100) / 100
}

function formatMoney(value: number) {
  return value.toLocaleString('es-PE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function formatLimit(value: number | null) {
  return value === null ? 'Ilimitados' : value.toLocaleString('es-PE')
}
