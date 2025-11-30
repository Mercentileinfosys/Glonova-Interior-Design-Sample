'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const products = [
  {
    id: 1,
    title: 'Premium Doors',
    category: 'Doors',
    description: 'Custom-crafted doors with precision engineering',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85',
    specs: ['Solid wood', 'Custom finish', 'Smart locks'],
  },
  {
    id: 2,
    title: 'Luxury Windows',
    category: 'Windows',
    description: 'Energy-efficient windows with modern aesthetics',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=600&q=85',
    specs: ['Double glazed', 'UV protection', 'Noise reduction'],
  },
  {
    id: 3,
    title: 'Sliding Systems',
    category: 'Systems',
    description: 'Seamless sliding door systems for modern living',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85',
    specs: ['Smooth operation', 'Space saving', 'Durable tracks'],
  },
  {
    id: 4,
    title: 'Entrance Doors',
    category: 'Doors',
    description: 'Grand entrance solutions with security features',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=85',
    specs: ['Security rated', 'Weather sealed', 'Smart access'],
  },
  {
    id: 5,
    title: 'Bay Windows',
    category: 'Windows',
    description: 'Panoramic views with architectural elegance',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85',
    specs: ['Wide angles', 'Natural light', 'Ventilation'],
  },
  {
    id: 6,
    title: 'Partition Systems',
    category: 'Systems',
    description: 'Flexible space division solutions',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=85',
    specs: ['Modular design', 'Sound insulation', 'Glass options'],
  },
]

function ProductCard({ product }: { product: typeof products[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl smooth-shadow cursor-pointer"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-light">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>

        <motion.div
          style={{
            transform: 'translateZ(50px)',
          }}
          className="absolute inset-0 p-6 flex flex-col justify-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className="mb-4 space-y-2"
          >
            {product.specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -20,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center gap-2 text-warmGrey-light text-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold" />
                <span>{spec}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="space-y-2">
            <div className="text-xs text-metallic-gold font-medium tracking-wider uppercase">
              {product.category}
            </div>
            <h3 className="text-2xl font-display font-semibold text-white">
              {product.title}
            </h3>
            <p className="text-warmGrey-light text-sm line-clamp-2">
              {product.description}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-metallic-gold/30 text-white text-sm font-medium rounded-full hover:bg-metallic-gold/20 transition-colors duration-300">
              View Details
            </button>
          </motion.div>
        </motion.div>

        <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-effect flex items-center justify-center">
          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-metallic-gold"
          >
            ↗
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProductsGrid() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Premium <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Expertly crafted doors, windows, and systems for modern interiors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
