import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { ExperiencePage } from './pages/Experience'
import { Results } from './pages/Results'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { GalleryPage } from './pages/GalleryPage'
import { CertificatesPage } from './pages/Certificates'
import { ContactPage } from './pages/ContactPage'
import { useTheme } from './hooks/useTheme'
import { useLanguage } from './hooks/useLanguage'
import { profile } from './data/profile'
import { experiences } from './data/experience'
import { hardSkills, softSkills } from './data/skills'
import { projects } from './data/projects'
import { stats } from './data/stats'
import { galleryItems } from './data/gallery'
import { certificates } from './data/certificates'
import { timeline } from './data/timeline'

export default function App() {
  const theme = useTheme()
  const { lang, toggle, t } = useLanguage()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout profile={profile} t={t} theme={theme} lang={{ lang, toggle }} />}>
          <Route path="/" element={<Home profile={profile} t={t} />} />
          <Route path="/sobre" element={<About profile={profile} t={t.about} timeline={timeline} />} />
          <Route path="/experiencia" element={<ExperiencePage experiences={experiences} t={t.experience} />} />
          <Route path="/resultados" element={<Results stats={stats} t={t.results} />} />
          <Route path="/competencias" element={<Skills hardSkills={hardSkills} softSkills={softSkills} t={t.skills} />} />
          <Route path="/projetos" element={<Projects projects={projects} t={t.projects} />} />
          <Route path="/galeria" element={<GalleryPage items={galleryItems} t={t.gallery} />} />
          <Route path="/certificados" element={<CertificatesPage certificates={certificates} t={t.certificates} />} />
          <Route path="/contato" element={<ContactPage profile={profile} t={t.contact} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
