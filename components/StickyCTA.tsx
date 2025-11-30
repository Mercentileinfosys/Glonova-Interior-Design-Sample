'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X } from 'lucide-react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {!isExpanded ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(true)}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark shadow-2xl shadow-metallic-gold/50 flex items-center justify-center group"
            >
              <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-effect rounded-2xl p-6 shadow-2xl border border-metallic-gold/30 w-80"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-1">
                    Book a Consultation
                  </h3>
                  <p className="text-warmGrey-light text-sm">
                    Get expert advice on your project
                  </p>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-warmGrey-light hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:+6512345678"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-metallic-gold/30 transition-all duration-300 text-center"
                >
                  Call Now
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsExpanded(false)}
                  className="block w-full px-4 py-3 glass-effect border border-metallic-gold/30 text-white font-semibold rounded-lg hover:bg-metallic-gold/10 transition-all duration-300 text-center"
                >
                  Request Quote
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-warmGrey-dark/20 text-center">
                <p className="text-warmGrey-light text-xs">
                  Available Mon-Fri, 9AM-6PM
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
