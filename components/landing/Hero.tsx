'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star } from 'phosphor-react'

export default function Hero() {
  const words = ['ropa', 'calzado']
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

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
    <section className="relative bg-white pt-2 md:pt-4 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Text Content */}
          <motion.div className="flex flex-col gap-6 lg:col-span-5 z-10" variants={itemVariants}>
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-[#101d69] leading-tight"
              variants={itemVariants}
            >
              Convierte tus productos variantes{' '}
              <span className="inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    className="inline-block text-[#fd741a]"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{' '}
              <br />
              en una venta más
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Vende rápido, cuadra tu caja y controla el inventario de tus productos con variantes — talla, color, modelo — desde una sola plataforma.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 w-full pt-2" variants={itemVariants}>
              <button className="w-full sm:w-auto px-8 py-4 bg-[#101d69] text-white font-semibold rounded-lg hover:bg-[#0d1650] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:bg-[#0d1650]">
                Probar gratis
                <ArrowRight size={18} weight="bold" />
              </button>
            </motion.div>

            {/* Trust indicators - Reference Style */}
            <motion.div className="pt-4 flex flex-col gap-3" variants={itemVariants}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-gray-500">
                <span>+100 tiendas activas</span>
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

          {/* Image */}
          <motion.div
            className="order-first lg:order-last lg:col-span-7 relative w-full flex justify-center lg:justify-start items-center mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <img
              src="/principal.png"
              alt="POS en acción"
              className="w-full sm:w-full lg:w-[110%] xl:w-[120%] max-w-none h-auto object-contain drop-shadow-2xl lg:-mr-[15%]"
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
