import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'
import CTAButton from '@/components/ui/CTAButton'
import { profile } from '@/data/profile'

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <Badge icon="✦" text={profile.availability} />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tighter mb-6 mt-8"
        >
          {profile.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {profile.bio.split('.')[0]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <CTAButton href={`mailto:${profile.email}`} variant="primary">
            Get in Touch →
          </CTAButton>
          <CTAButton href={profile.behance} variant="secondary" external>
            View Portfolio
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}
