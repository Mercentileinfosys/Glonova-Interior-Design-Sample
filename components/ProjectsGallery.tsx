'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Living',
    category: 'Full Renovation',
    location: 'Orchard, Singapore',
    before: 'https://images.unsplash.com/photo-1581858726788-75bc0f1a4588?w=600&q=85',
    after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85',
  },
  {
    id: 2,
    title: 'Executive Office Suite',
    category: 'Commercial',
    location: 'CBD, Singapore',
    before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=85',
    after: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=85',
  },
  {
    id: 3,
    title: 'Luxury Penthouse',
    category: 'High-End Residential',
    location: 'Marina Bay, Singapore',
    before: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&q=85',
    after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85',
  },
  {
    id: 4,
    title: 'Contemporary Kitchen',
    category: 'Kitchen Renovation',
    location: 'Sentosa, Singapore',
    before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=85',
    after: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=85',
  },
]

function BeforeAfterSlider({
  before,
  after,
  title,
}: {
  before: string
  after: string
  title: string
}) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <div className="absolute inset-0">
        <Image
          src={after}
          alt={`${title} - After`}
          fill
          className="object-cover"
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${title} - Before`}
          fill
          className="object-cover"
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="#2B2B2B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 19L16 12L9 5"
              stroke="#2B2B2B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="absolute top-4 left-4 px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-metallic-gold/80 backdrop-blur-sm text-charcoal text-xs font-medium rounded-full">
        AFTER
      </div>
    </div>
  )
}

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    'All',
    'Full Renovation',
    'Commercial',
    'High-End Residential',
    'Kitchen Renovation',
  ]

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            OUR WORK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Transforming spaces with precision and creativity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal shadow-lg'
                  : 'glass-effect text-warmGrey-light hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl smooth-shadow hover:shadow-2xl transition-shadow duration-500">
                <BeforeAfterSlider
                  before={project.before}
                  after={project.after}
                  title={project.title}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-6 bg-charcoal-light"
                >
                  <div className="text-xs text-metallic-gold font-medium tracking-wider uppercase mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-warmGrey-light text-sm flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {project.location}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
