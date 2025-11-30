'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Homeowner',
    location: 'Orchard, Singapore',
    rating: 5,
    text: 'Glonova transformed our home beyond expectations. Their attention to detail and quality craftsmanship is unmatched. From the initial consultation to final installation, everything was seamless.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=85',
    project: 'Full Home Renovation',
  },
  {
    id: 2,
    name: 'Michael Tan',
    role: 'Business Owner',
    location: 'CBD, Singapore',
    rating: 5,
    text: 'Outstanding service and premium quality products. The custom doors and windows have completely elevated our office space. The team was professional, punctual, and delivered exactly what they promised.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=85',
    project: 'Office Renovation',
  },
  {
    id: 3,
    name: 'Jennifer Wong',
    role: 'Interior Designer',
    location: 'Sentosa Cove, Singapore',
    rating: 5,
    text: 'As a designer, I demand perfection. Glonova consistently delivers high-end solutions that meet the most exacting standards. Their manufacturing quality and installation precision are exceptional.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=85',
    project: 'Luxury Penthouse',
  },
  {
    id: 4,
    name: 'David Lim',
    role: 'Property Developer',
    location: 'Marina Bay, Singapore',
    rating: 5,
    text: 'We have worked with Glonova on multiple projects. Their reliability, quality standards, and ability to meet tight deadlines make them our preferred partner for all interior solutions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=85',
    project: 'Commercial Development',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    )
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Client <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Singapore
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[500px] lg:h-[450px] flex items-center justify-center perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  rotateY: { duration: 0.6 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="glass-effect rounded-3xl p-8 lg:p-12 border border-warmGrey-dark/20 shadow-2xl">
                  <div className="flex items-start gap-6 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative flex-shrink-0"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-metallic-gold shadow-lg">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-metallic-gold rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-4 h-4 text-charcoal-dark" />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-semibold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-warmGrey-light text-sm mb-2">
                        {testimonials[currentIndex].role} •{' '}
                        {testimonials[currentIndex].location}
                      </p>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-metallic-gold text-metallic-gold"
                            />
                          )
                        )}
                      </div>
                      <div className="inline-block px-3 py-1 bg-metallic-gold/10 border border-metallic-gold/20 rounded-full">
                        <span className="text-metallic-gold text-xs font-medium">
                          {testimonials[currentIndex].project}
                        </span>
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-warmGrey-light text-lg lg:text-xl leading-relaxed italic">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </blockquote>

                  <div className="mt-8 flex items-center justify-between pt-6 border-t border-warmGrey-dark/20">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-metallic-gold" />
                      <span className="text-warmGrey-light text-sm">
                        Verified Customer
                      </span>
                    </div>
                    <div className="text-warmGrey-dark text-sm">
                      {currentIndex + 1} / {testimonials.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full glass-effect border border-metallic-gold/30 flex items-center justify-center hover:bg-metallic-gold/10 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-metallic-gold" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-metallic-gold'
                      : 'w-2 bg-warmGrey-dark hover:bg-warmGrey-light'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full glass-effect border border-metallic-gold/30 flex items-center justify-center hover:bg-metallic-gold/10 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-metallic-gold" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
