'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          style={{ y: imageY, opacity }}
          className="relative order-2 lg:order-1"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="relative aspect-square max-w-lg mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/20 to-metallic-silver/20 rounded-full blur-3xl animate-glow" />
            
            <motion.div
              animate={{
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative rounded-full overflow-hidden smooth-shadow"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 rounded-full border-2 border-metallic-gold/30 z-10" />
              
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=90"
                alt="Luxury Interior Design by Glonova"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 glass-effect rounded-2xl px-6 py-4 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-metallic-gold/20 border-2 border-charcoal"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-xs text-warmGrey-light">01.</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -top-4 -right-4 glass-effect rounded-2xl px-6 py-3"
            >
              <div className="text-xs text-warmGrey-light">02.</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute bottom-1/4 -right-8 glass-effect rounded-2xl px-6 py-3"
            >
              <div className="text-xs text-warmGrey-light">03.</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: textY, opacity }}
          className="order-1 lg:order-2 text-center lg:text-left space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block"
          >
            <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
              01. ___________
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight"
          >
            <span className="block">Luxury</span>
            <span className="block">Interior Design</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-warmGrey-light text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Engineered luxury for modern spaces. Premium manufacturing and interior solutions in Singapore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-block group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark font-semibold tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-metallic-gold/50"
            >
              <span className="relative z-10">LEARN MORE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-metallic-silver to-metallic-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 text-warmGrey-light text-sm tracking-wider"
      >
        <span>01.</span>
        <span>02.</span>
        <span>03.</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-metallic-gold to-transparent"
      />
    </section>
  )
}
