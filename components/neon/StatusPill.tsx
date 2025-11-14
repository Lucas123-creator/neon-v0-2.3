"use client"

import { cn } from "@/lib/utils"

type Status = "ok" | "warn" | "error" | "paused"

export function StatusPill({ status, label, className }: { status: Status; label?: string; className?: string }) {
  const color =
    status === "ok"
      ? "bg-emerald-500"
      : status === "warn"
      ? "bg-amber-500"
      : status === "error"
      ? "bg-rose-500"
      : "bg-slate-400"

  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border px-2 py-1 text-xs", className)}>
      <span className={cn("size-2 rounded-full", color, "animate-[pulse_2s_ease-in-out_infinite] motion-reduce:animate-none")} />
      <span className="text-muted-foreground capitalize">{label ?? status}</span>
    </span>
  )}


