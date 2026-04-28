import SectionHeading from '@/components/ui/SectionHeading'
import TimelineItem from '@/components/ui/TimelineItem'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Professional Experience" />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
