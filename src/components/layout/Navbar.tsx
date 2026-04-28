import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            {profile.name.split(' ')[0]} {profile.name.split(' ')[1]}
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#work"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Work
            </a>
            <a
              href="#projects"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-text-primary text-background rounded-full font-medium hover:bg-text-secondary transition-colors"
            >
              Contact →
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
