import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Star } from 'lucide-react'
import type { TimelineEvent } from '../types'

interface TimelineProps {
  events: TimelineEvent[]
}

const typeConfig = {
  career: { icon: Briefcase, color: 'text-primary-500', bg: 'bg-primary-500/10', border: 'border-primary-500/20' },
  education: { icon: GraduationCap, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
  milestone: { icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/30 via-primary-500/10 to-transparent md:-translate-x-px" />

      {events.map((event, index) => {
        const config = typeConfig[event.type]
        const Icon = config.icon
        const isLeft = index % 2 === 0

        return (
          <motion.div
            key={`${event.year}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-start gap-6 mb-10 md:mb-16 ${
              isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className={`hidden md:flex w-1/2 ${isLeft ? 'justify-end pr-10' : 'justify-start pl-10'}`}>
              <div className="glass rounded-2xl p-5 max-w-md">
                <span className="text-xs font-mono text-primary-500/60 mb-1 block">{event.year}</span>
                <h4 className="text-white font-semibold mb-1">{event.title}</h4>
                <p className="text-muted-light text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>

            <div className="flex md:hidden glass rounded-2xl p-5 flex-1">
              <div className={`w-10 h-10 rounded-xl ${config.bg} border ${config.border} flex items-center justify-center flex-shrink-0 mr-4`}>
                <Icon size={18} className={config.color} />
              </div>
              <div>
                <span className="text-xs font-mono text-primary-500/60 mb-1 block">{event.year}</span>
                <h4 className="text-white font-semibold mb-1">{event.title}</h4>
                <p className="text-muted-light text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>

            <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${config.bg} border-2 ${config.border} flex items-center justify-center z-10 hidden md:flex`}>
              <Icon size={14} className={config.color} />
            </div>

            <div className="hidden md:flex w-1/2" />
          </motion.div>
        )
      })}
    </div>
  )
}
