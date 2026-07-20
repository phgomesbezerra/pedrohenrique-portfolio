import { motion } from 'framer-motion'

interface LanguageSwitcherProps {
  lang: 'pt' | 'en'
  toggle: () => void
}

export function LanguageSwitcher({ lang, toggle }: LanguageSwitcherProps) {
  return (
    <button
      onClick={toggle}
      className="relative w-10 h-10 flex items-center justify-center rounded-full glass glass-hover text-muted hover:text-primary-500 transition-colors overflow-hidden"
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <motion.span
        key={lang}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-xs font-bold tracking-wider"
      >
        {lang.toUpperCase()}
      </motion.span>
    </button>
  )
}
