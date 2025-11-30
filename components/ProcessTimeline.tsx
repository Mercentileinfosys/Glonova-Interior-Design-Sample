'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, PenTool, Factory as FactoryIcon, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Consultation',
    description:
      'Initial meeting to understand your vision, requirements, and budget. We assess your space and provide expert recommendations.',
    details: ['Site Visit', 'Requirement Analysis', 'Budget Planning'],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description:
      '3D visualization and detailed technical drawings. Refine the design until it perfectly matches your expectations.',
    details: ['3D Rendering', 'Material Selection', 'Design Approval'],
  },
  {
    number: '03',
    icon: FactoryIcon,
    title: 'Manufacture',
    description:
      'Precision manufacturing in our ISO-certified facilities using premium materials and advanced technology.',
    details: ['Quality Materials', 'Precision Cutting', 'Quality Control'],
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Installation',
    description:
      'Professional installation by certified technicians. Final inspection and handover with warranty documentation.',
    details: ['Expert Installation', 'Final Inspection', 'Warranty Handover'],
  },
]

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            HOW WE WORK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            From consultation to completion, we ensure excellence at every step
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-warmGrey-dark/20 hidden lg:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-metallic-gold to-metallic-silver"
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  <div className="relative flex-shrink-0">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-metallic-gold to-metallic-silver flex items-center justify-center shadow-lg shadow-metallic-gold/30"
                    >
                      <step.icon className="w-8 h-8 text-charcoal-dark" />
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className="absolute inset-0 rounded-full bg-metallic-gold/20 blur-xl"
                    />
                  </div>

                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                      className="glass-effect rounded-2xl p-8 lg:p-10 border border-warmGrey-dark/20 hover:border-metallic-gold/30 transition-all duration-500 group"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="text-metallic-gold text-sm font-medium tracking-[0.3em] mb-3">
                            STEP {step.number}
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-display font-semibold text-white group-hover:text-metallic-gold transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="text-6xl font-display text-metallic-gold/10 group-hover:text-metallic-gold/20 transition-colors duration-300"
                        >
                          {step.number}
                        </motion.div>
                      </div>

                      <p className="text-warmGrey-light text-base lg:text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {step.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-charcoal-dark/50 border border-metallic-gold/10"
                          >
                            <div className="w-2 h-2 rounded-full bg-metallic-gold" />
                            <span className="text-warmGrey-light text-sm font-medium">
                              {detail}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect inline-block px-8 py-6 rounded-2xl">
            <p className="text-warmGrey-light text-lg mb-4">
              Ready to start your project?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
            >
              Schedule Consultation
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
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
