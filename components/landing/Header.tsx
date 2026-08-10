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
    { label: 'Inicio', href: '/' },
    { label: 'Beneficios', href: '/#beneficios' },
    { label: 'Planes', href: '/#planes' },
    { label: 'Nosotros', href: '/#nosotros' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
      >
        <div className="w-full px-4 sm:px-5 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <img src="/logopng.png" alt="Norbitex Logo" className="h-8 lg:h-9 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm xl:text-base font-medium text-gray-700 hover:text-[#101d69] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <a
                href="https://nobitex-mu.vercel.app/login"
                className="px-3 xl:px-4 py-2 text-sm font-semibold text-[#101d69] bg-transparent border border-[#101d69] rounded-full hover:bg-[#101d69] hover:text-white transition-all whitespace-nowrap"
              >
                Iniciar sesión
              </a>
              <a
                href="https://nobitex-mu.vercel.app/register"
                className="px-3 xl:px-4 py-2 text-sm font-semibold text-white bg-[#101d69] rounded-full hover:bg-[#0d1650] transition-all whitespace-nowrap"
              >
                Registrarme
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#101d69]"
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
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 py-4 px-4 shadow-xl"
          >
            <nav className="flex flex-col gap-3 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-gray-700 hover:text-[#101d69] py-3 px-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 mt-2">
              <a
                href="https://nobitex-mu.vercel.app/login"
                className="w-full px-4 py-3 text-base font-semibold text-[#101d69] bg-transparent border border-[#101d69] rounded-full text-center active:bg-gray-50"
              >
                Iniciar sesión
              </a>
              <a
                href="https://nobitex-mu.vercel.app/register"
                className="w-full px-4 py-3 text-base font-semibold text-white bg-[#101d69] rounded-full text-center active:bg-[#0d1650]"
              >
                Registrarme
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Offset for fixed header */}
      <div className="h-16 lg:h-20" id="inicio" />
    </>
  )
}
