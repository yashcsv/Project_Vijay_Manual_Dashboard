import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          whileTap={{ scale: 0.97 }}
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-20 right-6 z-40 rounded-full border border-border-strong bg-bg-elevated px-4 py-2 text-small shadow-skinGlow"
        >
          Top
        </motion.button>
      )}
    </AnimatePresence>
  )
}
