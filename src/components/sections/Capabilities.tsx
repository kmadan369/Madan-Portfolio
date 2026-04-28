import SectionHeading from '@/components/ui/SectionHeading'
import CapabilityCard from '@/components/ui/CapabilityCard'
import { capabilities } from '@/data/capabilities'

export default function Capabilities() {
  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Core Capabilities" />
        
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
