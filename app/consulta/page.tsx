'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarBlank } from 'phosphor-react'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import FloatingButtons from '@/components/landing/FloatingButtons'

export default function ConsultaCPE() {
  const [formData, setFormData] = useState({
    ruc: '',
    tipo: 'Factura',
    serie: '',
    correlativo: '',
    fecha: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated search action
    console.log('Buscando CPE:', formData)
    alert('Búsqueda iniciada. (Funcionalidad a implementar)')
  }

  return (
    <main className="w-full bg-gray-50 font-sans">
      <Header />
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl px-4"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101d69] mb-4 tracking-tight">
            Consulta de Comprobantes
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto">
            Ingresa los datos para buscar y descargar tu comprobante de pago electrónico en formato PDF y XML.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* RUC */}
            <div className="space-y-2">
              <label htmlFor="ruc" className="block text-sm font-bold text-gray-700">
                RUC de la Empresa Emisora
              </label>
              <input
                type="text"
                id="ruc"
                placeholder="Ejemplo: 20123456789"
                value={formData.ruc}
                onChange={(e) => setFormData({...formData, ruc: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all"
                required
              />
            </div>

            {/* Tipo de comprobante */}
            <div className="space-y-2">
              <label htmlFor="tipo" className="block text-sm font-bold text-gray-700">
                Tipo de comprobante
              </label>
              <div className="relative">
                <select
                  id="tipo"
                  value={formData.tipo}
                  onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all"
                >
                  <option value="Factura">Factura</option>
                  <option value="Boleta">Boleta</option>
                  <option value="Nota de Crédito">Nota de Crédito</option>
                  <option value="Nota de Débito">Nota de Débito</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Serie & Correlativo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="serie" className="block text-sm font-bold text-gray-700">
                  Serie
                </label>
                <input
                  type="text"
                  id="serie"
                  placeholder="Ejemplo: F001"
                  value={formData.serie}
                  onChange={(e) => setFormData({...formData, serie: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all uppercase"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="correlativo" className="block text-sm font-bold text-gray-700">
                  Correlativo
                </label>
                <input
                  type="text"
                  id="correlativo"
                  placeholder="Ejemplo: 114"
                  value={formData.correlativo}
                  onChange={(e) => setFormData({...formData, correlativo: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Fecha de emisión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fecha" className="block text-sm font-bold text-gray-700">
                  Fecha de emisión
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="fecha"
                    value={formData.fecha}
                    onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#101d69] focus:border-transparent transition-all [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full cursor-pointer"
                    required
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <CalendarBlank size={20} weight="bold" />
                  </div>
                </div>
              </div>
              <div className="hidden md:block"></div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#101d69] hover:bg-[#0d1650] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
              >
                Buscar comprobante
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  )
}
