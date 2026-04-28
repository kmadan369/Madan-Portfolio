import { motion } from 'framer-motion'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  className?: string
}

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  external = false,
  className = ''
}: CTAButtonProps) {
  const baseClass = 'px-8 py-4 rounded-full font-semibold transition-all hover:scale-105'
  const variantClass = variant === 'primary' 
    ? 'bg-text-primary text-background hover:bg-text-secondary'
    : 'bg-surface border border-border hover:border-text-primary'

  const props = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}
