import { motion } from 'framer-motion'
import { achievements, education, languages } from '@/data/achievements'

export default function Achievements() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-surface rounded-3xl border border-border glow"
          >
            <h2 className="text-3xl font-bold mb-6">🏆 Achievements</h2>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-accent-gold text-xl">{achievement.icon}</span>
                  <div>
                    <p className="font-semibold">{achievement.title}</p>
                    <p className="text-text-secondary text-sm">
                      {achievement.organization} ({achievement.year})
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-surface rounded-3xl border border-border glow"
          >
            <h2 className="text-3xl font-bold mb-6">🎓 Education</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-lg">{education.institution}</p>
                <p className="text-text-secondary">{education.degree}</p>
                <p className="text-accent-gold font-semibold">{education.grade}</p>
                <p className="text-text-secondary text-sm mt-2">
                  {education.period} | {education.location}
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="font-bold mb-2">Languages</p>
                <ul className="text-text-secondary space-y-1">
                  {languages.map((language, index) => (
                    <li key={index}>
                      • {language.name} — {language.proficiency}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
