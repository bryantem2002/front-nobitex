'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'phosphor-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative bg-white pt-12 md:pt-20 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Content */}
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101d69] leading-tight"
              variants={itemVariants}
            >
              Controla tu tienda de ropa con la precisión que tu negocio necesita
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Gestiona ventas, inventario por talla y color, caja y reportes desde una plataforma diseñada para boutiques y negocios textiles modernos.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <button className="px-8 py-4 bg-[#101d69] text-white font-semibold rounded-lg hover:bg-[#0d1650] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Probar gratis
                <ArrowRight size={18} weight="bold" />
              </button>
              <button className="px-8 py-4 border-2 border-[#101d69] text-[#101d69] font-semibold rounded-lg hover:bg-[#f5f7ff] transition-all flex items-center justify-center gap-2">
                <Play size={18} weight="fill" />
                Ver demostración
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div className="pt-4 border-t border-gray-200 flex gap-6" variants={itemVariants}>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-bold text-[#101d69]">+500</p>
                <p className="text-sm text-gray-600">Tiendas activas</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-bold text-[#101d69]">99.9%</p>
                <p className="text-sm text-gray-600">Disponibilidad</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Mockup */}
          <motion.div
            className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full lg:w-[125%] z-10 bg-gray-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            variants={itemVariants}
          >
            <img src="/principal.png" alt="POS en acción" className="w-full h-full object-cover object-left-top" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#101d69]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#fd741a]/5 rounded-full blur-3xl" />
    </section>
  )
}
