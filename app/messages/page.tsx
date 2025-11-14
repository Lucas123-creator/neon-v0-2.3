"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { GlassCard } from "@/components/neon/GlassCard"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { getMessages } from "@/lib/adapters"
import type { Message } from "@/types/models"
import { TypingDots } from "@/components/motion/TypingDots"

export default function MessagesPage() {
  const [threads, setThreads] = useState<Message[]>([])
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => { void getMessages().then((m) => { setThreads(m); setActive(m[0]?.id ?? null) }) }, [])
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Messages" description="Inbox" />
      <div className="p-6 grid gap-4 md:grid-cols-[220px_280px_1fr]">
        <GlassCard title="Folders">
          <ul className="text-sm space-y-2">
            <li>Inbox</li>
            <li>Sent</li>
            <li>Archived</li>
          </ul>
        </GlassCard>
        <GlassCard title="Threads">
          <ul className="text-sm">
            {threads.map((t) => (
              <li key={t.id} className="py-2 border-b cursor-pointer" onClick={() => setActive(t.id)}>{t.subject}</li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard title={threads.find((t) => t.id === active)?.subject}>
          <div className="space-y-3">
            <div className="rounded border p-3 text-sm">{threads.find((t) => t.id === active)?.preview}</div>
            <Textarea rows={4} placeholder="Write a reply..." />
            <div className="flex items-center justify-between">
              <TypingDots />
              <Button className="neon-cta">Send</Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}


