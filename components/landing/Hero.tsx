'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'phosphor-react'

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
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Content */}
          <motion.div className="flex flex-col gap-6 lg:col-span-5 z-10" variants={itemVariants}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#101d69] leading-tight"
              variants={itemVariants}
            >
              Controla tu tienda de ropa con la precisión que tu negocio necesita
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Gestiona ventas, inventario por talla y color, caja y reportes desde una plataforma diseñada para boutiques y negocios textiles modernos.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 w-full pt-2" variants={itemVariants}>
              <button className="w-full sm:w-auto px-8 py-4 bg-[#101d69] text-white font-semibold rounded-lg hover:bg-[#0d1650] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:bg-[#0d1650]">
                Probar gratis
                <ArrowRight size={18} weight="bold" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-[#101d69] text-[#101d69] font-semibold rounded-lg hover:bg-[#f5f7ff] transition-all flex items-center justify-center gap-2 active:bg-[#f5f7ff]">
                <Play size={18} weight="fill" />
                Ver demostración
              </button>
            </motion.div>

            {/* Trust indicators - Reference Style */}
            <motion.div className="pt-4 flex flex-col gap-3" variants={itemVariants}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-gray-500">
                <span>+500 tiendas activas</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>99.9% disponibilidad</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>Soporte 24/7</span>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold border border-gray-200 rounded-full px-4 py-1.5 w-fit bg-gray-50">
                <span className="text-[#101d69]">4.9</span>
                <div className="flex text-yellow-400">
                  <Star weight="fill" size={14} />
                  <Star weight="fill" size={14} />
                  <Star weight="fill" size={14} />
                  <Star weight="fill" size={14} />
                  <Star weight="fill" size={14} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Mockup Bleeding off screen */}
          <motion.div
            className="lg:col-span-7 relative w-full flex justify-center lg:justify-start items-center mt-8 lg:mt-0"
            variants={itemVariants}
          >
            {/* The image is made significantly larger and allowed to overflow to the right */}
            <img
              src="/principal.png"
              alt="POS en acción"
              className="w-full sm:w-[110%] lg:w-[135%] xl:w-[150%] max-w-none h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out lg:-mr-[50%]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#101d69]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#fd741a]/5 rounded-full blur-3xl" />
    </section>
  )
}
