import { motion } from 'framer-motion'
import type { CaseStudy } from '@/data/caseStudies'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index: number
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-8 bg-surface rounded-2xl border border-border glow hover:glow-strong transition-all group cursor-pointer"
    >
      <div className="text-4xl mb-4">{caseStudy.icon}</div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">
        {caseStudy.title}
      </h3>
      <p className="text-text-secondary mb-4 leading-relaxed">
        {caseStudy.description}
      </p>
      <div className="pt-4 border-t border-border">
        <p className="text-sm font-semibold text-accent-gold">Result:</p>
        <p className="text-sm text-text-secondary mt-1">{caseStudy.result}</p>
      </div>
    </motion.div>
  )
}
