import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Building2, Calendar, CheckCircle, Target, Code2 } from 'lucide-react'
import type { Experience, Language } from '../types'

interface ExperienceCardProps {
  exp: Experience
  t: Language['experience']
  delay?: number
}

export function ExperienceCard({ exp, t, delay = 0 }: ExperienceCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-surface transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Building2 size={16} className="text-primary-500/60 flex-shrink-0" />
            <span className="text-primary-500 font-semibold text-sm">{exp.company}</span>
          </div>
          <h3 className="text-white text-lg font-bold mb-1">{exp.role}</h3>
          <div className="flex items-center gap-2 text-muted-light text-sm">
            <Calendar size={14} />
            <span>{exp.period}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center flex-shrink-0 mt-1"
        >
          <ChevronDown size={16} className="text-muted-light" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-6 border-t border-base pt-4">
              <p className="text-muted text-sm leading-relaxed">{exp.description}</p>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle size={14} className="text-primary-500" />
                  <h4 className="text-base/80 text-sm font-semibold">{t.responsibilities}</h4>
                </div>
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-light text-sm">
                      <span className="w-1 h-1 rounded-full bg-primary-500/50 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Target size={14} className="text-primary-500" />
                  <h4 className="text-base/80 text-sm font-semibold">{t.results}</h4>
                </div>
                <ul className="space-y-1.5">
                  {exp.results.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-light text-sm">
                      <span className="w-1 h-1 rounded-full bg-primary-500/50 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code2 size={14} className="text-primary-500" />
                  <h4 className="text-base/80 text-sm font-semibold">{t.technologies}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs text-primary-500 bg-primary-500/10 border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
