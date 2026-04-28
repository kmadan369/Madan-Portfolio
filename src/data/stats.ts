export interface Stat {
  number: string
  label: string
  suffix?: string
}

export const stats: Stat[] = [
  {
    number: '40',
    label: 'Engagement Increase',
    suffix: '%'
  },
  {
    number: '25',
    label: 'Retention Improvement',
    suffix: '%'
  },
  {
    number: '30',
    label: 'Support Dependency Reduction',
    suffix: '%'
  },
  {
    number: '25-30',
    label: 'Faster Time-to-Market',
    suffix: '%'
  }
]
