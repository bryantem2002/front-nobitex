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
            Lo que Norbitex ofrece a tu tienda
          </h2>
        </motion.div>

        {/* BANNER DE DESPEGUE (Cielo Estrellado) */}
        <div className="relative w-full mb-16 lg:mb-24 mt-4">

          {/* Fondo del Cielo Estrellado (Capa base con overflow oculto para que no se salgan las estrellas) */}
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

          {/* Contenido del Banner (Z-index mayor para que la mascota pueda salirse de la caja) */}
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

            {/* MASCOTA EN COHETE (Solución para que no desaparezca) */}
            <motion.div 
              className="lg:w-2/5 flex justify-center lg:justify-end w-full relative h-[280px] lg:h-[400px] z-20 mt-8 lg:mt-0"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {/* Utilizamos un contenedor seguro para que imágenes gigantes no rompan el layout */}
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

        {/* Cuadrícula de Beneficios */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="p-8 md:p-8 bg-white rounded-xl border border-gray-200 hover:border-[#101d69] hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div className="mb-6">
                  {/* Ícono anaranjado FIJO sin hover para mantener consistencia con tu web */}
                  <div className="w-14 h-14 rounded-lg bg-[#101d69]/5 flex items-center justify-center">
                    <IconComponent weight="duotone" className="text-[#fd741a] w-8 h-8" />
                  </div>
                </div>

                {/* Letras en negrita oscuras (gray-900), NO azules */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>

                {/* Highlight estándar sin pastillas para no distorsionar tu web */}
                <p className="text-sm font-semibold text-[#fd741a] mb-3">
                  {benefit.highlight}
                </p>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
                  {benefit.description}
                </p>

                {/* Enlace original */}
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
