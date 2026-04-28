import { motion } from 'framer-motion'
import Badge from './Badge'

interface SectionHeadingProps {
  badge?: {
    icon?: string
    text: string
  }
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ badge, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center ${className}`}
    >
      {badge && (
        <div className="mb-8 flex justify-center">
          <Badge icon={badge.icon} text={badge.text} />
        </div>
      )}
      <h2 className="text-5xl md:text-6xl font-bold mb-6">{title}</h2>
      {subtitle && (
        <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
