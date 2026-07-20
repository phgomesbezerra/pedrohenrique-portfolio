import { AnimatedCounter } from './AnimatedCounter'
import { GlassCard } from './GlassCard'
import type { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'
import type { Stat } from '../types'

const iconMap: Record<string, LucideIcon> = Icons as unknown as Record<string, LucideIcon>

interface StatsCardProps {
  stat: Stat
  delay?: number
}

export function StatsCard({ stat, delay = 0 }: StatsCardProps) {
  const Icon = iconMap[stat.icon] || Icons.BarChart3

  return (
    <GlassCard delay={delay}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
          <Icon size={22} className="text-primary-500" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
            <AnimatedCounter value={stat.value} />
          </div>
          <p className="text-muted text-sm font-medium mb-1">{stat.label}</p>
          <p className="text-muted-light text-xs leading-relaxed">{stat.description}</p>
        </div>
      </div>
    </GlassCard>
  )
}
