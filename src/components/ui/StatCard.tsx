import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

interface StatCardProps {
  number: string
  label: string
  suffix?: string
  delay?: number
}

export default function StatCard({ number, label, suffix = '', delay = 0 }: StatCardProps) {
  const isRange = number.includes('-')
  const numValue = isRange ? parseInt(number.split('-')[0]) : parseInt(number)
  const animatedValue = useCountUp(numValue, 2000, delay)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="p-6 bg-surface rounded-2xl border border-border glow hover:glow-strong transition-all"
    >
      <div className="text-4xl md:text-5xl font-extrabold mb-2">
        {isRange ? number : `${animatedValue}${suffix}`}
      </div>
      <div className="text-sm text-text-secondary">{label}</div>
    </motion.div>
  )
}
