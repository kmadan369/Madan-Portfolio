export interface ProfileData {
  name: string
  title: string
  tagline: string
  location: string
  phone: string
  email: string
  linkedin: string
  behance: string
  availability: string
  bio: string
  philosophy: string
  beliefs: string[]
}

export const profile: ProfileData = {
  name: 'Madan Kumar J',
  title: 'Senior Product Designer',
  tagline: 'AI & Enterprise SaaS Strategy',
  location: 'Chennai, India',
  phone: '+91 8807561408',
  email: 'Kmadan369@gmail.com',
  linkedin: 'https://www.linkedin.com/in/madan-kumar-b24250a8',
  behance: 'https://www.behance.net/MadanJkumar',
  availability: 'Available for new opportunities',
  bio: 'Senior Product Designer with 5+ years of experience driving product strategy and UX transformation across AI-powered and multi-tenant SaaS platforms',
  philosophy: 'I design for outcomes, not just outputs — every pixel is a hypothesis, every interaction is an experiment.',
  beliefs: [
    'Enterprise complexity deserves elegant simplicity',
    'AI should augment human decision-making',
    'Design systems are products themselves',
    'Data validates; empathy guides'
  ]
}
