'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { List, X, WhatsappLogo, Question } from 'phosphor-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Planes', href: '#planes' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="#" className="flex-shrink-0 flex items-center gap-3">
              <img src="/logonobi.png" alt="NobiTex Logo" className="h-10 md:h-12 w-auto" />
              <div className="text-2xl font-bold">
                <span className="text-[#101d69]">Nobi</span><span className="text-[#fd741a]">Tex</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#101d69] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-[#101d69] bg-transparent border border-[#101d69] rounded-lg hover:bg-[#101d69] hover:text-white transition-all">
                Iniciar sesión
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-[#101d69] rounded-lg hover:bg-[#0d1650] transition-all">
                Solicitar demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#101d69]"
            >
              {isOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100 py-4 px-4"
          >
            <nav className="flex flex-col gap-3 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#101d69] py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-2 pt-3 border-t border-gray-100">
              <button className="flex-1 px-4 py-2 text-sm font-semibold text-[#101d69] bg-transparent border border-[#101d69] rounded-lg">
                Iniciar sesión
              </button>
              <button className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-[#101d69] rounded-lg">
                Solicitar demo
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Offset for fixed header */}
      <div className="h-16 md:h-20" id="inicio" />
    </>
  )
}
