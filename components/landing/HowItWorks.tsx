'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Gear, ShoppingCart, TrendUp } from 'phosphor-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: GraduationCap,
      title: 'Registra tu negocio',
      description:
        'Crea tu cuenta en minutos y configura los datos básicos de tu tienda.',
    },
    {
      number: 2,
      icon: Gear,
      title: 'Configura tus productos',
      description:
        'Añade tu catálogo con tallas, colores, modelos y precios.',
    },
    {
      number: 3,
      icon: ShoppingCart,
      title: 'Empieza a vender',
      description:
        'Registra ventas ágiles y ten control total de tu caja desde el primer día.',
    },
    {
      number: 4,
      icon: TrendUp,
      title: 'Analiza y crece',
      description:
        'Revisa reportes y toma decisiones inteligentes para escalar tu negocio.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
            Proceso simple
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight max-w-3xl mx-auto">
            Cómo funciona Norbitex
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Connection lines (desktop only) */}
          <div className="hidden lg:block absolute top-[112px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#101d69] via-[#fd741a] to-[#101d69]" />

          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center"
                variants={stepVariants}
              >
                {/* Step circle */}
                <motion.div
                  className="relative mb-10 z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#101d69] to-[#0d1650] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <IconComponent
                      size={40}
                      weight="bold"
                      className="text-white"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#fd741a] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile connector lines */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-gradient-to-b from-[#fd741a] to-transparent my-6" />
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA below */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-[#101d69] text-white font-semibold rounded-lg hover:bg-[#0d1650] transition-all shadow-lg hover:shadow-xl">
            Comenzar ahora
          </button>
        </motion.div>
      </div>
    </section>
  )
}
