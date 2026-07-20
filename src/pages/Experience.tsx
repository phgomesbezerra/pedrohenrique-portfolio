import { SectionTitle } from '../components/SectionTitle'
import { ExperienceCard } from '../components/ExperienceCard'
import type { Experience, Language } from '../types'

interface ExperiencePageProps {
  experiences: Experience[]
  t: Language['experience']
}

export function ExperiencePage({ experiences, t }: ExperiencePageProps) {
  return (
    <div className="section-padding pt-28">
      <div className="max-container">
        <SectionTitle
          title={t.title}
          subtitle="Uma trajetória construída com resultados consistentes e liderança de excelência"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} t={t} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  )
}
