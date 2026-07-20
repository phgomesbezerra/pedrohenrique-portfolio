import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'
import { AnimatedCounter } from './AnimatedCounter'
import type { Stat } from '../types'

const iconMap: Record<string, LucideIcon> = Icons as unknown as Record<string, LucideIcon>

interface DashboardProps {
  stats: Stat[]
  title: string
}

export function Dashboard({ stats, title }: DashboardProps) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.slice(0, 4).map((stat, index) => (
          <DashboardCard key={stat.label} stat={stat} delay={index * 0.1} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.slice(4).map((stat, index) => (
          <DashboardCard key={stat.label} stat={stat} delay={index * 0.1} />
        ))}
      </div>
    </div>
  )
}

function DashboardCard({ stat, delay }: { stat: Stat; delay: number }) {
  const Icon = iconMap[stat.icon] || Icons.BarChart3

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="glass rounded-2xl p-5 glass-hover"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
          <Icon size={20} className="text-primary-500" />
        </div>
        <span className="text-2xl font-bold gradient-text">
          <AnimatedCounter value={stat.value} />
        </span>
      </div>
      <p className="text-muted text-sm font-medium mb-1">{stat.label}</p>
      <p className="text-muted-light text-xs leading-relaxed">{stat.description}</p>
    </motion.div>
  )
}
