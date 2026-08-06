'use client'

import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { CaretLeft, CaretRight, CurrencyCircleDollar, Package, ChartLineUp, FileText } from 'phosphor-react'
import { motion } from 'framer-motion'

export default function FeatureCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = () => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi])

  const features = [
    {
      title: 'Registro de ventas',
      description: 'Procesa transacciones en segundos con interfaz intuitiva y búsqueda rápida de productos.',
      icon: CurrencyCircleDollar,
    },
    {
      title: 'Gestión de productos',
      description: 'Organiza tu catálogo por talla, color, modelo y controla disponibilidad en tiempo real.',
      icon: Package,
    },
    {
      title: 'Estadísticas',
      description: 'Visualiza gráficos detallados de ventas, tendencias y productos más vendidos.',
      icon: ChartLineUp,
    },
    {
      title: 'Historial',
      description: 'Accede al registro completo de todas tus operaciones y cambios en el sistema.',
      icon: FileText,
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm md:text-base font-semibold text-[#fd741a] uppercase tracking-widest mb-3">
            Características destacadas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101d69] leading-tight max-w-3xl mx-auto">
            Funcionalidades pensadas para ti
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8 -ml-4 md:-ml-6 lg:-ml-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 lg:pl-8"
                >
                  <motion.div
                    className="h-full p-6 md:p-8 bg-white rounded-xl border border-gray-200 hover:border-[#101d69] hover:shadow-lg transition-all duration-300 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Icon */}
                    <div className="mb-4 text-[#fd741a]">
                      <feature.icon size={48} weight="duotone" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 md:mt-12">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={prevBtnDisabled}
              className="p-2 md:p-3 rounded-lg bg-[#101d69] text-white hover:bg-[#0d1650] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <CaretLeft size={24} weight="bold" />
            </button>

            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === selectedIndex ? 'w-6 bg-[#101d69]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={nextBtnDisabled}
              className="p-2 md:p-3 rounded-lg bg-[#101d69] text-white hover:bg-[#0d1650] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
