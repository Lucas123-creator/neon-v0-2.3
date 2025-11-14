"use client"

import { toast } from "@/hooks/use-toast"

export const notify = {
  success: (title: string, description?: string) => toast({ title, description }),
  info: (title: string, description?: string) => toast({ title, description }),
  warn: (title: string, description?: string) => toast({ title, description, variant: "destructive" }),
  error: (title: string, description?: string) => toast({ title, description, variant: "destructive" }),
}


