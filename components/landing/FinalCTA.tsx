'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'phosphor-react'

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-[#101d69] to-[#0d1650] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fd741a]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Haz que tu tienda opere con orden, control y confianza
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Miles de boutiques y tiendas de ropa ya confían en NobiTex.
          Únete hoy y obtén 35% de descuento por tiempo limitado.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button className="px-8 py-4 bg-[#fd741a] text-white font-semibold rounded-lg hover:bg-[#e56a14] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 text-lg">
            Comenzar ahora
            <ArrowRight size={20} weight="bold" />
          </button>
          <button className="px-8 py-4 bg-white/20 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/30 transition-all backdrop-blur-sm text-lg">
            Solicitar demostración
          </button>
        </motion.div>

        {/* Guarantee */}
        <motion.p
          className="text-white/70 text-sm md:text-base mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          ✓ Sin tarjeta de crédito requerida · ✓ Prueba gratis por 14 días
        </motion.p>
      </div>
    </section>
  )
}
