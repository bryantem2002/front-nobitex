'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  ClockCounterClockwise,
  PencilSimple,
  Receipt,
  ShieldCheck,
  Swap,
  Ticket,
} from 'phosphor-react'

export default function SunatCompliance() {
  const comprobantes = [
    {
      icon: Receipt,
      label: 'Factura',
      desc: 'Emision electronica para ventas con RUC',
    },
    {
      icon: Ticket,
      label: 'Boleta',
      desc: 'Atencion rapida para clientes finales',
    },
    {
      icon: Swap,
      label: 'Nota de credito',
      desc: 'Correcciones y anulaciones ordenadas',
    },
    {
      icon: PencilSimple,
      label: 'Nota de debito',
      desc: 'Ajustes documentados cuando los necesites',
    },
  ]

  const steps = [
    'Emites la venta',
    'Norbitex arma el comprobante',
    'Se envia directo a SUNAT',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#fd741a] md:text-base">
            Facturacion electronica
          </p>
          <h2 className="text-3xl font-bold leading-tight text-[#101d69] md:text-4xl lg:text-5xl">
            Todas tus ventas se envian directo a SUNAT
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            Emite boletas, facturas y notas desde Norbitex sin cambiar de
            sistema. Tu equipo vende y la plataforma se encarga del envio.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {comprobantes.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  className="group flex min-h-52 flex-col justify-between rounded-[2rem] border border-[#101d69]/10 bg-gray-50 p-6 shadow-[0_16px_45px_rgba(16,29,105,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#fd741a]/40 hover:bg-white hover:shadow-[0_24px_70px_rgba(16,29,105,0.12)]"
                  variants={cardVariants}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white text-[#fd741a] shadow-sm ring-1 ring-[#101d69]/10 transition-colors group-hover:bg-[#101d69]">
                      <Icon size={34} weight="duotone" className="group-hover:text-[#fd741a]" />
                    </div>
                    <CheckCircle size={26} weight="fill" className="text-[#fd741a]" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-950">
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="flex h-full flex-col justify-between rounded-[2.25rem] border border-[#101d69]/10 bg-[#101d69] p-7 text-white shadow-[0_24px_80px_rgba(16,29,105,0.24)] md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="rounded-[1.5rem] bg-white p-4 shadow-lg">
                  <img src="/sunat.png" alt="SUNAT" className="h-12 w-auto" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[#fd741a] text-white">
                  <ShieldCheck size={32} weight="fill" />
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
                Facturacion lista para operar sin salir de tu venta
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-blue-100 md:text-base">
                Cada comprobante queda conectado a tu venta, tu historial y tu
                control interno. Menos doble registro, mas orden.
              </p>

              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-[1.2rem] bg-white/10 p-3 ring-1 ring-white/10"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#101d69]">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-[1.4rem] bg-white p-4 text-[#101d69]">
              <ClockCounterClockwise size={28} weight="duotone" className="shrink-0 text-[#fd741a]" />
              <p className="text-sm font-bold leading-snug">
                Envio automatico y seguimiento del estado del comprobante.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
