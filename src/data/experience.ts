export interface Experience {
  company: string
  role: string
  period: string
  location: string
  achievements: string[]
  highlight?: boolean
}

export const experiences: Experience[] = [
  {
    company: 'Pente AI Pvt Ltd',
    role: 'Senior UI/UX Designer',
    period: 'December 2025 – Present',
    location: 'Chennai, Tamil Nadu (Remote)',
    highlight: true,
    achievements: [
      'Owned UX strategy for an AI-powered multi-tenant SaaS platform (10+ enterprise modules), aligning design priorities with quarterly OKRs across 3 major releases',
      'Increased builder activation from ~50% to 72% within two release cycles by simplifying onboarding architecture',
      'Reduced admin configuration time by 40% through schema restructuring and progressive disclosure design improvements',
      'Redesigned AI-assisted conversational workflows, improving first-attempt task resolution from 55% to 74%',
      'Established centralized design system governance, reducing UI inconsistencies by 60% and accelerating design-to-development cycles by 45%'
    ]
  },
  {
    company: 'Trirope Technologies Pvt Ltd',
    role: 'Senior UI/UX Designer',
    period: 'February 2021 – December 2025',
    location: 'Chennai, Tamil Nadu',
    achievements: [
      'Led UX transformation for AI-driven enterprise SaaS platforms serving 500+ users',
      'Conducted 20+ user interviews and usability sessions to identify workflow inefficiencies',
      'Reduced core workflow steps from 8–10 to 5–6, improving operational efficiency by 30%',
      'Increased weekly active usage by 40% within 4 months and improved retention by 25%',
      'Built and governed a cross-product design system adopted across 10+ tools, ensuring WCAG 2.1 accessibility compliance'
    ]
  },
  {
    company: 'PUSB Engineering Pvt Ltd',
    role: 'Draftsman (AutoCAD)',
    period: 'March 2018 – December 2020',
    location: 'Chennai, Tamil Nadu',
    achievements: [
      'Developed strong systems thinking and structured design discipline through complex technical drafting and documentation workflows.'
    ]
  }
]
