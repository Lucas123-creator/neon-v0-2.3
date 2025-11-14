import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bot, Megaphone, Target, TrendingUp, DollarSign, Activity, Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const metrics = [
    {
      title: "Active AI Agents",
      value: "12",
      change: "+2 from last month",
      icon: Bot,
      color: "text-blue-600",
    },
    {
      title: "Running Campaigns",
      value: "8",
      change: "+3 from last week",
      icon: Megaphone,
      color: "text-green-600",
    },
    {
      title: "Conversion Rate",
      value: "24.5%",
      change: "+4.2% from last month",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+12% from last month",
      icon: DollarSign,
      color: "text-emerald-600",
    },
  ]

  const recentActivity = [
    {
      title: "SEO Agent optimized 15 pages",
      time: "2 minutes ago",
      status: "success",
    },
    {
      title: "Content Agent published blog post",
      time: "1 hour ago",
      status: "success",
    },
    {
      title: "Social Media Agent scheduled 5 posts",
      time: "3 hours ago",
      status: "success",
    },
    {
      title: "Email Campaign completed",
      time: "5 hours ago",
      status: "completed",
    },
  ]

  const activeAgents = [
    {
      name: "SEO Optimizer",
      type: "SEO",
      status: "Active",
      progress: 85,
    },
    {
      name: "Content Creator",
      type: "Content",
      status: "Active",
      progress: 92,
    },
    {
      name: "Social Manager",
      type: "Social",
      status: "Active",
      progress: 78,
    },
    {
      name: "Email Marketer",
      type: "Email",
      status: "Paused",
      progress: 45,
    },
  ]

  return (
    <div className="flex flex-col">
      <DashboardHeader
        title="Dashboard"
        description="Welcome back! Here's what's happening with your AI marketing agents."
      />

      <div className="flex-1 space-y-6 p-6">
        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">{metric.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Active Agents */}
          <Card className="col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Active AI Agents</CardTitle>
                  <CardDescription>Monitor your AI agents' performance and status</CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Agent
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeAgents.map((agent) => (
                  <div key={agent.name} className="flex items-center space-x-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium leading-none">{agent.name}</p>
                        <Badge variant={agent.status === "Active" ? "default" : "secondary"}>{agent.status}</Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={agent.progress} className="flex-1" />
                        <span className="text-xs text-muted-foreground">{agent.progress}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your AI agents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks to get you started</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/campaigns">
                <Button variant="outline" className="h-20 w-full flex-col bg-transparent neon-cta card-lift">
                  <Megaphone className="h-6 w-6 mb-2" />
                  Create Campaign
                </Button>
              </Link>
              <Link href="/strategy">
                <Button variant="outline" className="h-20 w-full flex-col bg-transparent card-lift">
                  <Target className="h-6 w-6 mb-2" />
                  New Strategy
                </Button>
              </Link>
              <Link href="/agents">
                <Button variant="outline" className="h-20 w-full flex-col bg-transparent card-lift">
                  <Bot className="h-6 w-6 mb-2" />
                  Configure Agent
                </Button>
              </Link>
              <Link href="/analytics">
                <Button variant="outline" className="h-20 w-full flex-col bg-transparent card-lift">
                  <Activity className="h-6 w-6 mb-2" />
                  View Analytics
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
