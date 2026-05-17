import { useState, useEffect, useRef } from 'react'

export default function CountUp({ value, suffix = '', prefix = '', decimals = 2, duration = 1500 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const numVal = parseFloat(value)
          if (isNaN(numVal)) {
            setDisplay(value)
            return
          }
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(numVal * eased)
            if (progress < 1) requestAnimationFrame(animate)
            else setDisplay(numVal)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  const formatted = typeof display === 'number'
    ? (Number.isInteger(parseFloat(value)) ? Math.round(display).toLocaleString() : display.toFixed(decimals))
    : display

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
