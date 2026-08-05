'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo, Question, X, BookOpen, VideoCamera, ChatCircleDots, Calendar, EnvelopeSimple } from 'phosphor-react'

export default function FloatingButtons() {
  const [helpOpen, setHelpOpen] = useState(false)
  const [mascotDismissed, setMascotDismissed] = useState(false)

  return (
    <>
      {/* WhatsApp Floating Button */}
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

      {/* Help/Support Floating Button */}
      <motion.div
        className="fixed bottom-20 md:bottom-32 right-6 md:right-8 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Mascot Peeking Animation */}
        <AnimatePresence>
          {!helpOpen && !mascotDismissed && (
            <motion.div
              className="absolute -top-20 md:-top-24 right-0 flex items-end gap-3"
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -6, 0], // Smooth infinite floating
              }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                },
                duration: 0.4,
              }}
            >
              {/* Tooltip speech bubble using brand typography and accents */}
              <div className="bg-white text-gray-800 text-[11px] md:text-xs font-sans font-bold py-1.5 px-3 rounded-xl shadow-lg border border-gray-200 whitespace-nowrap flex items-center gap-1.5 mb-2 relative">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fd741a] animate-pulse" />
                <span className="text-gray-800">¿Dudas? ¡Escríbeme! 👇</span>
              </div>
              
              {/* Mascot avatar circular display */}
              <div className="relative">
                <div className="w-14 h-14 md:w-16 md:h-16 relative overflow-hidden rounded-full border-[3px] border-[#fd741a] shadow-xl bg-white flex items-center justify-center pointer-events-none">
                  <img
                    src="/mascota-saludando.png"
                    alt="Mascota"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                {/* Dismiss Button Badge */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMascotDismissed(true);
                  }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 hover:border-red-200 shadow-md transition-all"
                  aria-label="Cerrar saludo"
                >
                  <X size={10} weight="bold" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setHelpOpen(!helpOpen)}
          className="w-12 h-12 md:w-16 md:h-16 bg-[#101d69] text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center hover:scale-110 transition-all relative border border-white/10"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {helpOpen ? (
            <X size={24} weight="bold" className="md:w-7 md:h-7" />
          ) : (
            <Question size={24} weight="bold" className="md:w-7 md:h-7" />
          )}
        </motion.button>

        {/* Help Menu */}
        <AnimatePresence>
          {helpOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-3 w-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100/50 p-4 space-y-2.5"
            >
              <div className="text-xs font-sans font-extrabold text-[#101d69] tracking-wider uppercase mb-3 flex items-center gap-1.5 opacity-90">
                <span className="w-1.5 h-1.5 rounded-full bg-[#101d69]" />
                ¿Cómo podemos ayudarte?
              </div>

              <button className="w-full text-left p-3 rounded-xl bg-gray-50/50 hover:bg-[#101d69]/5 transition-all text-xs font-sans text-gray-700 font-semibold hover:text-[#101d69] flex items-center gap-3 border border-transparent hover:border-[#101d69]/5">
                <BookOpen size={18} weight="bold" className="text-[#101d69]" />
                Ver documentación
              </button>

              <button className="w-full text-left p-3 rounded-xl bg-gray-50/50 hover:bg-[#101d69]/5 transition-all text-xs font-sans text-gray-700 font-semibold hover:text-[#101d69] flex items-center gap-3 border border-transparent hover:border-[#101d69]/5">
                <VideoCamera size={18} weight="bold" className="text-[#101d69]" />
                Ver tutoriales
              </button>

              <button className="w-full text-left p-3 rounded-xl bg-gray-50/50 hover:bg-[#101d69]/5 transition-all text-xs font-sans text-gray-700 font-semibold hover:text-[#101d69] flex items-center gap-3 border border-transparent hover:border-[#101d69]/5">
                <ChatCircleDots size={18} weight="bold" className="text-[#101d69]" />
                Chat en vivo
              </button>

              <button className="w-full text-left p-3 rounded-xl bg-gray-50/50 hover:bg-[#101d69]/5 transition-all text-xs font-sans text-gray-700 font-semibold hover:text-[#101d69] flex items-center gap-3 border border-transparent hover:border-[#101d69]/5">
                <Calendar size={18} weight="bold" className="text-[#101d69]" />
                Agendar demo
              </button>

              <a
                href="mailto:soporte@norbitex.com"
                className="w-full text-left p-3 rounded-xl bg-[#fd741a]/10 hover:bg-[#fd741a]/20 transition-all text-xs font-sans text-[#fd741a] font-bold flex items-center gap-3 border border-[#fd741a]/20 shadow-sm"
              >
                <EnvelopeSimple size={18} weight="bold" />
                Escribir a soporte
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
