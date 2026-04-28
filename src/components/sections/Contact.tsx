import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Available for freelance projects and full-time opportunities in product design and UX strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="px-10 py-5 bg-text-primary text-background rounded-full font-bold text-lg hover:scale-105 transition-all"
            >
              Email Me →
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-surface border border-border rounded-full font-bold text-lg hover:border-text-primary transition-all"
            >
              LinkedIn
            </a>
            <a
              href={profile.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-surface border border-border rounded-full font-bold text-lg hover:border-text-primary transition-all"
            >
              Behance
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
