import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Target, Users, Calendar, TrendingUp, FileText, Copy, Edit, Play, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function StrategyPage() {
  const strategies = [
    {
      id: 1,
      name: "Q3 Growth Strategy",
      description: "Comprehensive growth strategy focusing on customer acquisition and retention",
      status: "Active",
      type: "Growth",
      targetAudience: "B2B SaaS Companies",
      timeline: "3 months",
      goals: ["Increase MRR by 40%", "Reduce churn by 15%", "Acquire 500 new customers"],
      executions: 12,
      templates: 8,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "Brand Positioning 2024",
      description: "Repositioning strategy to establish market leadership in AI marketing",
      status: "In Progress",
      type: "Brand",
      targetAudience: "Marketing Directors",
      timeline: "6 months",
      goals: ["Increase brand awareness by 60%", "Establish thought leadership", "Launch 3 major campaigns"],
      executions: 8,
      templates: 12,
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      name: "Product Launch Strategy",
      description: "Go-to-market strategy for new AI agent features",
      status: "Draft",
      type: "Product Launch",
      targetAudience: "Existing Customers",
      timeline: "2 months",
      goals: ["Generate 1000 beta signups", "Achieve 80% satisfaction", "Create buzz in community"],
      executions: 0,
      templates: 5,
      lastUpdated: "3 days ago",
    },
  ]

  const templates = [
    {
      id: 1,
      name: "SaaS Growth Template",
      description: "Proven template for B2B SaaS growth strategies",
      category: "Growth",
      uses: 45,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Brand Launch Template",
      description: "Complete framework for brand positioning and launch",
      category: "Brand",
      uses: 32,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Content Marketing Template",
      description: "Strategic template for content-driven marketing",
      category: "Content",
      uses: 67,
      rating: 4.9,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "In Progress":
        return "secondary"
      case "Draft":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Strategy" description="Create, manage, and execute your marketing strategies" />

      <div className="flex-1 space-y-6 p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="executions">Executions</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Strategy
            </Button>
          </div>

          <TabsContent value="overview" className="space-y-6">
            {/* Strategy Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {strategies.map((strategy) => (
                <Card key={strategy.id} className="relative">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{strategy.name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{strategy.type}</Badge>
                          <Badge variant={getStatusColor(strategy.status)}>{strategy.status}</Badge>
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
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Strategy
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="h-4 w-4 mr-2" />
                            Clone Strategy
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Play className="h-4 w-4 mr-2" />
                            Execute
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{strategy.description}</CardDescription>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Target:</span>
                        <span>{strategy.targetAudience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Timeline:</span>
                        <span>{strategy.timeline}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Key Goals:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {strategy.goals.slice(0, 2).map((goal, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Target className="h-3 w-3 mt-0.5 flex-shrink-0" />
                            <span>{goal}</span>
                          </li>
                        ))}
                        {strategy.goals.length > 2 && (
                          <li className="text-xs">+{strategy.goals.length - 2} more goals</li>
                        )}
                      </ul>
                    </div>

                    <div className="flex justify-between text-sm pt-2 border-t">
                      <div>
                        <span className="text-muted-foreground">Executions:</span>
                        <span className="ml-1 font-medium">{strategy.executions}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Templates:</span>
                        <span className="ml-1 font-medium">{strategy.templates}</span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground">Updated {strategy.lastUpdated}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="executions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Strategy Executions</CardTitle>
                <CardDescription>Track the execution of your marketing strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No executions yet</h3>
                  <p className="text-muted-foreground mb-4">Start executing your strategies to see them here</p>
                  <Button>
                    <Play className="h-4 w-4 mr-2" />
                    Execute Strategy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <Card key={template.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {template.category}
                        </Badge>
                      </div>
                      <div className="text-right text-sm">
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4 text-yellow-500" />
                          <span>{template.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{template.description}</CardDescription>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Used {template.uses} times</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        Use Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
