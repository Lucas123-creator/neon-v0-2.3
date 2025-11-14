"use client"

import { GlassCard } from "@/components/neon/GlassCard"
import { NeonHeading } from "@/components/neon/NeonHeading"
import { StatusPill } from "@/components/neon/StatusPill"
import { KPIStat } from "@/components/neon/KPIStat"

export default function StyleProbePage() {
  if (process.env.NODE_ENV === "production") return null
  return (
    <div className="p-6 space-y-6">
      <NeonHeading level={1}>Style Probe</NeonHeading>
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard title="GlassCard" subtitle="With neon border" accent="primary">
          <p className="text-sm text-muted-foreground">This is a preview of glass surface with subtle neon border.</p>
        </GlassCard>
        <div className="space-y-2">
          <StatusPill status="ok" />
          <StatusPill status="warn" />
          <StatusPill status="error" />
          <StatusPill status="paused" />
        </div>
        <KPIStat label="Engagement" value="12.4%" delta="▲ 1.2%" />
      </div>
    </div>
  )
}


