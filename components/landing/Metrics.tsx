'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Users, CheckCircle, Headset } from 'phosphor-react'

export default function Metrics() {
  const metrics = [
    {
      icon: ShoppingCart,
      number: '+50K',
      label: 'Ventas procesadas',
      subtext: 'Este mes',
    },
    {
      icon: Users,
      number: '+500',
      label: 'Negocios activos',
      subtext: 'Y creciendo',
    },
    {
      icon: CheckCircle,
      number: '99.9%',
      label: 'Uptime',
      subtext: 'Disponibilidad garantizada',
    },
    {
      icon: Headset,
      number: '24/7',
      label: 'Soporte',
      subtext: 'Siempre aquí para ti',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="bg-[#101d69] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fd741a]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Números que hablan por nosotros
          </h2>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Miles de negocios confían en NobiTex para su operación diaria
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <motion.div
                key={index}
                className="p-6 md:p-8 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 group cursor-pointer text-center"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-center mb-4">
                  <IconComponent
                    size={32}
                    weight="bold"
                    className="text-[#fd741a] group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-3xl md:text-4xl font-bold mb-2">
                  {metric.number}
                </p>
                <p className="font-semibold text-base md:text-lg mb-1">
                  {metric.label}
                </p>
                <p className="text-sm text-white/70">
                  {metric.subtext}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
