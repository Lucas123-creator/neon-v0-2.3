"use client"

import { useState } from "react"
import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const themes = [
  { name: "Default", primary: "hsl(222.2 84% 4.9%)", secondary: "hsl(210 40% 98%)" },
  { name: "Emerald", primary: "hsl(142.1 76.2% 36.3%)", secondary: "hsl(138.5 76.2% 96.7%)" },
  { name: "Rose", primary: "hsl(346.8 77.2% 49.8%)", secondary: "hsl(355.7 100% 97.3%)" },
  { name: "Orange", primary: "hsl(24.6 95% 53.1%)", secondary: "hsl(54 91.7% 95.3%)" },
  { name: "Purple", primary: "hsl(262.1 83.3% 57.8%)", secondary: "hsl(270 100% 98%)" },
  { name: "Teal", primary: "hsl(173.4 80.4% 40%)", secondary: "hsl(152.9 81% 96.1%)" },
  { name: "Indigo", primary: "hsl(239.4 84.2% 67.1%)", secondary: "hsl(234.5 89.5% 97.6%)" },
  { name: "Pink", primary: "hsl(322.2 84% 60.5%)", secondary: "hsl(322.1 84.6% 96.5%)" },
]

interface ThemeCustomizerProps {
  onClose: () => void
}

export function ThemeCustomizer({ onClose }: ThemeCustomizerProps) {
  const [selectedTheme, setSelectedTheme] = useState("Default")

  const applyTheme = (theme: (typeof themes)[0]) => {
    const root = document.documentElement
    root.style.setProperty("--primary", theme.primary)
    root.style.setProperty("--secondary", theme.secondary)
    setSelectedTheme(theme.name)
  }

  return (
    <Card className="absolute right-0 top-12 w-80 z-50 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Theme Customizer</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-3">Color Themes</h4>
          <div className="grid grid-cols-2 gap-2">
            {themes.map((theme) => (
              <Button
                key={theme.name}
                variant="outline"
                className="h-auto p-3 flex flex-col items-start gap-2 bg-transparent"
                onClick={() => applyTheme(theme)}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-medium">{theme.name}</span>
                  {selectedTheme === theme.name && <Check className="h-3 w-3" />}
                </div>
                <div className="flex gap-1 w-full">
                  <div className="h-4 w-full rounded-sm" style={{ backgroundColor: theme.primary }} />
                  <div className="h-4 w-full rounded-sm border" style={{ backgroundColor: theme.secondary }} />
                </div>
              </Button>
            ))}
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          Select a theme to customize your dashboard appearance. Changes apply immediately.
        </div>
      </CardContent>
    </Card>
  )
}
