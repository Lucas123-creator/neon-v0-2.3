import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Bot,
  Search,
  Palette,
  Megaphone,
  Mail,
  Share2,
  Settings,
  Play,
  Pause,
  Plus,
  MoreHorizontal,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AgentsPage() {
  const agents = [
    {
      id: 1,
      name: "SEO Optimizer Pro",
      type: "SEO",
      description: "Automatically optimizes meta tags, content, and technical SEO elements",
      status: "Active",
      icon: Search,
      color: "bg-blue-500",
      metrics: {
        tasksCompleted: 1247,
        successRate: "94%",
        lastActive: "2 minutes ago",
      },
    },
    {
      id: 2,
      name: "Content Creator AI",
      type: "Content",
      description: "Generates blog posts, social media content, and marketing copy",
      status: "Active",
      icon: Palette,
      color: "bg-purple-500",
      metrics: {
        tasksCompleted: 856,
        successRate: "91%",
        lastActive: "5 minutes ago",
      },
    },
    {
      id: 3,
      name: "Campaign Manager",
      type: "Campaigns",
      description: "Manages and optimizes marketing campaigns across platforms",
      status: "Active",
      icon: Megaphone,
      color: "bg-green-500",
      metrics: {
        tasksCompleted: 432,
        successRate: "96%",
        lastActive: "1 hour ago",
      },
    },
    {
      id: 4,
      name: "Email Automation",
      type: "Email",
      description: "Handles email sequences, newsletters, and automated responses",
      status: "Paused",
      icon: Mail,
      color: "bg-orange-500",
      metrics: {
        tasksCompleted: 2341,
        successRate: "89%",
        lastActive: "3 hours ago",
      },
    },
    {
      id: 5,
      name: "Social Media Manager",
      type: "Social",
      description: "Posts content, engages with followers, and analyzes social metrics",
      status: "Active",
      icon: Share2,
      color: "bg-pink-500",
      metrics: {
        tasksCompleted: 1876,
        successRate: "92%",
        lastActive: "30 minutes ago",
      },
    },
    {
      id: 6,
      name: "Brand Voice Analyzer",
      type: "Brand",
      description: "Ensures consistent brand voice across all content and communications",
      status: "Active",
      icon: Bot,
      color: "bg-indigo-500",
      metrics: {
        tasksCompleted: 654,
        successRate: "97%",
        lastActive: "15 minutes ago",
      },
    },
  ]

  return (
    <div className="flex flex-col">
      <DashboardHeader title="AI Agents" description="Manage and monitor your AI-powered marketing agents" />

      <div className="flex-1 space-y-6 p-6">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Your AI Agents</h2>
            <p className="text-muted-foreground">
              {agents.filter((a) => a.status === "Active").length} of {agents.length} agents are currently active
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New Agent
          </Button>
        </div>

        {/* Agents Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Card key={agent.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${agent.color}`}>
                      <agent.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{agent.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {agent.type}
                      </Badge>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Settings className="h-4 w-4 mr-2" />
                        Configure
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Play className="h-4 w-4 mr-2" />
                        View Logs
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete Agent</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm">{agent.description}</CardDescription>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch checked={agent.status === "Active"} id={`agent-${agent.id}`} />
                    <label htmlFor={`agent-${agent.id}`} className="text-sm font-medium">
                      {agent.status}
                    </label>
                  </div>
                  <Badge variant={agent.status === "Active" ? "default" : "secondary"}>{agent.status}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Tasks Completed</p>
                    <p className="font-semibold">{agent.metrics.tasksCompleted.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Success Rate</p>
                    <p className="font-semibold">{agent.metrics.successRate}</p>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">Last active: {agent.metrics.lastActive}</p>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    {agent.status === "Active" ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
