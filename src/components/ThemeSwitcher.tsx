import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

interface ThemeSwitcherProps {
  isDark: boolean
  toggle: () => void
}

export function ThemeSwitcher({ isDark, toggle }: ThemeSwitcherProps) {
  return (
    <button
      onClick={toggle}
      className="relative w-10 h-10 flex items-center justify-center rounded-full glass glass-hover text-muted hover:text-primary-500 transition-colors"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </motion.div>
    </button>
  )
}
