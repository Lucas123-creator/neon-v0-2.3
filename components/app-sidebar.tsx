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
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const data = {
  user: {
    name: "Alex Johnson",
    email: "alex@neonhub.ai",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "AI Agents",
      url: "/agents",
      icon: Bot,
      badge: "12 Active",
    },
    {
      title: "Campaigns",
      url: "/campaigns",
      icon: Megaphone,
      badge: "8",
    },
    {
      title: "Strategy",
      url: "/strategy",
      icon: Target,
    },
    {
      title: "Outreach",
      url: "/outreach",
      icon: Send,
    },
    {
      title: "SEO Tools",
      url: "/seo",
      icon: Search,
    },
    {
      title: "Brand Voice",
      url: "/brand-voice",
      icon: Palette,
    },
  ],
  navSecondary: [
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
    },
    {
      title: "A/B Testing",
      url: "/ab-testing",
      icon: TestTube,
    },
    {
      title: "Coordination",
      url: "/coordination",
      icon: GitBranch,
    },
    {
      title: "Trends",
      url: "/trends",
      icon: TrendingUp,
    },
    {
      title: "Customers",
      url: "/customers",
      icon: Users,
    },
    {
      title: "Assets",
      url: "/assets",
      icon: ImageIcon,
    },
    {
      title: "Social Media",
      url: "/social",
      icon: Share2,
    },
    {
      title: "Memory",
      url: "/memory",
      icon: Brain,
    },
    {
      title: "QA",
      url: "/qa",
      icon: CheckSquare,
    },
  ],
  navFooter: [
    {
      title: "Billing",
      url: "/billing",
      icon: CreditCard,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Tools & Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navSecondary.map((item) => (
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
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {data.navFooter.map((item) => (
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
