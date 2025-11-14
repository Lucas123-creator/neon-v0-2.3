"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { GlassCard } from "@/components/neon/GlassCard"
import { StatusPill } from "@/components/neon/StatusPill"
import { useEffect, useState } from "react"
import { getProjects } from "@/lib/adapters"
import type { Project } from "@/types/models"

export default function ProjectsPage() {
  const [items, setItems] = useState<Project[]>([])
  useEffect(() => { void getProjects().then(setItems) }, [])
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Projects" description="Workspace projects overview" />
      <div className="p-6 grid gap-4 md:grid-cols-3">
        {items.map((p) => (
          <GlassCard key={p.name} title={p.name} subtitle={`Owner: ${p.owner}`} accent="primary">
            <div className="flex items-center justify-between text-sm">
              <StatusPill status={p.status} />
              <span className="text-muted-foreground">Updated {p.updatedAt}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}


