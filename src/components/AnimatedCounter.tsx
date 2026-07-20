import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const numericPart = parseInt(value.replace(/[^0-9]/g, ''))
  const prefix = value.replace(/[0-9]/g, '')
  const isNumeric = !isNaN(numericPart)

  useEffect(() => {
    const element = ref.current
    if (!element || !isNumeric || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()

          function animate() {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.floor(eased * numericPart)

            setDisplayValue(`${prefix}${current}`)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setDisplayValue(value)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [value, numericPart, prefix, isNumeric, duration, hasAnimated])

  if (!isNumeric) {
    return <span ref={ref}>{value}</span>
  }

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}
