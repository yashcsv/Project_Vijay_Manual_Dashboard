import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export function useCountUp(value) {
  const motion = useMotionValue(0)
  const spring = useSpring(motion, { stiffness: 50, damping: 20 })
  const started = useRef(false)

  useEffect(() => {
    if (!started.current) {
      started.current = true
      motion.set(value)
    }
  }, [value, motion])

  return spring
}
