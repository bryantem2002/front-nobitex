'use client'

import { motion } from 'framer-motion'
import { WhatsappLogo } from 'phosphor-react'

export default function FloatingButtons() {
  return (
    <>
      <motion.a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <WhatsappLogo size={24} weight="fill" className="md:w-8 md:h-8" />
      </motion.a>
    </>
  )
}
