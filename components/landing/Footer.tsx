'use client'

import { motion } from 'framer-motion'
import {
  WhatsappLogo,
  EnvelopeOpen,
  InstagramLogo,
  FacebookLogo,
} from 'phosphor-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Producto',
      links: [
        { label: 'Características', href: '#' },
        { label: 'Planes', href: '#planes' },
        { label: 'Integraciones', href: '#' },
        { label: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Blog', href: '#' },
        { label: 'Carreras', href: '#' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Términos', href: '/terminos' },
        { label: 'Privacidad', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Compliance', href: '#' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { label: 'Centro de ayuda', href: '#' },
        { label: 'Documentación', href: '#' },
        { label: 'Estado del servicio', href: '#' },
        { label: 'Reportar problema', href: '#' },
      ],
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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer id="contacto" className="bg-[#101d69] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Top section with logo and description */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logopngblanco.png" alt="Norbitex Logo" className="h-10 md:h-12 w-auto" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              El POS para tu tienda de ropa. Controla, vende, crece.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                title="WhatsApp"
              >
                <WhatsappLogo size={20} weight="bold" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                title="Instagram"
              >
                <InstagramLogo size={20} weight="bold" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                title="Facebook"
              >
                <FacebookLogo size={20} weight="bold" />
              </a>
            </div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="font-semibold text-base mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact section */}
        <motion.div
          className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-semibold text-lg mb-6">Ponte en contacto</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Email */}
            <a
              href="mailto:hola@norbitex.com"
              className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
            >
              <EnvelopeOpen
                size={24}
                weight="bold"
                className="text-[#fd741a] group-hover:scale-110 transition-transform flex-shrink-0 mt-1"
              />
              <div>
                <p className="text-sm text-white/70 mb-1">Email</p>
                <p className="font-semibold text-white group-hover:underline">
                  hola@norbitex.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/51999999999"
              className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo
                size={24}
                weight="bold"
                className="text-[#fd741a] group-hover:scale-110 transition-transform flex-shrink-0 mt-1"
              />
              <div>
                <p className="text-sm text-white/70 mb-1">WhatsApp</p>
                <p className="font-semibold text-white group-hover:underline">
                  +51 999 999 999
                </p>
              </div>
            </a>

            {/* Phone/Support */}
            <a
              href="tel:+51999999999"
              className="flex items-start gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-[#fd741a] flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 transition-transform mt-1">
                ☎
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Teléfono</p>
                <p className="font-semibold text-white group-hover:underline">
                  +51 (1) 999 9999
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left text-white/70 text-sm">
            <p>
              © {currentYear} Norbitex. Todos los derechos reservados.
            </p>
          </div>

          {/* Security badges */}
          <div className="flex items-center gap-4 text-xs text-white/70">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
