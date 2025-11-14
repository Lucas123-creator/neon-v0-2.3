"use client"

import { cn } from "@/lib/utils"

type Level = 1 | 2 | 3

export function NeonHeading({ level = 1, className, children }: { level?: Level; className?: string; children: React.ReactNode }) {
  const Tag = (level === 1 ? "h1" : level === 2 ? "h2" : "h3") as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={cn(
        "font-semibold tracking-tight",
        level === 1 && "text-3xl md:text-4xl",
        level === 2 && "text-2xl md:text-3xl",
        level === 3 && "text-xl md:text-2xl",
        "transition-shadow [text-shadow:_0_0_0_rgba(0,0,0,0)] hover:[text-shadow:_0_0_16px_hsla(var(--ring),0.6)] motion-reduce:transition-none",
        className
      )}
    >
      {children}
    </Tag>
  )
}


