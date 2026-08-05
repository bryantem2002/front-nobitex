'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'phosphor-react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      id: 'emprende',
      name: 'EMPRENDE',
      originalMonthlyPrice: 60,
      originalAnnualPrice: 600,
      monthlyPrice: 39,
      annualPrice: 390,
      description: 'Perfecto para comenzar',
      features: [
        'Hasta 100 productos',
        'Registro de ventas básico',
        'Reportes simples',
        'Soporte por email',
        'Integración manual de datos',
        '1 usuario',
      ],
      cta: 'Comenzar ahora',
      highlighted: false,
    },
    {
      id: 'crece',
      name: 'CRECE',
      originalMonthlyPrice: 120,
      originalAnnualPrice: 1200,
      monthlyPrice: 79,
      annualPrice: 790,
      description: 'La opción más elegida',
      features: [
        'Productos ilimitados',
        'Ventas con análisis avanzado',
        'Reportes detallados',
        'Soporte prioritario',
        'Gestión de inventario avanzada',
        'Hasta 5 usuarios',
        'API básica',
        'Backups diarios',
      ],
      cta: 'Elegir plan',
      highlighted: true,
      badge: 'Más elegido',
    },
    {
      id: 'escala',
      name: 'ESCALA',
      originalMonthlyPrice: 199,
      originalAnnualPrice: 1990,
      monthlyPrice: 129,
      annualPrice: 1290,
      description: 'Para negocios en crecimiento',
      features: [
        'Productos y usuarios ilimitados',
        'Todas las características CRECE',
        'Análisis y BI avanzado',
        'Integraciones personalizadas',
        'Soporte telefónico 24/7',
        'Dashboard customizable',
        'Control granular de permisos',
        'SLA garantizado',
      ],
      cta: 'Contactar ventas',
      highlighted: false,
    },
  ]

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
            Planes transparentes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight max-w-3xl mx-auto">
            Elige el plan perfecto para tu tienda
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Sin sorpresas. Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* Toggle Mensual/Anual */}
        <div className="flex justify-center items-center gap-4 mb-28 md:mb-36">
          <span
            className={`text-sm md:text-base font-semibold ${
              !isAnnual ? 'text-[#101d69]' : 'text-gray-600'
            }`}
          >
            Mensual
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-10 w-16 md:h-8 md:w-14 items-center rounded-full bg-[#101d69]/20 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#101d69]"
          >
            <span
              className={`inline-block h-8 w-8 md:h-6 md:w-6 transform rounded-full bg-[#101d69] shadow transition-transform duration-200 ease-in-out ${
                isAnnual ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span
            className={`text-sm md:text-base font-semibold ${
              isAnnual ? 'text-[#101d69]' : 'text-gray-600'
            }`}
          >
            Anual
            {isAnnual && (
              <span className="ml-2 text-xs bg-[#fd741a] text-white px-2 py-1 rounded-full">
                Ahorra 20%
              </span>
            )}
          </span>
        </div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl transition-all duration-300 group ${
                plan.highlighted
                  ? 'ring-2 ring-[#fd741a] shadow-2xl transform md:scale-105 z-10'
                  : 'border border-gray-200 hover:border-[#101d69] shadow-lg z-0'
              } bg-white`}
              variants={cardVariants}
              whileHover={{ y: plan.highlighted ? -8 : -4 }}
            >
              {/* --- ESPACIO PARA TU MASCOTA DE CUERPO ENTERO --- */}
              {plan.highlighted && (
                <div className="absolute -top-24 md:-top-32 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 z-20 pointer-events-none">
                  {/* IMAGEN DE TU MASCOTA */}
                  <img
                    src="/tu-mascota-entera.png"
                    alt="Mascota recomendando el plan"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              )}

              {/* Badge original bajado un poco y con espaciado de letras */}
              {plan.badge && (
                <div className="absolute top-6 md:top-8 left-0 right-0 bg-gradient-to-r from-[#fd741a] to-[#f5941a] text-white py-2 text-center font-bold text-sm tracking-widest z-10 shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div className={`p-6 md:p-8 ${plan.badge ? 'pt-24 md:pt-28' : ''}`}>
                {/* Plan name */}
                <h3 className="text-2xl font-bold text-[#101d69] mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 h-10">
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-400 line-through text-lg font-medium">
                      S/. {isAnnual ? plan.originalAnnualPrice : plan.originalMonthlyPrice}
                    </span>
                    <span className="bg-[#fd741a]/10 text-[#fd741a] text-xs font-bold px-2 py-1 rounded-md">
                      -35% OFF
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-[#101d69]">
                      S/. {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {isAnnual ? '/año' : '/mes'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-[#fd741a] font-semibold">
                      S/. {(plan.annualPrice / 12).toFixed(2)} promedio mensual
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 font-semibold rounded-lg transition-all mb-8 ${
                    plan.highlighted
                      ? 'bg-[#101d69] text-white hover:bg-[#0d1650] shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-[#101d69] hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-4 border-t border-gray-200 pt-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 pt-1">
                        <Check
                          size={20}
                          weight="bold"
                          className="text-[#fd741a]"
                        />
                      </div>
                      <p className="text-gray-700 text-sm md:text-base">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative accent */}
              {plan.highlighted && (
                <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-[#fd741a]/10 rounded-full blur-2xl -z-10" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Note */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 text-base">
            ¿Preguntas? {''}
            <a href="#contacto" className="text-[#101d69] font-semibold hover:underline">
              Contacta con nosotros
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
