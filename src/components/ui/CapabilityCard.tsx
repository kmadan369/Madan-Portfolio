import { motion } from 'framer-motion'
import type { Capability } from '@/data/capabilities'

interface CapabilityCardProps {
  capability: Capability
  index: number
}

export default function CapabilityCard({ capability, index }: CapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 bg-surface rounded-2xl border border-border glow"
    >
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="text-accent-gold">✦</span>
        {capability.title}
      </h3>
      <ul className="space-y-3">
        {capability.skills.map((skill, idx) => (
          <li key={idx} className="text-text-secondary text-sm leading-relaxed">
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
