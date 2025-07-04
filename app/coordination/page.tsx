import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, GitBranch, Target, Users, CheckCircle, Clock, ArrowRight, Settings, Play, Pause } from "lucide-react"

export default function CoordinationPage() {
  const coordinationMetrics = [
    {
      title: "Active Goals",
      value: "12",
      change: "3 completed this month",
      icon: Target,
      color: "text-blue-600",
    },
    {
      title: "Running Workflows",
      value: "8",
      change: "2 new this week",
      icon: GitBranch,
      color: "text-green-600",
    },
    {
      title: "Team Members",
      value: "15",
      change: "Across all projects",
      icon: Users,
      color: "text-purple-600",
    },
    {
      title: "Completion Rate",
      value: "87%",
      change: "+5% this quarter",
      icon: CheckCircle,
      color: "text-emerald-600",
    },
  ]

  const goals = [
    {
      id: 1,
      title: "Increase Website Conversion Rate",
      description: "Improve landing page conversion from 2.1% to 3.5%",
      category: "Conversion",
      priority: "High",
      progress: 68,
      dueDate: "2024-02-15",
      assignee: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SC",
      },
      status: "In Progress",
      tasks: 8,
      completedTasks: 5,
    },
    {
      id: 2,
      title: "Launch Q1 Product Campaign",
      description: "Coordinate multi-channel campaign for new product launch",
      category: "Campaign",
      priority: "Critical",
      progress: 45,
      dueDate: "2024-03-01",
      assignee: {
        name: "Mike Rodriguez",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MR",
      },
      status: "In Progress",
      tasks: 12,
      completedTasks: 5,
    },
    {
      id: 3,
      title: "Optimize SEO Performance",
      description: "Improve organic search rankings for target keywords",
      category: "SEO",
      priority: "Medium",
      progress: 82,
      dueDate: "2024-02-28",
      assignee: {
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "ED",
      },
      status: "Nearly Complete",
      tasks: 6,
      completedTasks: 5,
    },
    {
      id: 4,
      title: "Implement Marketing Automation",
      description: "Set up automated email sequences and lead nurturing",
      category: "Automation",
      priority: "Medium",
      progress: 25,
      dueDate: "2024-03-15",
      assignee: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "AJ",
      },
      status: "Planning",
      tasks: 10,
      completedTasks: 2,
    },
  ]

  const workflows = [
    {
      id: 1,
      name: "Content Creation Pipeline",
      description: "Automated workflow for blog content creation and publishing",
      status: "Active",
      triggers: 3,
      actions: 8,
      lastRun: "2 hours ago",
      successRate: 94,
      steps: [
        { name: "Content Brief", status: "completed" },
        { name: "Writing", status: "completed" },
        { name: "Review", status: "active" },
        { name: "SEO Optimization", status: "pending" },
        { name: "Publishing", status: "pending" },
      ],
    },
    {
      id: 2,
      name: "Lead Qualification Process",
      description: "Automated lead scoring and assignment workflow",
      status: "Active",
      triggers: 5,
      actions: 12,
      lastRun: "15 minutes ago",
      successRate: 89,
      steps: [
        { name: "Lead Capture", status: "completed" },
        { name: "Scoring", status: "completed" },
        { name: "Qualification", status: "completed" },
        { name: "Assignment", status: "active" },
        { name: "Follow-up", status: "pending" },
      ],
    },
    {
      id: 3,
      name: "Campaign Performance Review",
      description: "Weekly automated campaign analysis and reporting",
      status: "Paused",
      triggers: 1,
      actions: 6,
      lastRun: "3 days ago",
      successRate: 96,
      steps: [
        { name: "Data Collection", status: "completed" },
        { name: "Analysis", status: "completed" },
        { name: "Report Generation", status: "paused" },
        { name: "Distribution", status: "pending" },
      ],
    },
  ]

  const teamAssignments = [
    {
      member: {
        name: "Sarah Chen",
        role: "Marketing Manager",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SC",
      },
      assignments: 5,
      completed: 12,
      workload: 85,
    },
    {
      member: {
        name: "Mike Rodriguez",
        role: "Campaign Specialist",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MR",
      },
      assignments: 3,
      completed: 8,
      workload: 70,
    },
    {
      member: {
        name: "Emily Davis",
        role: "SEO Specialist",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "ED",
      },
      assignments: 4,
      completed: 15,
      workload: 60,
    },
    {
      member: {
        name: "Alex Johnson",
        role: "Content Creator",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "AJ",
      },
      assignments: 6,
      completed: 9,
      workload: 90,
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "destructive"
      case "High":
        return "default"
      case "Medium":
        return "secondary"
      case "Low":
        return "outline"
      default:
        return "outline"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "In Progress":
        return "secondary"
      case "Nearly Complete":
        return "default"
      case "Planning":
        return "outline"
      case "Paused":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getStepStatus = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "active":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "paused":
        return <Pause className="h-4 w-4 text-yellow-500" />
      default:
        return <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader
        title="Coordination"
        description="Coordinate goals, workflows, and team assignments across your marketing operations"
      />

      <div className="flex-1 space-y-6 p-6">
        {/* Coordination Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {coordinationMetrics.map((metric) => (
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

        <Tabs defaultValue="goals" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="workflows">Workflows</TabsTrigger>
              <TabsTrigger value="assignments">Team Assignments</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Goal
            </Button>
          </div>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {goals.map((goal) => (
                <Card key={goal.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                        <CardDescription>{goal.description}</CardDescription>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{goal.category}</Badge>
                          <Badge variant={getPriorityColor(goal.priority)}>{goal.priority}</Badge>
                          <Badge variant={getStatusColor(goal.status)}>{goal.status}</Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>
                          {goal.completedTasks}/{goal.tasks} tasks completed
                        </span>
                        <span>Due {goal.dueDate}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={goal.assignee.avatar || "/placeholder.svg"} alt={goal.assignee.name} />
                          <AvatarFallback className="text-xs">{goal.assignee.initials}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{goal.assignee.name}</span>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workflows" className="space-y-6">
            <div className="space-y-6">
              {workflows.map((workflow) => (
                <Card key={workflow.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <CardTitle className="text-lg">{workflow.name}</CardTitle>
                          <Badge variant={getStatusColor(workflow.status)}>{workflow.status}</Badge>
                        </div>
                        <CardDescription>{workflow.description}</CardDescription>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{workflow.triggers} triggers</span>
                          <span>{workflow.actions} actions</span>
                          <span>Last run: {workflow.lastRun}</span>
                          <span>{workflow.successRate}% success rate</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Settings className="h-4 w-4" />
                        </Button>
                        {workflow.status === "Active" ? (
                          <Button variant="ghost" size="icon">
                            <Pause className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button variant="ghost" size="icon">
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                        {workflow.steps.map((step, index) => (
                          <div key={index} className="flex items-center space-x-2 flex-shrink-0">
                            <div className="flex items-center space-x-2 px-3 py-2 border rounded-lg min-w-0">
                              {getStepStatus(step.status)}
                              <span className="text-sm font-medium whitespace-nowrap">{step.name}</span>
                            </div>
                            {index < workflow.steps.length - 1 && (
                              <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <div className="text-sm text-muted-foreground">Success Rate: {workflow.successRate}%</div>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          View Workflow
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Workload Overview</CardTitle>
                <CardDescription>Current assignments and workload distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {teamAssignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={assignment.member.avatar || "/placeholder.svg"}
                            alt={assignment.member.name}
                          />
                          <AvatarFallback>{assignment.member.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{assignment.member.name}</div>
                          <div className="text-sm text-muted-foreground">{assignment.member.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="font-medium">{assignment.assignments}</div>
                          <div className="text-xs text-muted-foreground">Active</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{assignment.completed}</div>
                          <div className="text-xs text-muted-foreground">Completed</div>
                        </div>
                        <div className="w-24">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Workload</span>
                            <span>{assignment.workload}%</span>
                          </div>
                          <Progress value={assignment.workload} />
                        </div>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Marketing Calendar</CardTitle>
                <CardDescription>Upcoming deadlines and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">15</div>
                        <div className="text-xs text-muted-foreground">FEB</div>
                      </div>
                      <div>
                        <div className="font-medium">Website Conversion Goal Due</div>
                        <div className="text-sm text-muted-foreground">Increase conversion rate to 3.5%</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="destructive">High Priority</Badge>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">SC</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">28</div>
                        <div className="text-xs text-muted-foreground">FEB</div>
                      </div>
                      <div>
                        <div className="font-medium">SEO Optimization Complete</div>
                        <div className="text-sm text-muted-foreground">Improve organic search rankings</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Medium Priority</Badge>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">ED</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">01</div>
                        <div className="text-xs text-muted-foreground">MAR</div>
                      </div>
                      <div>
                        <div className="font-medium">Q1 Product Campaign Launch</div>
                        <div className="text-sm text-muted-foreground">Multi-channel campaign rollout</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="destructive">Critical</Badge>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">MR</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">15</div>
                        <div className="text-xs text-muted-foreground">MAR</div>
                      </div>
                      <div>
                        <div className="font-medium">Marketing Automation Setup</div>
                        <div className="text-sm text-muted-foreground">Complete automated email sequences</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Medium Priority</Badge>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">AJ</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
