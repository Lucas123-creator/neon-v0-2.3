import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Plus,
  Search,
  Filter,
  Brain,
  Lightbulb,
  BookOpen,
  Tag,
  Clock,
  TrendingUp,
  Star,
  MoreHorizontal,
  Edit,
  Trash2,
  Share2,
  Eye,
  Zap,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MemoryPage() {
  const memoryMetrics = [
    {
      title: "Knowledge Items",
      value: "3,247",
      change: "+89 this week",
      icon: Brain,
      color: "text-purple-600",
    },
    {
      title: "Categories",
      value: "24",
      change: "Across all topics",
      icon: Tag,
      color: "text-blue-600",
    },
    {
      title: "AI Insights",
      value: "156",
      change: "+12 new insights",
      icon: Lightbulb,
      color: "text-yellow-600",
    },
    {
      title: "Usage Score",
      value: "94%",
      change: "+3% this month",
      icon: TrendingUp,
      color: "text-green-600",
    },
  ]

  const categories = [
    {
      name: "Customer Insights",
      count: 456,
      color: "bg-blue-500",
      relevance: 95,
      lastUpdated: "2 hours ago",
    },
    {
      name: "Product Knowledge",
      count: 234,
      color: "bg-green-500",
      relevance: 88,
      lastUpdated: "1 day ago",
    },
    {
      name: "Market Research",
      count: 189,
      color: "bg-purple-500",
      relevance: 92,
      lastUpdated: "3 hours ago",
    },
    {
      name: "Competitor Analysis",
      count: 167,
      color: "bg-red-500",
      relevance: 85,
      lastUpdated: "1 week ago",
    },
    {
      name: "Campaign Data",
      count: 298,
      color: "bg-orange-500",
      relevance: 90,
      lastUpdated: "5 hours ago",
    },
    {
      name: "Team Knowledge",
      count: 123,
      color: "bg-teal-500",
      relevance: 78,
      lastUpdated: "2 days ago",
    },
  ]

  const knowledgeItems = [
    {
      id: 1,
      title: "Customer Onboarding Best Practices",
      content:
        "Comprehensive guide on how to effectively onboard new customers, including key touchpoints, timing, and success metrics...",
      category: "Customer Insights",
      tags: ["onboarding", "customer success", "retention"],
      relevanceScore: 95,
      lastAccessed: "2 hours ago",
      createdBy: "Sarah Johnson",
      starred: true,
      aiGenerated: false,
    },
    {
      id: 2,
      title: "Q4 Market Trends Analysis",
      content:
        "AI-generated analysis of market trends showing 23% increase in demand for automation tools, with key insights on customer behavior...",
      category: "Market Research",
      tags: ["trends", "Q4", "automation", "demand"],
      relevanceScore: 92,
      lastAccessed: "1 day ago",
      createdBy: "AI Assistant",
      starred: false,
      aiGenerated: true,
    },
    {
      id: 3,
      title: "Competitor Pricing Strategy",
      content:
        "Detailed analysis of competitor pricing models, including feature comparisons and market positioning strategies...",
      category: "Competitor Analysis",
      tags: ["pricing", "competition", "strategy"],
      relevanceScore: 88,
      lastAccessed: "3 days ago",
      createdBy: "Michael Chen",
      starred: true,
      aiGenerated: false,
    },
    {
      id: 4,
      title: "Product Feature Usage Patterns",
      content:
        "Analysis of how customers use different product features, including adoption rates and correlation with retention...",
      category: "Product Knowledge",
      tags: ["features", "usage", "analytics"],
      relevanceScore: 90,
      lastAccessed: "1 week ago",
      createdBy: "Emily Rodriguez",
      starred: false,
      aiGenerated: false,
    },
    {
      id: 5,
      title: "Campaign Performance Insights",
      content:
        "AI-generated insights from recent campaigns showing optimal timing, messaging, and channel performance...",
      category: "Campaign Data",
      tags: ["campaigns", "performance", "optimization"],
      relevanceScore: 87,
      lastAccessed: "2 days ago",
      createdBy: "AI Assistant",
      starred: false,
      aiGenerated: true,
    },
  ]

  const aiInsights = [
    {
      id: 1,
      title: "Customer Churn Pattern Detected",
      insight:
        "AI has identified a pattern where customers who don't engage with feature X within 30 days have 3x higher churn rate.",
      confidence: 94,
      category: "Customer Insights",
      actionable: true,
      createdAt: "2 hours ago",
    },
    {
      id: 2,
      title: "Optimal Email Send Time",
      insight: "Analysis shows Tuesday 2PM generates 23% higher open rates compared to other times for your audience.",
      confidence: 87,
      category: "Campaign Data",
      actionable: true,
      createdAt: "1 day ago",
    },
    {
      id: 3,
      title: "Feature Request Correlation",
      insight: "Customers requesting feature Y are 45% more likely to upgrade to premium plans within 60 days.",
      confidence: 91,
      category: "Product Knowledge",
      actionable: true,
      createdAt: "3 days ago",
    },
    {
      id: 4,
      title: "Market Opportunity",
      insight: "Emerging trend in automation tools suggests 67% growth opportunity in mid-market segment.",
      confidence: 82,
      category: "Market Research",
      actionable: false,
      createdAt: "1 week ago",
    },
  ]

  const getRelevanceColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "bg-green-100 text-green-700"
    if (confidence >= 80) return "bg-yellow-100 text-yellow-700"
    return "bg-red-100 text-red-700"
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Memory" description="AI-powered organizational knowledge and insights" />

      <div className="flex-1 space-y-6 p-6">
        {/* Memory Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {memoryMetrics.map((metric) => (
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

        {/* Knowledge Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Knowledge Categories</CardTitle>
            <CardDescription>Organized knowledge base with AI-powered relevance scoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div key={category.name} className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-4 h-4 ${category.color} rounded-full`} />
                    <h4 className="font-medium">{category.name}</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Items</span>
                      <span className="font-medium">{category.count}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Relevance</span>
                      <span className={`font-medium ${getRelevanceColor(category.relevance)}`}>
                        {category.relevance}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Updated</span>
                      <span className="font-medium">{category.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="knowledge" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
              <TabsTrigger value="search">Smart Search</TabsTrigger>
              <TabsTrigger value="add">Add Knowledge</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search knowledge..." className="pl-8 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="knowledge" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Knowledge Items</CardTitle>
                <CardDescription>Curated knowledge base with AI-powered relevance scoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {knowledgeItems.map((item) => (
                    <div key={item.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-medium">{item.title}</h4>
                            {item.starred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                            {item.aiGenerated && (
                              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                                <Zap className="h-3 w-3 mr-1" />
                                AI
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.content}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <Badge variant="outline">{item.category}</Badge>
                            <span className={`font-medium ${getRelevanceColor(item.relevanceScore)}`}>
                              {item.relevanceScore}% relevant
                            </span>
                            <span>by {item.createdBy}</span>
                            <span>accessed {item.lastAccessed}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
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
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Star className="h-4 w-4 mr-2" />
                              {item.starred ? "Unstar" : "Star"}
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Insights</CardTitle>
                <CardDescription>Intelligent insights discovered from your knowledge base</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.map((insight) => (
                    <div key={insight.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Lightbulb className="h-5 w-5 text-yellow-500" />
                            <h4 className="font-medium">{insight.title}</h4>
                            <Badge variant="outline" className={getConfidenceColor(insight.confidence)}>
                              {insight.confidence}% confidence
                            </Badge>
                            {insight.actionable && (
                              <Badge variant="secondary" className="bg-green-100 text-green-700">
                                Actionable
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{insight.insight}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <Badge variant="outline">{insight.category}</Badge>
                            <span>{insight.createdAt}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {insight.actionable && (
                            <Button variant="outline" size="sm">
                              Take Action
                            </Button>
                          )}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Share2 className="h-4 w-4 mr-2" />
                                Share Insight
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <BookOpen className="h-4 w-4 mr-2" />
                                Add to Knowledge
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center pt-4">
                  <Button variant="outline">
                    <Brain className="h-4 w-4 mr-2" />
                    Generate More Insights
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Smart Search</CardTitle>
                <CardDescription>AI-powered semantic search across your knowledge base</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Ask anything about your knowledge base..." className="pl-10 h-12 text-base" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Customer retention strategies
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Pricing optimization
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Feature adoption rates
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                      Competitor analysis
                    </Badge>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <h4 className="font-medium mb-4">Recent Searches</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>"How to improve customer onboarding"</span>
                      <span className="ml-auto">2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>"Best practices for email campaigns"</span>
                      <span className="ml-auto">1 day ago</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>"Competitor pricing strategies"</span>
                      <span className="ml-auto">3 days ago</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Knowledge</CardTitle>
                <CardDescription>Contribute new knowledge to your organizational memory</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Title</label>
                    <Input placeholder="Enter knowledge title..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Select category...</option>
                      {categories.map((cat) => (
                        <option key={cat.name} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Content</label>
                    <Textarea
                      placeholder="Share your knowledge, insights, or learnings..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tags</label>
                    <Input placeholder="Add tags separated by commas..." />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Knowledge
                    </Button>
                    <Button variant="outline">
                      <Zap className="h-4 w-4 mr-2" />
                      AI Enhance
                    </Button>
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
