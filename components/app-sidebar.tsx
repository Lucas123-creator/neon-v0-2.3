"use client"

import type * as React from "react"
import {
  Bot,
  Megaphone,
  Target,
  Send,
  Search,
  Palette,
  CreditCard,
  Settings,
  LifeBuoy,
  BarChart3,
  TestTube,
  GitBranch,
  TrendingUp,
  Users,
  ImageIcon,
  Share2,
  Brain,
  CheckSquare,
  Home,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { SidebarMenuAction } from "@/components/ui/sidebar"
import { Star } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

const data = {
  user: {
    name: "Alex Johnson",
    email: "alex@neonhub.ai",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  groups: [
    {
      label: "Intelligence & Agents",
      color: "text-purple-600",
      items: [
        { title: "Dashboard", url: "/", icon: Home },
        { title: "AI Agents", url: "/agents", icon: Bot, badge: "12" },
        { title: "Memory", url: "/memory", icon: Brain },
        { title: "Q&A", url: "/qa", icon: CheckSquare },
      ],
    },
    {
      label: "Strategy & Campaigns",
      color: "text-blue-600",
      items: [
        { title: "Campaigns", url: "/campaigns", icon: Megaphone, badge: "8" },
        { title: "Strategy", url: "/strategy", icon: Target },
        { title: "Outreach", url: "/outreach", icon: Send },
        { title: "A/B Testing", url: "/ab-testing", icon: TestTube },
        { title: "Coordination", url: "/coordination", icon: GitBranch },
      ],
    },
    {
      label: "Insights & Optimization",
      color: "text-green-600",
      items: [
        { title: "Analytics", url: "/analytics", icon: BarChart3 },
        { title: "SEO Tools", url: "/seo", icon: Search },
        { title: "Trends", url: "/trends", icon: TrendingUp },
        { title: "Feedback", url: "/feedback", icon: CheckSquare },
      ],
    },
    {
      label: "Brand & Assets",
      color: "text-amber-600",
      items: [
        { title: "Brand Voice", url: "/brand-voice", icon: Palette },
        { title: "Assets", url: "/assets", icon: ImageIcon },
        { title: "Social Media", url: "/social", icon: Share2 },
        { title: "Content", url: "/content", icon: CheckSquare },
      ],
    },
    {
      label: "Workspace",
      color: "text-cyan-600",
      items: [
        { title: "Projects", url: "/projects", icon: GitBranch },
        { title: "Teams", url: "/teams", icon: Users },
        { title: "Tasks", url: "/tasks", icon: CheckSquare },
        { title: "Documents", url: "/documents", icon: CheckSquare },
        { title: "Messages", url: "/messages", icon: Send },
        { title: "Onboarding", url: "/onboarding", icon: Home },
      ],
    },
    {
      label: "People & Business",
      color: "text-rose-600",
      items: [
        { title: "Customers", url: "/customers", icon: Users },
        { title: "Billing", url: "/billing", icon: CreditCard },
        { title: "Support", url: "/support", icon: LifeBuoy },
        { title: "Settings", url: "/settings", icon: Settings },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [pinned, setPinned] = useState<string[]>([])

  useEffect(() => {
    const raw = localStorage.getItem("neonhub:pins")
    if (raw) {
      try {
        setPinned(JSON.parse(raw))
      } catch {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("neonhub:pins", JSON.stringify(pinned))
  }, [pinned])

  const flatItems = useMemo(() => data.groups.flatMap((g) => g.items), [])
  const pinnedItems = flatItems.filter((i) => pinned.includes(i.title))
  const footerItems = useMemo(() => {
    const group = data.groups.find((g) => g.label === "People & Business")
    return group?.items ?? []
  }, [])
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <Bot className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">NeonHub</span>
            <span className="truncate text-xs text-muted-foreground">AI Marketing</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {pinnedItems.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Pinned</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {pinnedItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuAction
                      aria-label="Unpin"
                      onClick={() => setPinned((p) => p.filter((t) => t !== item.title))}
                    >
                      <Star className="fill-yellow-400 text-yellow-500" />
                    </SidebarMenuAction>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        {data.groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="flex items-center gap-2">
              <span className={group.color + " inline-block h-2 w-2 rounded-full"} />
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                        {"badge" in item && item.badge ? (
                          <Badge variant="secondary" className="ml-auto">{item.badge}</Badge>
                        ) : null}
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuAction
                      aria-label="Pin"
                      onClick={() =>
                        setPinned((p) => (p.includes(item.title) ? p : [...p, item.title]))
                      }
                      showOnHover
                      title="Pin to top"
                    >
                      <Star className={pinned.includes(item.title) ? "fill-yellow-400 text-yellow-500" : ""} />
                    </SidebarMenuAction>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/profile">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={data.user.avatar || "/placeholder.svg"} alt={data.user.name} />
                  <AvatarFallback className="rounded-lg">AJ</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{data.user.name}</span>
                  <span className="truncate text-xs">{data.user.email}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
