"use client"

import { cn } from "@/lib/utils"

export function KPIStat({ label, value, delta, className }: { label: string; value: string | number; delta?: string; className?: string }) {
  return (
    <div className={cn("rounded-lg border p-4 glass-surface", className)}>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
      {delta && <div className="mt-1 text-xs text-emerald-500">{delta}</div>}
      <div className="mt-3 h-8 w-full rounded bg-muted/40" aria-hidden />
    </div>
  )
}


