import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LanguageSwitcher } from './LanguageSwitcher'
import type { Language } from '../types'

interface NavbarProps {
  t: Language['nav']
  theme: { isDark: boolean; toggle: () => void }
  lang: { lang: 'pt' | 'en'; toggle: () => void }
}

export function Navbar({ t, theme, lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: t.home },
    { to: '/sobre', label: t.about },
    { to: '/experiencia', label: t.experience },
    { to: '/resultados', label: t.results },
    { to: '/competencias', label: t.skills },
    { to: '/projetos', label: t.projects },
    { to: '/galeria', label: t.gallery },
    { to: '/certificados', label: t.certificates },
    { to: '/contato', label: t.contact },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-base/80 backdrop-blur-xl border-b border-base'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-lg font-bold tracking-tight">
              <span className="gradient-text">PH</span>
              <span className="text-muted-light ml-1 font-light hidden sm:inline">Gomes</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                  location.pathname === link.to
                    ? 'text-primary-500 bg-primary-500/10'
                    : 'text-muted hover:text-white hover:bg-surface'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeSwitcher isDark={theme.isDark} toggle={theme.toggle} />
            <LanguageSwitcher lang={lang.lang} toggle={lang.toggle} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full glass glass-hover text-muted"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-base overflow-hidden"
          >
            <div className="px-4 py-4 bg-base/95 backdrop-blur-xl space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-xl text-sm transition-all ${
                    location.pathname === link.to
                      ? 'text-primary-500 bg-primary-500/10'
                      : 'text-muted hover:text-white hover:bg-surface'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
