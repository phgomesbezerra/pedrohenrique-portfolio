import { Hero } from '../components/Hero'
import { motion } from 'framer-motion'
import type { Profile, Language } from '../types'

interface HomeProps {
  profile: Profile
  t: Language
}

export function Home({ profile, t }: HomeProps) {
  return (
    <div>
      <Hero profile={profile} t={t.hero} />
      <section className="section-padding">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {profile.bio}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {profile.values.map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 rounded-xl text-sm text-muted bg-surface border border-base"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
