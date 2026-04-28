export interface Achievement {
  icon: string
  title: string
  organization: string
  year: string
}

export interface Education {
  institution: string
  degree: string
  grade: string
  period: string
  location: string
}

export interface Language {
  name: string
  proficiency: string
}

export const achievements: Achievement[] = [
  {
    icon: '🥇',
    title: 'Outstanding Productivity & Intuitive Design Award',
    organization: 'Trirope Technologies',
    year: '2023'
  },
  {
    icon: '🌟',
    title: 'Upskiller Award',
    organization: 'Applied innovation in AI-driven product design',
    year: '2024'
  }
]

export const education: Education = {
  institution: 'Hindustan College of Arts and Science',
  degree: 'BCA: Computer Application',
  grade: '80%',
  period: 'July 2013 – April 2016',
  location: 'Chennai, Tamil Nadu'
}

export const languages: Language[] = [
  { name: 'Tamil', proficiency: 'Native' },
  { name: 'English', proficiency: 'Professional Proficiency' }
]
