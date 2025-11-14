"use client"

import { useReducedMotion } from "framer-motion"

export function TypingDots({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <span className={`inline-block size-2 rounded-full bg-primary/70 ${className}`} />
  }
  return (
    <span className={`inline-flex items-center gap-1 ${className}`} aria-label="typing">
      <span className="size-2 rounded-full bg-primary/70 animate-pulse" />
      <span className="size-2 rounded-full bg-primary/70 animate-pulse [animation-delay:120ms]" />
      <span className="size-2 rounded-full bg-primary/70 animate-pulse [animation-delay:240ms]" />
    </span>
  )
}


