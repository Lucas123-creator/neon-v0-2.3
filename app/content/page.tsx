"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/neon/GlassCard"
import Link from "next/link"
import { useEffect, useState } from "react"

type Draft = { id: string; title: string; updatedAt: string }

export default function ContentHubPage() {
  const [drafts, setDrafts] = useState<Draft[]>([])
  useEffect(() => {
    try {
      const raw = localStorage.getItem("neonhub:drafts")
      if (raw) setDrafts(JSON.parse(raw))
    } catch {}
  }, [])

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Content" description="Authoring hub for drafts and assets" />
      <div className="p-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">Recent drafts</div>
        <Link href="/content/editor">
          <Button>New Draft</Button>
        </Link>
      </div>
      <div className="px-6 grid gap-4 md:grid-cols-3">
        {drafts.length === 0 && (
          <GlassCard title="No drafts yet" subtitle="Create your first draft">Start by clicking New Draft.</GlassCard>
        )}
        {drafts.map((d) => (
          <GlassCard key={d.id} title={d.title} subtitle={`Updated ${d.updatedAt}`}></GlassCard>
        ))}
      </div>
    </div>
  )
}


