'use client'

import { motion } from 'framer-motion'
import {
  Package,
  Receipt,
  WarningCircle,
  TrendUp,
} from 'phosphor-react'

export default function Problems() {
  const problems = [
    {
      icon: Package,
      title: 'No sabes qué tallas te quedan en stock',
      description:
        'Pierde inventario y clientes sin claridad de disponibilidad por talla y color.',
    },
    {
      icon: Receipt,
      title: 'Pierdes tiempo registrando ventas',
      description:
        'Procesos manuales lentos que retrasan tu operación y generan errores.',
    },
    {
      icon: WarningCircle,
      title: 'No tienes claridad de caja',
      description:
        'Sin reconciliación diaria ni reportes confiables de ingresos y egresos.',
    },
    {
      icon: TrendUp,
      title: 'No sabes qué productos rotan más',
      description:
        'Falta de datos para tomar decisiones de compra y estilo inteligentes.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="soluciones" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
            Problemas que resolvemos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight max-w-3xl mx-auto">
            Desafíos comunes en tiendas de ropa
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <motion.div
                key={index}
                className="p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#fd741a] hover:bg-[#fd741a]/5 transition-all duration-300 group cursor-pointer"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex gap-4 md:gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#fd741a]/10 group-hover:bg-[#fd741a]/20 transition-all">
                      <IconComponent
                        size={24}
                        weight="bold"
                        className="text-[#fd741a]"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
