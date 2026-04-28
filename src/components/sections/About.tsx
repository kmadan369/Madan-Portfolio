import SectionHeading from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle={profile.bio}
        />

        <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border glow">
          <blockquote className="text-2xl md:text-3xl font-semibold text-center mb-8 leading-relaxed">
            "{profile.philosophy}"
          </blockquote>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-accent-gold">●</span> Core Beliefs
              </h3>
              <ul className="space-y-3 text-text-secondary">
                {profile.beliefs.map((belief, index) => (
                  <li key={index}>• {belief}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-accent-gold">●</span> Contact
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li>📍 {profile.location}</li>
                <li>
                  📧{' '}
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-text-primary transition-colors"
                  >
                    {profile.email}
                  </a>
                </li>
                <li>
                  📱{' '}
                  <a
                    href={`tel:${profile.phone}`}
                    className="hover:text-text-primary transition-colors"
                  >
                    {profile.phone}
                  </a>
                </li>
                <li>
                  💼{' '}
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
