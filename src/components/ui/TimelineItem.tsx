import { motion } from 'framer-motion'
import type { Experience } from '@/data/experience'

interface TimelineItemProps {
  experience: Experience
  index: number
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const glowClass = experience.highlight ? 'glow-strong' : 'glow'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`p-8 md:p-10 bg-surface rounded-3xl border border-border ${glowClass}`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{experience.company}</h3>
          <p className="text-lg text-accent-gold font-medium">{experience.role}</p>
        </div>
        <div className="text-text-secondary mt-2 md:mt-0">
          {experience.period}
        </div>
      </div>
      <p className="text-text-secondary mb-4">{experience.location}</p>
      <ul className="space-y-3 text-text-secondary">
        {experience.achievements.map((achievement, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="text-accent-gold mt-1">→</span>
            <span dangerouslySetInnerHTML={{ 
              __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>') 
            }} />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
