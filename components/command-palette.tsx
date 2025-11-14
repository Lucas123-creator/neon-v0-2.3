"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Bot, Home, Megaphone, Target, Send, Search, Palette, CreditCard, Settings, LifeBuoy, BarChart3, TestTube, GitBranch, TrendingUp, Users, ImageIcon, Share2, Brain, CheckSquare } from "lucide-react"
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"

type CmdItem = {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  group: string
  shortcut?: string
}

const ROUTE_ITEMS: CmdItem[] = [
  { title: "Dashboard", href: "/", icon: Home, group: "Intelligence & Agents" },
  { title: "AI Agents", href: "/agents", icon: Bot, group: "Intelligence & Agents" },
  { title: "Memory", href: "/memory", icon: Brain, group: "Intelligence & Agents" },
  { title: "Q&A", href: "/qa", icon: CheckSquare, group: "Intelligence & Agents" },

  { title: "Campaigns", href: "/campaigns", icon: Megaphone, group: "Strategy & Campaigns" },
  { title: "Strategy", href: "/strategy", icon: Target, group: "Strategy & Campaigns" },
  { title: "Outreach", href: "/outreach", icon: Send, group: "Strategy & Campaigns" },
  { title: "A/B Testing", href: "/ab-testing", icon: TestTube, group: "Strategy & Campaigns" },
  { title: "Coordination", href: "/coordination", icon: GitBranch, group: "Strategy & Campaigns" },

  { title: "Analytics", href: "/analytics", icon: BarChart3, group: "Insights & Optimization" },
  { title: "SEO Tools", href: "/seo", icon: Search, group: "Insights & Optimization" },
  { title: "Trends", href: "/trends", icon: TrendingUp, group: "Insights & Optimization" },

  { title: "Brand Voice", href: "/brand-voice", icon: Palette, group: "Brand & Assets" },
  { title: "Assets", href: "/assets", icon: ImageIcon, group: "Brand & Assets" },
  { title: "Social Media", href: "/social", icon: Share2, group: "Brand & Assets" },

  { title: "Projects", href: "/projects", icon: GitBranch, group: "Workspace" },
  { title: "Teams", href: "/teams", icon: Users, group: "Workspace" },

  { title: "Customers", href: "/customers", icon: Users, group: "People & Business" },
  { title: "Billing", href: "/billing", icon: CreditCard, group: "People & Business" },
  { title: "Support", href: "/support", icon: LifeBuoy, group: "People & Business" },
  { title: "Settings", href: "/settings", icon: Settings, group: "People & Business" },
  { title: "Tasks", href: "/tasks", icon: CheckSquare, group: "Workspace" },
  { title: "Documents", href: "/documents", icon: CheckSquare, group: "Workspace" },
  { title: "Messages", href: "/messages", icon: Send, group: "Workspace" },
  { title: "Content", href: "/content", icon: Palette, group: "Brand & Assets" },
  { title: "Feedback", href: "/feedback", icon: BarChart3, group: "Insights & Optimization" },
]

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const groups = useMemo(() => {
    const map = new Map<string, CmdItem[]>()
    for (const item of ROUTE_ITEMS) {
      if (!map.has(item.group)) map.set(item.group, [])
      map.get(item.group)!.push(item)
    }
    return Array.from(map.entries())
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search across modules..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groups.map(([group, items]) => (
          <CommandGroup key={group} heading={group}>
            {items.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  setOpen(false)
                  router.push(item.href)
                }}
                value={`${item.title} ${group}`}
              >
                {item.icon ? <item.icon className="mr-2 h-4 w-4" /> : null}
                <span>{item.title}</span>
                {item.shortcut ? <CommandShortcut>{item.shortcut}</CommandShortcut> : null}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
        <CommandSeparator />
        <CommandGroup heading="Quick Actions">
          <CommandItem
            onSelect={() => {
              setOpen(false)
              router.push("/campaigns")
            }}
            value="Create Campaign"
          >
            <Megaphone className="mr-2 h-4 w-4" />
            <span>Create Campaign</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              router.push("/trends")
            }}
            value="Analyze Trends"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            <span>Analyze Trends</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false)
              router.push("/agents")
            }}
            value="Deploy Agent"
          >
            <Bot className="mr-2 h-4 w-4" />
            <span>Deploy Agent</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}


