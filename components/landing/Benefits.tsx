'use client'

import { motion } from 'framer-motion'
import { Package, Lightning, ChartBar, Cloud, Users, ShieldCheck } from 'phosphor-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Package,
      title: 'Control inteligente de inventario',
      highlight: 'Stock por talla, color y modelo',
      description: 'Visualiza exactamente qué tienes disponible con precisión granular.',
    },
    {
      icon: Lightning,
      title: 'Ventas ágiles',
      highlight: 'Cobros rápidos',
      description: 'Registra transacciones en segundos sin complicaciones.',
    },
    {
      icon: ChartBar,
      title: 'Reportes accionables',
      highlight: 'Decisiones basadas en datos',
      description: 'Analiza ventas, tendencias y productos estrella en tiempo real.',
    },
    {
      icon: Cloud,
      title: 'Acceso seguro en la nube',
      highlight: 'Interfaz intuitiva',
      description: 'Controla tu tienda desde cualquier dispositivo, en cualquier lugar.',
    },
    {
      icon: Users,
      title: 'Gestión de equipo',
      highlight: 'Control de permisos',
      description: 'Asigna roles y monitorea la actividad de tu personal.',
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad empresarial',
      highlight: 'Datos protegidos',
      description: 'Encriptación de nivel bancario para tu tranquilidad total.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="beneficios" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
            Beneficios principales
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight max-w-3xl mx-auto">
            Lo que NobiTex ofrece a tu tienda
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="p-6 md:p-8 bg-white rounded-xl border border-gray-200 hover:border-[#101d69] hover:shadow-xl transition-all duration-300 group"
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-[#101d69]/5 flex items-center justify-center group-hover:bg-[#101d69] transition-colors duration-300">
                    <IconComponent weight="duotone" className="text-[#fd741a] group-hover:text-white transition-colors duration-300 w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>

                <p className="text-sm font-semibold text-[#fd741a] mb-3">
                  {benefit.highlight}
                </p>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-[#101d69] font-semibold text-sm group-hover:gap-2 transition-all">
                  Descubre más →
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
