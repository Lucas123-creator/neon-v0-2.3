import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Plus,
  Search,
  Filter,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Mail,
  Building,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock,
  MoreHorizontal,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function CustomersPage() {
  const customerMetrics = [
    {
      title: "Total Customers",
      value: "2,847",
      change: "+12% from last month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Customers",
      value: "2,234",
      change: "78% of total customers",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Customer LTV",
      value: "$4,250",
      change: "+8% from last quarter",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      title: "Churn Rate",
      value: "2.3%",
      change: "-0.5% improvement",
      icon: TrendingUp,
      color: "text-red-600",
    },
  ]

  const customerSegments = [
    {
      name: "Enterprise",
      count: 156,
      percentage: 5.5,
      avgValue: "$12,500",
      growth: "+15%",
      color: "bg-purple-500",
    },
    {
      name: "Mid-Market",
      count: 423,
      percentage: 14.9,
      avgValue: "$5,200",
      growth: "+8%",
      color: "bg-blue-500",
    },
    {
      name: "Small Business",
      count: 1234,
      percentage: 43.4,
      avgValue: "$1,800",
      growth: "+12%",
      color: "bg-green-500",
    },
    {
      name: "Startup",
      count: 1034,
      percentage: 36.3,
      avgValue: "$650",
      growth: "+18%",
      color: "bg-orange-500",
    },
  ]

  const customers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@techcorp.com",
      company: "TechCorp Inc.",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "Active",
      healthScore: 92,
      ltv: "$8,500",
      lastActivity: "2 hours ago",
      segment: "Enterprise",
      location: "San Francisco, CA",
      joinDate: "Jan 2023",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@innovate.io",
      company: "Innovate Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "Active",
      healthScore: 78,
      ltv: "$3,200",
      lastActivity: "1 day ago",
      segment: "Mid-Market",
      location: "Austin, TX",
      joinDate: "Mar 2023",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily@startup.co",
      company: "Startup Co.",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "At Risk",
      healthScore: 45,
      ltv: "$1,200",
      lastActivity: "1 week ago",
      segment: "Startup",
      location: "New York, NY",
      joinDate: "Jun 2023",
    },
    {
      id: 4,
      name: "David Kim",
      email: "david@growth.com",
      company: "Growth Marketing",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "Active",
      healthScore: 88,
      ltv: "$5,600",
      lastActivity: "3 hours ago",
      segment: "Mid-Market",
      location: "Seattle, WA",
      joinDate: "Feb 2023",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      email: "lisa@enterprise.org",
      company: "Enterprise Corp",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "Active",
      healthScore: 95,
      ltv: "$15,200",
      lastActivity: "30 minutes ago",
      segment: "Enterprise",
      location: "Chicago, IL",
      joinDate: "Nov 2022",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      customer: "Sarah Johnson",
      company: "TechCorp Inc.",
      action: "Upgraded to Pro plan",
      time: "2 hours ago",
      type: "upgrade",
    },
    {
      id: 2,
      customer: "Michael Chen",
      company: "Innovate Solutions",
      action: "Completed onboarding",
      time: "1 day ago",
      type: "milestone",
    },
    {
      id: 3,
      customer: "David Kim",
      company: "Growth Marketing",
      action: "Opened support ticket",
      time: "3 hours ago",
      type: "support",
    },
    {
      id: 4,
      customer: "Lisa Thompson",
      company: "Enterprise Corp",
      action: "Scheduled demo call",
      time: "30 minutes ago",
      type: "meeting",
    },
    {
      id: 5,
      customer: "Emily Rodriguez",
      company: "Startup Co.",
      action: "Payment failed",
      time: "1 week ago",
      type: "payment",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "At Risk":
        return "destructive"
      case "Churned":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getHealthScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-4 w-4 text-green-600" />
    if (score >= 60) return <Clock className="h-4 w-4 text-yellow-600" />
    return <AlertTriangle className="h-4 w-4 text-red-600" />
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "upgrade":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "milestone":
        return <CheckCircle className="h-4 w-4 text-blue-600" />
      case "support":
        return <Mail className="h-4 w-4 text-orange-600" />
      case "meeting":
        return <Calendar className="h-4 w-4 text-purple-600" />
      case "payment":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Customers" description="Manage your customer relationships and track engagement" />

      <div className="flex-1 space-y-6 p-6">
        {/* Customer Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {customerMetrics.map((metric) => (
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

        {/* Customer Segments */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Segments</CardTitle>
            <CardDescription>Breakdown of customers by company size and value</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {customerSegments.map((segment) => (
                <div key={segment.name} className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-4 h-4 ${segment.color} rounded-full`} />
                    <h4 className="font-medium">{segment.name}</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Customers</span>
                      <span className="font-medium">{segment.count}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Percentage</span>
                      <span className="font-medium">{segment.percentage}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avg Value</span>
                      <span className="font-medium">{segment.avgValue}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Growth</span>
                      <span className="font-medium text-green-600">{segment.growth}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="customers" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="customers">All Customers</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="health">Health Scores</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-8 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Customer
              </Button>
            </div>
          </div>

          <TabsContent value="customers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Directory</CardTitle>
                <CardDescription>Complete list of your customers with key information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customers.map((customer) => (
                    <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                          <AvatarFallback>
                            {customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{customer.name}</h4>
                            <Badge variant={getStatusColor(customer.status)}>{customer.status}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Building className="h-3 w-3" />
                              <span>{customer.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Mail className="h-3 w-3" />
                              <span>{customer.email}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{customer.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-sm font-medium">{customer.ltv}</div>
                          <div className="text-xs text-muted-foreground">LTV</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center space-x-1">
                            {getHealthScoreIcon(customer.healthScore)}
                            <span className={`text-sm font-medium ${getHealthScoreColor(customer.healthScore)}`}>
                              {customer.healthScore}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">Health</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium">{customer.lastActivity}</div>
                          <div className="text-xs text-muted-foreground">Last Active</div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Send Message</DropdownMenuItem>
                            <DropdownMenuItem>Schedule Call</DropdownMenuItem>
                            <DropdownMenuItem>View Analytics</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Customer Activity</CardTitle>
                <CardDescription>Latest interactions and milestones from your customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="flex-shrink-0">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{activity.customer}</span>
                          <span className="text-sm text-muted-foreground">from {activity.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Health Monitoring</CardTitle>
                <CardDescription>Track customer engagement and identify at-risk accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customers.map((customer) => (
                    <div key={customer.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                          <AvatarFallback>
                            {customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{customer.name}</h4>
                          <p className="text-sm text-muted-foreground">{customer.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-sm font-medium">{customer.segment}</div>
                          <div className="text-xs text-muted-foreground">Segment</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium">{customer.ltv}</div>
                          <div className="text-xs text-muted-foreground">LTV</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center space-x-2">
                            {getHealthScoreIcon(customer.healthScore)}
                            <span className={`text-lg font-bold ${getHealthScoreColor(customer.healthScore)}`}>
                              {customer.healthScore}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">Health Score</div>
                        </div>
                        <div className="w-24">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                customer.healthScore >= 80
                                  ? "bg-green-500"
                                  : customer.healthScore >= 60
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                              }`}
                              style={{ width: `${customer.healthScore}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
