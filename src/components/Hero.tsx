import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Linkedin, MessageSquare, Mail, Globe } from 'lucide-react'
import type { Profile, Language } from '../types'

interface HeroProps {
  profile: Profile
  t: Language['hero']
}

export function Hero({ profile, t }: HeroProps) {
  const [imgError, setImgError] = useState(false)

  const buttons = [
    { icon: Download, label: t.downloadCV, href: profile.cvUrl, primary: true },
    { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
    { icon: Globe, label: 'Indeed', href: profile.indeed },
    { icon: MessageSquare, label: 'WhatsApp', href: profile.whatsapp },
    { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
  ]

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-primary-500/10 text-primary-500 border border-primary-500/20 mb-6">
                Portfólio Executivo
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
            >
              <span className="gradient-text">{profile.name.split(' ')[0]}</span>
              <br />
              <span className="text-white">{profile.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted mb-4 font-light"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-light text-base leading-relaxed max-w-xl mb-8"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.href.startsWith('http') || btn.href.startsWith('mailto') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    btn.primary
                      ? 'bg-primary-500 text-dark-500 hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/25'
                      : 'glass glass-hover text-muted hover:text-white'
                  }`}
                >
                  <btn.icon size={16} />
                  {btn.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary-500/20 shadow-2xl shadow-primary-500/10 bg-surface">
                {imgError ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl md:text-8xl font-bold gradient-text">
                      {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                ) : (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500/10 via-transparent to-transparent blur-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary-500/10 blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary-500/10 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
