'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'phosphor-react'

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-[#101d69] to-[#0d1650] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fd741a]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Columna Izquierda: Texto y Botones */}
          <div className="flex flex-col text-center lg:text-left">
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
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Miles de boutiques y tiendas de ropa ya confían en Norbitex.
              Únete hoy y obtén 35% de descuento por tiempo limitado.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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

          {/* Columna Derecha: Tu Mascota de Cuerpo Entero */}
          <motion.div
            className="relative hidden lg:flex justify-center items-center h-[400px] xl:h-[550px] mt-12 lg:mt-24"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Fondo: Ventanita de Software UI (Súper bonito y limpio) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[380px] xl:w-[420px] xl:h-[480px] bg-white rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden -z-10 rotate-3 border-4 border-white/10 transition-transform hover:rotate-0 duration-500">
              {/* Barra superior de la ventana (estilo macOS) */}
              <div className="h-10 bg-gray-50 flex items-center px-4 gap-2 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              {/* Contenido decorativo de la ventana */}
              <div className="p-6">
                <div className="w-1/2 h-4 bg-gray-200 rounded-full mb-6" />
                <div className="w-full h-32 bg-gradient-to-br from-[#fd741a]/10 to-transparent rounded-2xl border border-[#fd741a]/20 mb-4" />
                <div className="w-3/4 h-16 bg-blue-50 rounded-2xl" />
              </div>
            </div>

            {/* IMAGEN DE TU MASCOTA */}
            <img
              src="/tu-mascota-entera2.png"
              alt="Mascota Norbitex apuntando al botón"
              className="w-full h-full object-contain drop-shadow-2xl pointer-events-none scale-[1.35] transform origin-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
