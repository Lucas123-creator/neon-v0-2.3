"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlassCard } from "@/components/neon/GlassCard"
import { useEffect, useMemo, useState } from "react"
import { getTasks } from "@/lib/adapters"
import type { Task } from "@/types/models"

const columns = [
  { id: "todo", title: "To Do" },
  { id: "doing", title: "In Progress" },
  { id: "done", title: "Done" },
]

export default function TasksPage() {
  const [items, setItems] = useState<Task[]>([])
  useEffect(() => { void getTasks().then(setItems) }, [])
  const grouped = useMemo(() => ({
    todo: items.filter((t) => t.status === "todo"),
    doing: items.filter((t) => t.status === "doing"),
    done: items.filter((t) => t.status === "done"),
  }), [items])

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Tasks" description="Board and list views" />
      <div className="p-6">
        <Tabs defaultValue="board" className="space-y-6">
          <TabsList>
            <TabsTrigger value="board">Board</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
          <TabsContent value="board">
            <div className="grid gap-4 md:grid-cols-3">
              {columns.map((c) => (
                <div key={c.id} className="space-y-2">
                  <h4 className="text-sm font-medium">{c.title}</h4>
                  {grouped[c.id as keyof typeof grouped].map((t) => (
                    <GlassCard key={t.id} title={t.title} />
                  ))}
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list">
            <div className="space-y-2">
              {items.map((t) => (
                <GlassCard key={t.id} title={t.title} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


