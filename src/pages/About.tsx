import { motion } from 'framer-motion'
import { SectionTitle } from '../components/SectionTitle'
import { Timeline } from '../components/Timeline'
import { Target, Shield } from 'lucide-react'
import type { Profile, Language } from '../types'
import type { TimelineEvent } from '../types'

interface AboutProps {
  profile: Profile
  t: Language['about']
  timeline: TimelineEvent[]
}

export function About({ profile, t, timeline }: AboutProps) {
  return (
    <div className="section-padding pt-28">
      <div className="max-container">
        <SectionTitle title={t.title} subtitle={profile.tagline} />

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target size={18} className="text-primary-500" />
              <h3 className="text-lg font-semibold text-white">{t.mission}</h3>
            </div>
            <p className="text-muted leading-relaxed">{profile.mission}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield size={18} className="text-primary-500" />
              <h3 className="text-lg font-semibold text-white">{t.values}</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {profile.values.map((value) => (
                <div key={value} className="flex items-center gap-2 text-muted text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 flex-shrink-0" />
                  {value}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            <span className="gradient-text">{t.timeline}</span>
          </h3>
          <Timeline events={timeline} />
        </div>
      </div>
    </div>
  )
}
