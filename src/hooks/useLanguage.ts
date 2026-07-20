import { useState, useEffect, useCallback } from 'react'
import { pt } from '../i18n/pt'
import { en } from '../i18n/en'
import type { Language } from '../types'

type Lang = 'pt' | 'en'

const translations: Record<Lang, Language> = { pt, en }

export function useLanguage() {
  const [lang, setLang] = useState<Lang>('pt')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved && (saved === 'pt' || saved === 'en')) {
      setLang(saved)
    }
  }, [])

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt'
      localStorage.setItem('lang', next)
      return next
    })
  }, [])

  const t = translations[lang]

  return { lang, toggle, t }
}
