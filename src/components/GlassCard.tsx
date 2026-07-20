import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
  onClick?: () => void
  hover?: boolean
}

export function GlassCard({ children, className = '', delay = 0, onClick, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={`glass rounded-2xl p-6 ${
        hover ? 'glass-hover cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
