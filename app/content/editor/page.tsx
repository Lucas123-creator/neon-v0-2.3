"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function EditorPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const save = () => {
    const id = Math.random().toString(36).slice(2)
    const updatedAt = new Date().toISOString().slice(0, 10)
    const drafts = JSON.parse(localStorage.getItem("neonhub:drafts") || "[]")
    drafts.unshift({ id, title: title || "Untitled Draft", updatedAt })
    localStorage.setItem("neonhub:drafts", JSON.stringify(drafts))
    router.push("/content")
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Draft Editor" description="Write and save drafts" />
      <div className="p-6 space-y-4">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <Textarea value={body} onChange={(e) => setBody(e.target.value)} rows={16} placeholder="Start writing..." />
        <div className="flex gap-2">
          <Button onClick={save}>Save Draft</Button>
          <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
        </div>
      </div>
    </div>
  )
}


