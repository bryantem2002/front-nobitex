'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('ventas')

  const tabs = [
    { id: 'ventas', label: 'Ventas', description: 'Registro y análisis de transacciones' },
    { id: 'inventario', label: 'Inventario', description: 'Control por talla y color' },
    { id: 'reportes', label: 'Reportes', description: 'Análisis y estadísticas' },
    { id: 'caja', label: 'Caja', description: 'Reconciliación diaria' },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight max-w-3xl mx-auto">
            Así se ve el control total de tu tienda
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Una interfaz limpia y profesional diseñada para tu operación diaria
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#101d69] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Mockup container */}
          <div className="aspect-video md:aspect-[16/9] lg:aspect-[20/9] w-full flex items-center justify-center p-8 md:p-12 lg:p-16">
            <div className="flex flex-col items-center justify-center text-center w-full h-full">
              {/* Browser chrome simulation */}
              <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col h-full">
                {/* Browser top bar */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300" />
                    <div className="w-3 h-3 rounded-full bg-gray-300" />
                    <div className="w-3 h-3 rounded-full bg-gray-300" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-500">
                      app.norbitex.com
                    </div>
                  </div>
                </div>

                {/* Content area */}
                <div className="flex-1 relative bg-gray-50 overflow-hidden">
                  <img src="/principal.png" alt="Dashboard Norbitex" className="absolute inset-0 w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101d69]/5 to-transparent pointer-events-none" />
        </motion.div>

        {/* Description below */}
        <motion.div
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {tabs.find(t => t.id === activeTab)?.description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
