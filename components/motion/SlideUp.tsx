"use client"

import { motion, useReducedMotion } from "framer-motion"

export function SlideUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  const props = reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay } }
  // @ts-expect-error motion props are fine
  return <motion.div className={className} {...props}>{children}</motion.div>
}


