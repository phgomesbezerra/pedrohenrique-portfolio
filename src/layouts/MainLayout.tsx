import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ParticlesBackground } from '../components/ParticlesBackground'
import type { Language, Profile } from '../types'

interface MainLayoutProps {
  profile: Profile
  t: Language
  theme: { isDark: boolean; toggle: () => void }
  lang: { lang: 'pt' | 'en'; toggle: () => void }
}

export function MainLayout({ profile, t, theme, lang }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar t={t.nav} theme={theme} lang={lang} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer profile={profile} rights={t.footer.rights} />
    </div>
  )
}
