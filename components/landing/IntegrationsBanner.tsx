'use client'

import { motion } from 'framer-motion'

export default function IntegrationsBanner() {
  const integrations = [
    { name: 'SUNAT', image: '/sunat.png' },
    { name: 'Yape', image: '/yape.png' },
    { name: 'Plin', image: '/plin.png' },
    { name: 'Visa', image: '/visa.png' },
    { name: 'Mastercard', image: '/mastercard.png' },
    { name: 'Niubiz', image: '/niubiz.png' },
    { name: 'Izipay', image: '/izipay.png' },
  ]

  return (
    <section className="bg-white py-6 md:py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          
          <div className="flex-shrink-0">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider text-center md:text-left">
              Respaldado y compatible con
            </p>
          </div>

          <div className="flex-1 overflow-hidden relative w-full">
            <motion.div
              className="flex gap-8 md:gap-12 items-center"
              initial={{ x: 0 }}
              animate={{ x: -1000 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...integrations, ...integrations, ...integrations].map((integration, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center h-12 w-24 md:w-32 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <img src={integration.image} alt={integration.name} className="max-h-full max-w-full object-contain rounded-xl mix-blend-multiply" />
                  {/* Fallback text just in case images are missing initially */}
                  <span className="sr-only">{integration.name}</span>
                </div>
              ))}
            </motion.div>
            
            {/* Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
          </div>

        </div>
      </div>
    </section>
  )
}
