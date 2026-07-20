import { SectionTitle } from '../components/SectionTitle'
import { ContactSection } from '../components/Contact'
import type { Profile, Language } from '../types'

interface ContactPageProps {
  profile: Profile
  t: Language['contact']
}

export function ContactPage({ profile, t }: ContactPageProps) {
  return (
    <div className="section-padding pt-28">
      <div className="max-container">
        <SectionTitle
          title={t.title}
          subtitle="Vamos conversar sobre como posso contribuir com sua organização"
        />

        <ContactSection profile={profile} t={t} />
      </div>
    </div>
  )
}
