import { SectionTitle } from '../components/SectionTitle'
import { GlassCard } from '../components/GlassCard'
import { motion } from 'framer-motion'
import { Target, Network, Code2, Map } from 'lucide-react'
import type { Project, Language } from '../types'

interface ProjectsProps {
  projects: Project[]
  t: Language['projects']
}

export function Projects({ projects, t }: ProjectsProps) {
  return (
    <div className="section-padding pt-28">
      <div className="max-container">
        <SectionTitle
          title={t.title}
          subtitle="Projetos estratégicos que transformaram operações e geraram resultados expressivos"
        />

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-16 last:mb-0"
          >
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-blue-500/20 border border-primary-500/30 flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">
                    {project.title[0]}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-primary-500 text-sm font-medium uppercase tracking-wider">Projeto Estratégico</p>
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-10 max-w-4xl">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <GlassCard delay={0.1} hover={false}>
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={16} className="text-primary-500" />
                    <h4 className="text-white font-semibold text-sm">{t.objective}</h4>
                  </div>
                  <p className="text-muted-light text-sm leading-relaxed">{project.objective}</p>
                </GlassCard>

                <GlassCard delay={0.2} hover={false}>
                  <div className="flex items-center gap-2 mb-3">
                    <Network size={16} className="text-primary-500" />
                    <h4 className="text-white font-semibold text-sm">{t.architecture}</h4>
                  </div>
                  <p className="text-muted-light text-sm leading-relaxed">{project.architecture}</p>
                </GlassCard>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <GlassCard delay={0.3} hover={false}>
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 size={16} className="text-primary-500" />
                    <h4 className="text-white font-semibold text-sm">{t.technologies}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs text-primary-500 bg-primary-500/10 border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard delay={0.4} hover={false}>
                  <div className="flex items-center gap-2 mb-3">
                    <Map size={16} className="text-primary-500" />
                    <h4 className="text-white font-semibold text-sm">{t.roadmap}</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.roadmap.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-light text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-xs text-primary-500 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
