import { Linkedin, Mail, MessageSquare, Globe, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Profile } from '../types'

interface FooterProps {
  profile: Profile
  rights: string
}

export function Footer({ profile, rights }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-base py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <Link to="/" className="text-lg font-bold">
              <span className="gradient-text">PH</span>
              <span className="text-muted-light ml-1 font-light">Gomes</span>
            </Link>
            <p className="mt-3 text-muted-light text-sm leading-relaxed max-w-xs">
              {profile.title}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
              Links Rápidos
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { to: '/', label: 'Início' },
                { to: '/sobre', label: 'Sobre' },
                { to: '/experiencia', label: 'Experiência' },
                { to: '/projetos', label: 'Projetos' },
                { to: '/galeria', label: 'Galeria' },
                { to: '/contato', label: 'Contato' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-light hover:text-primary-500 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover text-muted hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover text-muted hover:text-primary-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover text-muted hover:text-primary-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href={profile.indeed}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover text-muted hover:text-primary-500 transition-colors"
                aria-label="Indeed"
              >
                <Globe size={16} />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 flex items-center justify-center rounded-lg glass glass-hover text-muted hover:text-primary-500 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-base flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-light text-xs">
            &copy; {new Date().getFullYear()} {profile.name}. {rights}
          </p>
          <p className="text-muted-light text-xs">
            Design & Desenvolvimento Premium
          </p>
        </div>
      </div>
    </footer>
  )
}
