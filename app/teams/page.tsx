"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { GlassCard } from "@/components/neon/GlassCard"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { getTeams } from "@/lib/adapters"
import type { Team } from "@/types/models"

export default function TeamsPage() {
  const [open, setOpen] = useState(false)
  const [teams, setTeams] = useState<Team[]>([])
  useEffect(() => { void getTeams().then(setTeams) }, [])
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Teams" description="Manage teams and members" />
      <div className="p-6 flex items-center justify-end">
        <Button onClick={() => setOpen(true)}>Invite Member</Button>
      </div>
      <div className="px-6 grid gap-4 md:grid-cols-3">
        {teams.map((t) => (
          <GlassCard key={t.name} title={t.name} subtitle={`${t.members} members`} />
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <h3 className="text-lg font-semibold">Invite Member</h3>
          <div className="space-y-2">
            <Input placeholder="Email" />
            <Button className="w-full">Send Invite</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}


