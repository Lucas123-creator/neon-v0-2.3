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
  MessageCircle,
  CheckCircle,
  Clock,
  Star,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  Edit,
  Share2,
  Eye,
  Zap,
  HelpCircle,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function QAPage() {
  const qaMetrics = [
    {
      title: "Total Questions",
      value: "1,847",
      change: "+23 this week",
      icon: HelpCircle,
      color: "text-blue-600",
    },
    {
      title: "Answered",
      value: "1,692",
      change: "91.6% answer rate",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "AI Responses",
      value: "1,234",
      change: "73% AI accuracy",
      icon: Zap,
      color: "text-purple-600",
    },
    {
      title: "Avg Response Time",
      value: "2.3 min",
      change: "-30s improvement",
      icon: Clock,
      color: "text-orange-600",
    },
  ]

  const categories = [
    {
      name: "Product Features",
      count: 234,
      answered: 218,
      color: "bg-blue-500",
      avgRating: 4.2,
    },
    {
      name: "Technical Support",
      count: 189,
      answered: 167,
      color: "bg-red-500",
      avgRating: 4.0,
    },
    {
      name: "Billing & Pricing",
      count: 156,
      answered: 152,
      color: "bg-green-500",
      avgRating: 4.5,
    },
    {
      name: "Account Management",
      count: 134,
      answered: 129,
      color: "bg-purple-500",
      avgRating: 4.1,
    },
    {
      name: "Integration Help",
      count: 98,
      answered: 89,
      color: "bg-orange-500",
      avgRating: 3.9,
    },
    {
      name: "General Questions",
      count: 67,
      answered: 63,
      color: "bg-teal-500",
      avgRating: 4.3,
    },
  ]

  const questions = [
    {
      id: 1,
      question: "How do I integrate the API with my existing CRM system?",
      category: "Integration Help",
      askedBy: "Sarah Johnson",
      askedAt: "2 hours ago",
      status: "Answered",
      aiAnswer: true,
      confidence: 94,
      upvotes: 12,
      downvotes: 1,
      views: 45,
      answer:
        "To integrate our API with your CRM system, you'll need to follow these steps: 1) Generate an API key from your dashboard, 2) Configure the webhook endpoints...",
      tags: ["api", "crm", "integration"],
    },
    {
      id: 2,
      question: "What's the difference between Pro and Enterprise plans?",
      category: "Billing & Pricing",
      askedBy: "Michael Chen",
      askedAt: "4 hours ago",
      status: "Answered",
      aiAnswer: false,
      confidence: null,
      upvotes: 8,
      downvotes: 0,
      views: 23,
      answer:
        "The main differences are: Pro plan includes up to 10,000 contacts and basic automation, while Enterprise includes unlimited contacts, advanced AI features...",
      tags: ["pricing", "plans", "features"],
    },
    {
      id: 3,
      question: "How can I set up automated email sequences?",
      category: "Product Features",
      askedBy: "Emily Rodriguez",
      askedAt: "1 day ago",
      status: "Pending",
      aiAnswer: null,
      confidence: null,
      upvotes: 3,
      downvotes: 0,
      views: 12,
      answer: null,
      tags: ["automation", "email", "sequences"],
    },
    {
      id: 4,
      question: "Why is my campaign performance lower than expected?",
      category: "Technical Support",
      askedBy: "David Kim",
      askedAt: "2 days ago",
      status: "Answered",
      aiAnswer: true,
      confidence: 87,
      upvotes: 15,
      downvotes: 2,
      views: 67,
      answer:
        "Campaign performance can be affected by several factors: audience targeting, message timing, content relevance, and deliverability issues...",
      tags: ["campaigns", "performance", "troubleshooting"],
    },
    {
      id: 5,
      question: "How do I export my customer data?",
      category: "Account Management",
      askedBy: "Lisa Thompson",
      askedAt: "3 days ago",
      status: "Answered",
      aiAnswer: false,
      confidence: null,
      upvotes: 6,
      downvotes: 0,
      views: 34,
      answer:
        "You can export your customer data by going to Settings > Data Export. Choose your preferred format (CSV, JSON, or Excel) and select the data range...",
      tags: ["export", "data", "customers"],
    },
  ]

  const popularQuestions = [
    {
      question: "How do I reset my password?",
      views: 234,
      category: "Account Management",
    },
    {
      question: "What are the API rate limits?",
      views: 189,
      category: "Integration Help",
    },
    {
      question: "How to upgrade my subscription?",
      views: 156,
      category: "Billing & Pricing",
    },
    {
      question: "Setting up email automation workflows",
      views: 134,
      category: "Product Features",
    },
    {
      question: "Troubleshooting delivery issues",
      views: 98,
      category: "Technical Support",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Answered":
        return "default"
      case "Pending":
        return "secondary"
      case "In Progress":
        return "outline"
      default:
        return "secondary"
    }
  }

  const getConfidenceColor = (confidence: number | null) => {
    if (!confidence) return ""
    if (confidence >= 90) return "bg-green-100 text-green-700"
    if (confidence >= 80) return "bg-yellow-100 text-yellow-700"
    return "bg-red-100 text-red-700"
  }

  const getAnswerRate = (answered: number, total: number) => {
    return Math.round((answered / total) * 100)
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Q&A" description="AI-powered question answering and knowledge sharing" />

      <div className="flex-1 space-y-6 p-6">
        {/* Q&A Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {qaMetrics.map((metric) => (
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

        {/* Question Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Question Categories</CardTitle>
            <CardDescription>Breakdown of questions by category with answer rates</CardDescription>
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
                      <span>Questions</span>
                      <span className="font-medium">{category.count}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Answered</span>
                      <span className="font-medium text-green-600">
                        {getAnswerRate(category.answered, category.count)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avg Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="font-medium">{category.avgRating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="questions" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="questions">All Questions</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
              <TabsTrigger value="ask">Ask Question</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search questions..." className="pl-8 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="questions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Questions</CardTitle>
                <CardDescription>Latest questions from your community with AI-powered answers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {questions.map((q) => (
                    <div key={q.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-medium">{q.question}</h4>
                            <Badge variant={getStatusColor(q.status)}>{q.status}</Badge>
                            {q.aiAnswer && (
                              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                                <Zap className="h-3 w-3 mr-1" />
                                AI
                              </Badge>
                            )}
                            {q.confidence && (
                              <Badge variant="outline" className={getConfidenceColor(q.confidence)}>
                                {q.confidence}% confidence
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <Badge variant="outline">{q.category}</Badge>
                            <span>by {q.askedBy}</span>
                            <span>{q.askedAt}</span>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{q.views} views</span>
                            </div>
                          </div>
                          {q.answer && (
                            <div className="bg-muted/50 p-3 rounded-lg mb-3">
                              <p className="text-sm line-clamp-2">{q.answer}</p>
                            </div>
                          )}
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              {q.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-2 ml-auto">
                              <Button variant="ghost" size="sm">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                {q.upvotes}
                              </Button>
                              <Button variant="ghost" size="sm">
                                <ThumbsDown className="h-4 w-4 mr-1" />
                                {q.downvotes}
                              </Button>
                            </div>
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
                              Edit Answer
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </DropdownMenuItem>
                            {q.status === "Pending" && (
                              <DropdownMenuItem>
                                <Zap className="h-4 w-4 mr-2" />
                                Generate AI Answer
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Questions</CardTitle>
                <CardDescription>Most viewed and helpful questions from the community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularQuestions.map((q, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{q.question}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="outline">{q.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{q.views} views</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="unanswered" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Unanswered Questions</CardTitle>
                <CardDescription>Questions waiting for answers from the community or AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {questions
                    .filter((q) => q.status === "Pending")
                    .map((q) => (
                      <div key={q.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-medium">{q.question}</h4>
                              <Badge variant="secondary">Pending</Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                              <Badge variant="outline">{q.category}</Badge>
                              <span>by {q.askedBy}</span>
                              <span>{q.askedAt}</span>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{q.views} views</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {q.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Zap className="h-4 w-4 mr-2" />
                              AI Answer
                            </Button>
                            <Button size="sm">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Answer
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ask" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ask a Question</CardTitle>
                <CardDescription>Get help from our AI assistant or community experts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Question</label>
                    <Input placeholder="What would you like to know?" />
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
                    <label className="text-sm font-medium mb-2 block">Details (Optional)</label>
                    <Textarea
                      placeholder="Provide additional context or details about your question..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tags</label>
                    <Input placeholder="Add relevant tags separated by commas..." />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Ask Question
                    </Button>
                    <Button variant="outline">
                      <Zap className="h-4 w-4 mr-2" />
                      Get AI Answer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
                <CardDescription>Common questions and instant answers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                    <div className="text-left">
                      <div className="font-medium">How do I get started?</div>
                      <div className="text-sm text-muted-foreground">Setup guide and onboarding</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                    <div className="text-left">
                      <div className="font-medium">API Documentation</div>
                      <div className="text-sm text-muted-foreground">Integration guides and examples</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                    <div className="text-left">
                      <div className="font-medium">Billing Questions</div>
                      <div className="text-sm text-muted-foreground">Plans, pricing, and payments</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
                    <div className="text-left">
                      <div className="font-medium">Technical Support</div>
                      <div className="text-sm text-muted-foreground">Troubleshooting and bug reports</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
