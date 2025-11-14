"use client"

import { motion, useReducedMotion } from "framer-motion"

export function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  const props = reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay } }
  // @ts-expect-error motion props are fine
  return <motion.div className={className} {...props}>{children}</motion.div>
}


