'use client'

import { motion } from 'framer-motion'

export default function TrustLogos() {
  const logos = [
    { name: 'Kiments.pe', image: '/negocio1.png' },
    { name: 'Moda Vital', image: '/negocio2.png' },
    { name: 'Estilo Urbano', image: '/negocio3.png' },
    { name: 'Boutique Luna', image: '/negocio4.png' },
    { name: 'Textiles Roma', image: '/negocio5.png' },
    { name: 'Alta Costura', image: '/negocio6.png' },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#101d69] uppercase tracking-widest mb-2">
            Confían en NobiTex
          </p>
          <p className="text-xl md:text-2xl font-bold text-gray-900 max-w-2xl mx-auto">
            Negocios textiles que optimizan su operación
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12 py-8"
            initial={{ x: 0 }}
            animate={{ x: -1000 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-56 md:w-64 flex flex-col items-center justify-center gap-4 cursor-pointer group"
                whileHover={{ y: -4 }}
              >
                <div className="w-full h-32 md:h-40 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300">
                  <img src={logo.image} alt={logo.name} className="max-w-full max-h-full object-contain rounded-md" />
                </div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-[#101d69] transition-colors text-center truncate w-full">
                  {logo.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>


      </div>
    </section>
  )
}
