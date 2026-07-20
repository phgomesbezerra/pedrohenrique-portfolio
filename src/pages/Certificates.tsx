import { SectionTitle } from '../components/SectionTitle'
import { GlassCard } from '../components/GlassCard'
import { ExternalLink, Award, Calendar } from 'lucide-react'
import type { Certificate, Language } from '../types'

interface CertificatesProps {
  certificates: Certificate[]
  t: Language['certificates']
}

export function CertificatesPage({ certificates, t }: CertificatesProps) {
  return (
    <div className="section-padding pt-28">
      <div className="max-container">
        <SectionTitle
          title={t.title}
          subtitle="Certificações e formações que comprovam excelência e atualização constante"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <GlassCard key={cert.id} delay={index * 0.05}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-primary-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-primary-500/60 text-xs mb-1">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-muted-light text-xs mb-2">
                    <Calendar size={10} />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-muted-light text-xs leading-relaxed mb-3">
                    {cert.description}
                  </p>
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary-500 text-xs hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={12} />
                      {t.view}
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
