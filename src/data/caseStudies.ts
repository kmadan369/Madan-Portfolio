export interface CaseStudy {
  icon: string
  title: string
  description: string
  result: string
}

export const caseStudies: CaseStudy[] = [
  {
    icon: '🤖',
    title: 'AI No-Code Multi-Tenant Builder',
    description: 'Redesigned onboarding and configuration workflows to reduce enterprise setup friction.',
    result: '2× faster deployment cycles and 40% reduction in administrative effort.'
  },
  {
    icon: '💬',
    title: 'AI Conversational Platform',
    description: 'Designed session-persistent conversational UX integrated with CRM workflows.',
    result: '35% higher task resolution and 30% reduction in manual support dependency.'
  },
  {
    icon: '📚',
    title: 'Learning Management System (LMS)',
    description: 'Redefined learner journey architecture using progressive personalization logic.',
    result: '30% increase in learner engagement and improved completion rates.'
  },
  {
    icon: '🧩',
    title: 'Recruitment Management System (RMS)',
    description: 'Optimized AI-assisted screening workflows and scheduling interfaces.',
    result: '40% faster shortlisting and 25% reduction in time-to-hire.'
  }
]
