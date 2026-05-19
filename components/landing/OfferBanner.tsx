'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'phosphor-react'

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 24,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          clearInterval(timer)
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const pad = (num: number) => String(num).padStart(2, '0')

  return (
    <div className="relative bg-gradient-to-r from-[#101d69] to-[#0d1650] text-white py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <Clock size={20} weight="fill" className="flex-shrink-0" />
            <div className="text-center sm:text-left">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-wide">
                Oferta en 24 horas
              </p>
              <p className="text-lg md:text-xl font-bold">35% OFF</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-lg">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold font-mono">
                {pad(timeLeft.hours)}
              </div>
              <p className="text-xs text-gray-200">h</p>
            </div>
            <span className="text-2xl font-bold">:</span>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold font-mono">
                {pad(timeLeft.minutes)}
              </div>
              <p className="text-xs text-gray-200">m</p>
            </div>
            <span className="text-2xl font-bold">:</span>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold font-mono">
                {pad(timeLeft.seconds)}
              </div>
              <p className="text-xs text-gray-200">s</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="hidden sm:block px-6 py-2 bg-[#fd741a] text-white font-semibold rounded-lg hover:bg-[#e56a14] transition-all whitespace-nowrap">
            Aprovechar oferta
          </button>
        </div>

        {/* Mobile CTA */}
        <button className="sm:hidden w-full mt-3 px-4 py-2 bg-[#fd741a] text-white font-semibold rounded-lg hover:bg-[#e56a14] transition-all">
          Aprovechar oferta
        </button>
      </div>
    </div>
  )
}
