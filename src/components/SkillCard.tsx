import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'
import type { Skill } from '../types'

const iconMap: Record<string, LucideIcon> = Icons as unknown as Record<string, LucideIcon>

interface SkillCardProps {
  skill: Skill
  delay?: number
}

export function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const Icon = iconMap[skill.icon] || Icons.Code2

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="glass rounded-2xl p-5 glass-hover"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
          <Icon size={18} className="text-primary-500" />
        </div>
        <span className="text-base/90 text-sm font-medium">{skill.name}</span>
      </div>
      <div className="relative h-1.5 bg-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary-500 to-blue-500"
        />
      </div>
      <span className="text-xs text-muted-light mt-1 block text-right">{skill.level}%</span>
    </motion.div>
  )
}
