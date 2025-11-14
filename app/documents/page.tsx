"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { getDocuments } from "@/lib/adapters"
import type { Document as Doc } from "@/types/models"

export default function DocumentsPage() {
  const [docs, setDocs] = useState<Doc[]>([])
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  useEffect(() => { void getDocuments().then(setDocs) }, [])

  const add = () => {
    setDocs((d) => [{ id: Math.random().toString(36).slice(2), title: title || "Untitled" }, ...d])
    setOpen(false)
    setTitle("")
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Documents" description="Knowledge hub" />
      <div className="p-6 flex justify-end">
        <Button onClick={() => setOpen(true)}>New Doc</Button>
      </div>
      <div className="px-6 grid gap-2 md:grid-cols-2">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">All Documents</h4>
          <ul className="text-sm">
            {docs.map((d) => (
              <li key={d.id} className="py-2 border-b">{d.title}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border p-4 min-h-40">
          <p className="text-sm text-muted-foreground">Select a document to preview (markdown placeholder).</p>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <h3 className="text-lg font-semibold">New Document</h3>
          <div className="space-y-2">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <Button onClick={add}>Create</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}


