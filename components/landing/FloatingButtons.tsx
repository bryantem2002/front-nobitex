'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo, Question, X, BookOpen, VideoCamera, ChatCircleDots, Calendar, EnvelopeSimple } from 'phosphor-react'

export default function FloatingButtons() {
  const [helpOpen, setHelpOpen] = useState(false)

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/51999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <WhatsappLogo size={28} weight="fill" className="md:w-8 md:h-8" />
      </motion.a>

      {/* Help/Support Floating Button */}
      <motion.div
        className="fixed bottom-24 md:bottom-32 right-6 md:right-8 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button
          onClick={() => setHelpOpen(!helpOpen)}
          className="w-14 h-14 md:w-16 md:h-16 bg-[#101d69] text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {helpOpen ? (
            <X size={28} weight="bold" />
          ) : (
            <Question size={28} weight="bold" />
          )}
        </motion.button>

        {/* Help Menu */}
        <AnimatePresence>
          {helpOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 space-y-3"
            >
              <div className="text-sm font-semibold text-[#101d69] mb-4">
                ¿Cómo podemos ayudarte?
              </div>

              <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-[#101d69]/5 transition-all text-sm text-gray-700 font-medium hover:text-[#101d69] flex items-center gap-2">
                <BookOpen size={18} weight="bold" /> Ver documentación
              </button>

              <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-[#101d69]/5 transition-all text-sm text-gray-700 font-medium hover:text-[#101d69] flex items-center gap-2">
                <VideoCamera size={18} weight="bold" /> Ver tutoriales
              </button>

              <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-[#101d69]/5 transition-all text-sm text-gray-700 font-medium hover:text-[#101d69] flex items-center gap-2">
                <ChatCircleDots size={18} weight="bold" /> Chat en vivo
              </button>

              <button className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-[#101d69]/5 transition-all text-sm text-gray-700 font-medium hover:text-[#101d69] flex items-center gap-2">
                <Calendar size={18} weight="bold" /> Agendar demo
              </button>

              <a
                href="mailto:soporte@nobitex.com"
                className="w-full text-left p-3 rounded-lg bg-[#101d69]/10 hover:bg-[#101d69]/20 transition-all text-sm text-[#101d69] font-medium flex items-center gap-2"
              >
                <EnvelopeSimple size={18} weight="bold" /> Escribir a soporte
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Pulse animation for WhatsApp */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  )
}
