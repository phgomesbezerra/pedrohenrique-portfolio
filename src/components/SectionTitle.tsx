import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 md:mb-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
      </div>
    </motion.div>
  )
}
