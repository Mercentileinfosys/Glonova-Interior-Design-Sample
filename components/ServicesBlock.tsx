'use client'

import { motion } from 'framer-motion'
import { Factory, Hammer, Home, Wrench } from 'lucide-react'

const services = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description:
      'State-of-the-art facilities producing premium doors, windows, and interior systems with precision engineering.',
    features: ['ISO Certified', 'Quality Control', 'Custom Fabrication'],
  },
  {
    icon: Hammer,
    title: 'Custom Joinery',
    description:
      'Bespoke woodworking solutions tailored to your exact specifications, from concept to completion.',
    features: ['Handcrafted', 'Premium Materials', 'Unique Designs'],
  },
  {
    icon: Home,
    title: 'Full Renovation',
    description:
      'Comprehensive interior transformation services, managing every aspect from design to final installation.',
    features: ['Turnkey Solutions', 'Project Management', 'Design Consultation'],
  },
  {
    icon: Wrench,
    title: 'Installation',
    description:
      'Professional installation by certified technicians ensuring perfect fit and finish for all products.',
    features: ['Expert Technicians', 'Warranty Included', 'Post-Install Support'],
  },
]

export default function ServicesBlock() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent_70%)]" />

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-metallic-gold/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-metallic-silver/5 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            WHAT WE DO
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Comprehensive solutions from manufacturing to installation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl glass-effect border border-warmGrey-dark/20 hover:border-metallic-gold/30 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-metallic-gold/20 to-metallic-silver/20 mb-6 group-hover:shadow-lg group-hover:shadow-metallic-gold/20 transition-all duration-300"
                  >
                    <service.icon className="w-8 h-8 text-metallic-gold" />
                  </motion.div>

                  <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-metallic-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-warmGrey-light text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2 text-warmGrey-light text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 pt-6 border-t border-warmGrey-dark/20"
                  >
                    <button className="text-metallic-gold text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        →
                      </motion.span>
                    </button>
                  </motion.div>
                </div>

                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-metallic-gold/10 rounded-full blur-2xl group-hover:bg-metallic-gold/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark font-semibold tracking-wider hover:scale-105 hover:shadow-2xl hover:shadow-metallic-gold/50 transition-all duration-300"
          >
            GET A QUOTE
          </a>
        </motion.div>
      </div>
    </section>
  )
}
