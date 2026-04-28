import { motion } from 'framer-motion'

interface BadgeProps {
  icon?: string
  text: string
  className?: string
}

export default function Badge({ icon, text, className = '' }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border ${className}`}
    >
      {icon && <span className="text-accent-gold">{icon}</span>}
      <span className="text-sm font-medium">{text}</span>
    </motion.div>
  )
}
