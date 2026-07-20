import { SectionTitle } from '../components/SectionTitle'
import { SkillCard } from '../components/SkillCard'
import { motion } from 'framer-motion'
import type { Skill, Language } from '../types'

interface SkillsProps {
  hardSkills: Skill[]
  softSkills: Skill[]
  t: Language['skills']
}

export function Skills({ hardSkills, softSkills, t }: SkillsProps) {
  return (
    <div className="section-padding pt-28">
      <div className="max-container">
        <SectionTitle
          title={t.title}
          subtitle="Competências técnicas e comportamentais desenvolvidas ao longo de 25+ anos de carreira"
        />

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
          >
            <span className="gradient-text">{t.hard}</span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {hardSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} delay={index * 0.05} />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
          >
            <span className="gradient-text">{t.soft}</span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
