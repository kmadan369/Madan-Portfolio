import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'
import Capabilities from '@/components/sections/Capabilities'
import Experience from '@/components/sections/Experience'
import CaseStudies from '@/components/sections/CaseStudies'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import '@/styles/globals.css'
import '@/styles/animations.css'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Capabilities />
        <Experience />
        <CaseStudies />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
