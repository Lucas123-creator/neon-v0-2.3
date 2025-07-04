"use client"

import { Bell, Palette, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { NotificationsPopup } from "./notifications-popup"
import { ThemeCustomizer } from "./theme-customizer"
import { useState } from "react"

interface DashboardHeaderProps {
  title: string
  description?: string
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showThemeCustomizer, setShowThemeCustomizer] = useState(false)

  return (
    <div className="flex items-center justify-between border-b bg-background px-4 py-3">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search..." className="w-64 pl-10" />
        </div>

        <div className="relative">
          <Button variant="ghost" size="icon" onClick={() => setShowThemeCustomizer(!showThemeCustomizer)}>
            <Palette className="h-4 w-4" />
          </Button>
          {showThemeCustomizer && <ThemeCustomizer onClose={() => setShowThemeCustomizer(false)} />}
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              3
            </span>
          </Button>
          {showNotifications && <NotificationsPopup onClose={() => setShowNotifications(false)} />}
        </div>
      </div>
    </div>
  )
}
