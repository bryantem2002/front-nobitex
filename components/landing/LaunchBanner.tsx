'use client'

import { motion } from 'framer-motion'

export default function LaunchBanner() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full">

          {/* Fondo del Cielo Estrellado */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#0a1142] via-[#101d69] to-[#0d1650] overflow-hidden shadow-2xl border border-white/10 z-0">
            {/* Estrellas Brillantes */}
            <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse" />
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-20 right-1/4 w-1 h-1 bg-white rounded-full opacity-90 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-12 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse" />
            <div className="absolute top-12 right-16 w-2.5 h-2.5 bg-white rounded-full opacity-70 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50" />

            {/* Nebulosa Naranja (aura galáctica de fondo) */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#fd741a] opacity-30 blur-[100px] rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500 opacity-20 blur-[100px] rounded-full" />
          </div>

          {/* Contenido del Banner */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:px-16 lg:py-14 min-h-[350px]">

            {/* Textos */}
            <div className="lg:w-3/5 text-white mb-12 lg:mb-0 z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#fd741a] text-xs md:text-sm font-bold tracking-widest mb-6 shadow-lg">
                <span>🚀</span> PREPARADOS PARA EL DESPEGUE
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Impulsamos tu tienda hacia las estrellas
              </h3>
              <p className="text-blue-100/90 text-base lg:text-lg max-w-xl leading-relaxed">
                Norbitex te da el control absoluto. Administra, vende y escala tu negocio a velocidades que nunca imaginaste. ¡Abróchate el cinturón!
              </p>
            </div>

            {/* MASCOTA EN COHETE */}
            <motion.div
              className="lg:w-2/5 flex justify-center lg:justify-end w-full relative h-[280px] lg:h-[400px] z-20 mt-8 lg:mt-0"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="absolute -bottom-8 lg:-bottom-20 right-0 w-[110%] lg:w-[130%] h-[120%] lg:h-[130%] flex justify-end items-end pointer-events-none">
                <img
                  src="/mascota-espacio.png"
                  alt="Mascota Norbitex en el espacio"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(253,116,26,0.3)] rotate-[-3deg]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
