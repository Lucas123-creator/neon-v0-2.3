import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Plus,
  TestTube,
  TrendingUp,
  Users,
  Target,
  Play,
  Pause,
  BarChart3,
  Settings,
  Copy,
  Eye,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react"

export default function ABTestingPage() {
  const testingMetrics = [
    {
      title: "Active Tests",
      value: "8",
      change: "+2 this week",
      icon: TestTube,
      color: "text-blue-600",
    },
    {
      title: "Completed Tests",
      value: "24",
      change: "This quarter",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Avg. Lift",
      value: "12.4%",
      change: "Across all tests",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Total Participants",
      value: "45.2K",
      change: "Across active tests",
      icon: Users,
      color: "text-emerald-600",
    },
  ]

  const activeTests = [
    {
      id: 1,
      name: "Homepage Hero CTA",
      type: "Landing Page",
      status: "Running",
      startDate: "2024-01-15",
      participants: 2450,
      variants: 2,
      confidence: 95,
      lift: 8.3,
      winner: "Variant B",
      significance: "Significant",
    },
    {
      id: 2,
      name: "Email Subject Lines",
      type: "Email Campaign",
      status: "Running",
      startDate: "2024-01-18",
      participants: 5600,
      variants: 3,
      confidence: 87,
      lift: 12.1,
      winner: "Variant A",
      significance: "Trending",
    },
    {
      id: 3,
      name: "Pricing Page Layout",
      type: "Landing Page",
      status: "Draft",
      startDate: null,
      participants: 0,
      variants: 2,
      confidence: 0,
      lift: 0,
      winner: null,
      significance: "Not Started",
    },
    {
      id: 4,
      name: "Social Media Ad Copy",
      type: "Advertisement",
      status: "Running",
      startDate: "2024-01-20",
      participants: 8900,
      variants: 4,
      confidence: 78,
      lift: -2.1,
      winner: "Control",
      significance: "Inconclusive",
    },
    {
      id: 5,
      name: "Blog Post Headlines",
      type: "Content",
      status: "Completed",
      startDate: "2024-01-01",
      participants: 12300,
      variants: 2,
      confidence: 99,
      lift: 15.7,
      winner: "Variant A",
      significance: "Significant",
    },
  ]

  const testTemplates = [
    {
      id: 1,
      name: "Landing Page CTA Test",
      description: "Test different call-to-action buttons and copy",
      category: "Conversion",
      estimatedDuration: "2-3 weeks",
      difficulty: "Easy",
    },
    {
      id: 2,
      name: "Email Subject Line Test",
      description: "Compare different email subject line approaches",
      category: "Email Marketing",
      estimatedDuration: "1 week",
      difficulty: "Easy",
    },
    {
      id: 3,
      name: "Pricing Strategy Test",
      description: "Test different pricing presentations and structures",
      category: "Pricing",
      estimatedDuration: "4-6 weeks",
      difficulty: "Advanced",
    },
    {
      id: 4,
      name: "Content Format Test",
      description: "Compare blog post vs video content performance",
      category: "Content",
      estimatedDuration: "3-4 weeks",
      difficulty: "Intermediate",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Running":
        return "default"
      case "Completed":
        return "secondary"
      case "Draft":
        return "outline"
      case "Paused":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getSignificanceColor = (significance: string) => {
    switch (significance) {
      case "Significant":
        return "text-green-600"
      case "Trending":
        return "text-blue-600"
      case "Inconclusive":
        return "text-yellow-600"
      case "Not Started":
        return "text-gray-600"
      default:
        return "text-gray-600"
    }
  }

  const getSignificanceIcon = (significance: string) => {
    switch (significance) {
      case "Significant":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Trending":
        return <TrendingUp className="h-4 w-4 text-blue-500" />
      case "Inconclusive":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "Not Started":
        return <XCircle className="h-4 w-4 text-gray-500" />
      default:
        return <XCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "default"
      case "Intermediate":
        return "secondary"
      case "Advanced":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="A/B Testing" description="Create, manage, and analyze A/B tests for optimization" />

      <div className="flex-1 space-y-6 p-6">
        {/* Testing Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testingMetrics.map((metric) => (
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

        <Tabs defaultValue="tests" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="tests">Active Tests</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Test
            </Button>
          </div>

          <TabsContent value="tests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>A/B Tests Overview</CardTitle>
                <CardDescription>Monitor and manage your active A/B tests</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Test Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Participants</TableHead>
                      <TableHead>Confidence</TableHead>
                      <TableHead>Lift</TableHead>
                      <TableHead>Significance</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeTests.map((test) => (
                      <TableRow key={test.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{test.name}</div>
                            {test.startDate && (
                              <div className="text-sm text-muted-foreground">Started {test.startDate}</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{test.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(test.status)}>{test.status}</Badge>
                        </TableCell>
                        <TableCell>{test.participants.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={test.confidence} className="w-16" />
                            <span className="text-sm">{test.confidence}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={test.lift > 0 ? "text-green-600" : test.lift < 0 ? "text-red-600" : ""}>
                            {test.lift > 0 ? "+" : ""}
                            {test.lift}%
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getSignificanceIcon(test.significance)}
                            <span className={`text-sm ${getSignificanceColor(test.significance)}`}>
                              {test.significance}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-1">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Settings className="h-4 w-4" />
                            </Button>
                            {test.status === "Running" ? (
                              <Button variant="ghost" size="icon">
                                <Pause className="h-4 w-4" />
                              </Button>
                            ) : test.status === "Draft" ? (
                              <Button variant="ghost" size="icon">
                                <Play className="h-4 w-4" />
                              </Button>
                            ) : (
                              <Button variant="ghost" size="icon">
                                <Copy className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Test Results Summary</CardTitle>
                  <CardDescription>Performance overview of completed tests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Homepage Hero CTA</div>
                        <div className="text-sm text-muted-foreground">Landing Page Test</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-green-600">+8.3% lift</div>
                        <div className="text-sm text-muted-foreground">95% confidence</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Blog Post Headlines</div>
                        <div className="text-sm text-muted-foreground">Content Test</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-green-600">+15.7% lift</div>
                        <div className="text-sm text-muted-foreground">99% confidence</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Email Subject Lines</div>
                        <div className="text-sm text-muted-foreground">Email Campaign</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-blue-600">+12.1% lift</div>
                        <div className="text-sm text-muted-foreground">87% confidence</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Statistical Significance</CardTitle>
                  <CardDescription>Confidence levels across test categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Landing Pages</span>
                        <span>92% avg confidence</span>
                      </div>
                      <Progress value={92} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Email Campaigns</span>
                        <span>88% avg confidence</span>
                      </div>
                      <Progress value={88} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Content Tests</span>
                        <span>94% avg confidence</span>
                      </div>
                      <Progress value={94} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Advertisement</span>
                        <span>78% avg confidence</span>
                      </div>
                      <Progress value={78} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Winning Variations</CardTitle>
                <CardDescription>Most successful test variations and their impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeTests
                    .filter((test) => test.winner && test.significance === "Significant")
                    .map((test) => (
                      <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{test.name}</h4>
                            <Badge variant="outline">{test.type}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>Winner: {test.winner}</span>
                            <span>{test.participants.toLocaleString()} participants</span>
                            <span>{test.confidence}% confidence</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">+{test.lift}% lift</div>
                          <div className="text-sm text-muted-foreground">conversion rate</div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {testTemplates.map((template) => (
                <Card key={template.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline">{template.category}</Badge>
                          <Badge variant={getDifficultyColor(template.difficulty)}>{template.difficulty}</Badge>
                        </div>
                      </div>
                      <TestTube className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{template.description}</CardDescription>

                    <div className="text-sm text-muted-foreground">
                      <p>Estimated duration: {template.estimatedDuration}</p>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Plus className="h-4 w-4 mr-2" />
                        Use Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Testing Insights</CardTitle>
                  <CardDescription>Key learnings from your A/B tests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">CTA Button Color</p>
                          <p className="text-sm text-muted-foreground">
                            Orange buttons consistently outperform blue by 12-15% across landing pages
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-2">
                        <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Email Subject Lines</p>
                          <p className="text-sm text-muted-foreground">
                            Questions in subject lines increase open rates by 8% on average
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Target className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Content Length</p>
                          <p className="text-sm text-muted-foreground">
                            Shorter content (under 500 words) performs better for B2B audiences
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>Suggested tests based on your data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-2">
                        <TestTube className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Test Mobile Navigation</p>
                          <p className="text-sm text-muted-foreground">
                            45% of your traffic is mobile - test hamburger vs. bottom navigation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-2">
                        <BarChart3 className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Pricing Page Layout</p>
                          <p className="text-sm text-muted-foreground">
                            High traffic but low conversion - test different pricing presentations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Users className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Social Proof Elements</p>
                          <p className="text-sm text-muted-foreground">
                            Add customer testimonials or logos to increase trust and conversions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
