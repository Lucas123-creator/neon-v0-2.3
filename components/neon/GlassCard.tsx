"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.ComponentProps<typeof Card> {
  title?: string
  subtitle?: string
  accent?: "primary" | "secondary" | "none"
}

export function GlassCard({ className, title, subtitle, accent = "none", children, ...props }: GlassCardProps) {
  return (
    <Card
      className={cn(
        "glass-surface border border-border/40 backdrop-blur-md",
        accent !== "none" && "neon-border",
        className
      )}
      {...props}
    >
      {(title || subtitle) && (
        <CardHeader>
          {title && <CardTitle className="tracking-tight">{title}</CardTitle>}
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  )
}


