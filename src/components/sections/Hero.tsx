import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import { profile } from '@/data/profile'

export default function Hero() {
  return (
    <HeroGeometric 
      badge={profile.availability}
      title1={profile.title.split(' ').slice(0, -1).join(' ')}
      title2={profile.title.split(' ').slice(-1).join(' ')}
      description={profile.bio}
      buttonText="View Portfolio →"
      buttonHref={profile.behance}
    />
  )
}
