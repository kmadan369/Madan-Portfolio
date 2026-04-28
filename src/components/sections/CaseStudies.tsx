import SectionHeading from '@/components/ui/SectionHeading'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import { caseStudies } from '@/data/caseStudies'

export default function CaseStudies() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Selected Product Initiatives" />

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              caseStudy={caseStudy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
