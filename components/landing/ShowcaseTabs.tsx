'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Storefront, Package, ChartLineUp } from 'phosphor-react'

export default function ShowcaseTabs() {
  const [activeTab, setActiveTab] = useState(0)

  // 3 imágenes horizontales rotativas
  const tabs = [
    {
      id: 0,
      icon: Storefront,
      title: 'Punto de Venta Ultra Rápido',
      description: 'Atiende a tus clientes en segundos. Interfaz limpia, sin botones que te confundan.',
      image: '/galeria-1.jpg'
    },
    {
      id: 1,
      icon: Package,
      title: 'Control de Inventario Real',
      description: 'Encuentra tallas, colores y existencias al instante sin moverte de tu mostrador.',
      image: '/galeria-2.jpg'
    },
    {
      id: 2,
      icon: ChartLineUp,
      title: 'Cierres de Caja Perfectos',
      description: 'Se acabó el estrés de cuadrar caja. Todo automático, transparente y exacto.',
      image: '/galeria-3.jpg'
    }
  ]

  // Auto-play (cambia cada 6 segundos)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[600px] md:min-h-[750px] flex items-center overflow-hidden py-20 border-t border-gray-100">
      
      {/* 1. Fondo Dinámico: Las imágenes horizontales a pantalla completa */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          // Quitamos el 'scale' inicial porque en algunos navegadores vuelve borrosas las imágenes al escalar píxeles
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={tabs[activeTab].image} 
            alt={tabs[activeTab].title}
            // Mantenemos object-cover puro para máxima nitidez
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('bg-gray-900', 'flex', 'items-center', 'justify-center');
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. Degradado Protector: Oscurece la izquierda, deja la derecha 100% nítida */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#101d69] via-[#101d69]/80 to-transparent" />
      {/* (Eliminamos la capa extra negra para que tu foto recupere todo su brillo y nitidez original) */}

      {/* 3. Contenido (Flotando sobre la imagen) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Texto limpio sin la cápsula, siguiendo el diseño general de tu web */}
            <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
              La experiencia Norbitex
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight drop-shadow-lg">
              Diseñado para fluir con tu día
            </h2>
          </motion.div>

          {/* Las 3 Pestañas (Efecto Glassmorphism) */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative p-5 md:p-6 rounded-2xl text-left transition-all duration-500 overflow-hidden group border ${
                    isActive 
                      ? 'bg-white/10 border-white/30 backdrop-blur-md shadow-2xl scale-[1.02]' 
                      : 'bg-transparent border-transparent hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-4 md:gap-5 relative z-10">
                    {/* Ícono */}
                    <div className={`flex-shrink-0 p-3.5 rounded-2xl transition-all duration-500 ${
                      isActive 
                        ? 'bg-[#fd741a] text-white shadow-lg' 
                        : 'bg-white/10 text-white/50 group-hover:bg-white/20'
                    }`}>
                      <Icon size={26} weight={isActive ? "fill" : "regular"} />
                    </div>
                    
                    {/* Textos */}
                    <div className="mt-1">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                        {tab.title}
                      </h3>
                      <div 
                        className={`overflow-hidden transition-all duration-500 ${
                          isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-sm md:text-base text-blue-50/80 leading-relaxed pr-4">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Barra de progreso de tiempo naranja */}
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#fd741a] to-[#ff9b52]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                      key={activeTab} // Resetea animación
                    />
                  )}
                </button>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
