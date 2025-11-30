'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Doors', href: '#products' },
      { name: 'Windows', href: '#products' },
      { name: 'Sliding Systems', href: '#products' },
      { name: 'Full Renovation', href: '#services' },
    ],
    resources: [
      { name: 'Product Catalog', href: '#' },
      { name: 'Technical Specs', href: '#' },
      { name: 'Warranty Info', href: '#' },
      { name: 'Care Guide', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/glonova', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/glonova', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/glonova', label: 'LinkedIn' },
  ]

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'BCA Certified',
    'Green Label Certified',
  ]

  return (
    <footer className="relative bg-gradient-to-b from-charcoal-light to-charcoal-dark pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block mb-6">
                <h3 className="text-3xl font-display font-bold gradient-text">
                  GLONOVA
                </h3>
              </Link>
              <p className="text-warmGrey-light text-sm leading-relaxed mb-6 max-w-sm">
                Premium manufacturing and interior solutions in Singapore. 
                Specializing in doors, windows, and full interior renovations 
                with engineered luxury for modern spaces.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-warmGrey-light text-sm">
                  <MapPin className="w-4 h-4 text-metallic-gold flex-shrink-0" />
                  <span>21 Sembawang Road, Singapore 779079</span>
                </div>
                <div className="flex items-center gap-3 text-warmGrey-light text-sm">
                  <Phone className="w-4 h-4 text-metallic-gold flex-shrink-0" />
                  <a href="tel:+6512345678" className="hover:text-metallic-gold transition-colors">
                    +65 1234 5678
                  </a>
                </div>
                <div className="flex items-center gap-3 text-warmGrey-light text-sm">
                  <Mail className="w-4 h-4 text-metallic-gold flex-shrink-0" />
                  <a
                    href="mailto:info@glonova.com.sg"
                    className="hover:text-metallic-gold transition-colors"
                  >
                    info@glonova.com.sg
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full glass-effect border border-metallic-gold/30 flex items-center justify-center text-warmGrey-light hover:text-metallic-gold hover:bg-metallic-gold/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-warmGrey-light hover:text-metallic-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-warmGrey-light hover:text-metallic-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-warmGrey-light hover:text-metallic-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-8 border-t border-warmGrey-dark/20"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="px-4 py-2 glass-effect border border-metallic-gold/20 rounded-full"
              >
                <span className="text-metallic-gold text-xs font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-warmGrey-dark/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-warmGrey-light text-sm">
            <p>
              © {currentYear} Glonova Pte Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-metallic-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-metallic-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-metallic-gold transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
