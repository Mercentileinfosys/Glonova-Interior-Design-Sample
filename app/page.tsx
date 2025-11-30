import Navigation from '@/components/Navigation'
import Hero3D from '@/components/Hero3D'
import ProductsGrid from '@/components/ProductsGrid'
import ProjectsGallery from '@/components/ProjectsGallery'
import ServicesBlock from '@/components/ServicesBlock'
import ProcessTimeline from '@/components/ProcessTimeline'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero3D />
      <ProductsGrid />
      <ServicesBlock />
      <ProjectsGallery />
      <ProcessTimeline />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  )
}
