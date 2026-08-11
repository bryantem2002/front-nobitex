'use client'

import { motion } from 'framer-motion'
import { UserPlus, Package, ShoppingCart, ChartLine } from 'phosphor-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: 'Registra tu negocio',
      description:
        'Crea tu cuenta en minutos y configura los datos basicos de tu tienda. Sin complicaciones.',
    },
    {
      number: 2,
      icon: Package,
      title: 'Configura tus productos',
      description:
        'Anade tu catalogo con tallas, colores, modelos y precios. Todo organizado a tu manera.',
    },
    {
      number: 3,
      icon: ShoppingCart,
      title: 'Empieza a vender',
      description:
        'Registra ventas agiles, emite comprobantes y ten control total de tu caja desde el primer dia.',
    },
    {
      number: 4,
      icon: ChartLine,
      title: 'Analiza y crece',
      description:
        'Revisa reportes, mide tu rendimiento y toma decisiones inteligentes para escalar tu negocio.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#fd741a]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#101d69]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
            Empieza en minutos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight max-w-3xl mx-auto">
            Como funciona Nuvex
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Cuatro pasos simples para transformar la gestion de tu tienda
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {steps.map((step) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.number}
                className="group relative bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(16,29,105,0.06)] hover:shadow-[0_16px_50px_rgba(16,29,105,0.12)] transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                variants={cardVariants}
              >
                {/* Step number badge */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#fd741a] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#101d69] to-[#0d1650] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={30} weight="bold" className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow connector (except last) */}
                {step.number < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-[#fd741a]/50 to-transparent" />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-14 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-[#101d69] text-white font-semibold rounded-full hover:bg-[#0d1650] transition-all shadow-lg hover:shadow-xl active:scale-95">
            Comenzar ahora
          </button>
        </motion.div>
      </div>
    </section>
  )
}
