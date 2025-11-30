'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light"
    >
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
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Let&apos;s discuss how we can transform your space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 border border-warmGrey-dark/20">
              <h3 className="text-2xl font-display font-semibold text-white mb-8">
                Visit Our Showroom
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-metallic-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-warmGrey-light">
                      21 Sembawang Road
                      <br />
                      Singapore 779079
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-metallic-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+6512345678"
                      className="text-warmGrey-light hover:text-metallic-gold transition-colors"
                    >
                      +65 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-metallic-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:info@glonova.com.sg"
                      className="text-warmGrey-light hover:text-metallic-gold transition-colors"
                    >
                      info@glonova.com.sg
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-metallic-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-metallic-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                    <p className="text-warmGrey-light">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden h-80 smooth-shadow"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5437076952195!2d103.81226107496363!3d1.442298098621395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da13d3d1ee6f7d%3A0x8f8b4c1a3e4f5d6e!2s21%20Sembawang%20Rd%2C%20Singapore%20779079!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect rounded-2xl p-8 border border-warmGrey-dark/20">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">
                Request a Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-warmGrey-light text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal-dark/50 border border-warmGrey-dark/30 rounded-lg text-white placeholder-warmGrey-dark focus:outline-none focus:border-metallic-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-warmGrey-light text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal-dark/50 border border-warmGrey-dark/30 rounded-lg text-white placeholder-warmGrey-dark focus:outline-none focus:border-metallic-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-warmGrey-light text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal-dark/50 border border-warmGrey-dark/30 rounded-lg text-white placeholder-warmGrey-dark focus:outline-none focus:border-metallic-gold transition-colors"
                      placeholder="+65 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-warmGrey-light text-sm font-medium mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal-dark/50 border border-warmGrey-dark/30 rounded-lg text-white focus:outline-none focus:border-metallic-gold transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="doors">Doors</option>
                    <option value="windows">Windows</option>
                    <option value="systems">Sliding Systems</option>
                    <option value="renovation">Full Renovation</option>
                    <option value="custom">Custom Joinery</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-warmGrey-light text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-charcoal-dark/50 border border-warmGrey-dark/30 rounded-lg text-white placeholder-warmGrey-dark focus:outline-none focus:border-metallic-gold transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-metallic-gold/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
                  >
                    Thank you! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
