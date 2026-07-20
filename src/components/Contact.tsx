import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Phone, Mail, Linkedin, MessageSquare, Globe, Check } from 'lucide-react'
import type { Profile, Language } from '../types'

interface ContactProps {
  profile: Profile
  t: Language['contact']
}

export function ContactSection({ profile, t }: ContactProps) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const contactItems = [
    { icon: MapPin, label: 'Localização', value: profile.location },
    { icon: Phone, label: 'Telefone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/pedrohenrique', href: profile.linkedin },
    { icon: MessageSquare, label: 'WhatsApp', value: '+55 (11) 99999-9999', href: profile.whatsapp },
    { icon: Globe, label: 'Indeed', value: '/p/pedrohenrique', href: profile.indeed },
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-white mb-6">
            {t.title}
          </h3>
          <div className="space-y-4">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon size={16} className="text-primary-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-light uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary-500 text-sm transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1.5">{t.form.name}</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-surface border border-base text-white text-sm placeholder:text-muted-light focus:outline-none focus:border-primary-500/50 focus:bg-surface transition-all"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1.5">{t.form.email}</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-surface border border-base text-white text-sm placeholder:text-muted-light focus:outline-none focus:border-primary-500/50 focus:bg-surface transition-all"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1.5">{t.form.message}</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-base text-white text-sm placeholder:text-muted-light focus:outline-none focus:border-primary-500/50 focus:bg-surface transition-all resize-none"
              placeholder="Sua mensagem..."
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              sent
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-primary-500 text-dark-500 hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/25'
            }`}
          >
            {sent ? (
              <>
                <Check size={16} />
                Mensagem Enviada!
              </>
            ) : (
              <>
                <Send size={16} />
                {t.form.send}
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
