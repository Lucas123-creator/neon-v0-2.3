import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  TrendingUp,
  Eye,
  Search,
  Hash,
  Globe,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react"

export default function TrendsPage() {
  const trendMetrics = [
    {
      title: "Trending Keywords",
      value: "156",
      change: "+23 this week",
      icon: Search,
      color: "text-blue-600",
    },
    {
      title: "Viral Content",
      value: "8",
      change: "Pieces trending",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Industry Mentions",
      value: "2.4K",
      change: "+18% this month",
      icon: Hash,
      color: "text-purple-600",
    },
    {
      title: "Competitor Activity",
      value: "45",
      change: "New campaigns tracked",
      icon: Eye,
      color: "text-emerald-600",
    },
  ]

  const keywordTrends = [
    {
      keyword: "AI marketing automation",
      volume: 12500,
      trend: "up",
      change: 34,
      difficulty: 68,
      opportunity: "High",
      category: "Primary",
    },
    {
      keyword: "marketing dashboard",
      volume: 8900,
      trend: "up",
      change: 22,
      difficulty: 45,
      opportunity: "Medium",
      category: "Secondary",
    },
    {
      keyword: "automated campaigns",
      volume: 6700,
      trend: "stable",
      change: 0,
      difficulty: 52,
      opportunity: "Medium",
      category: "Secondary",
    },
    {
      keyword: "content marketing AI",
      volume: 9200,
      trend: "up",
      change: 45,
      difficulty: 61,
      opportunity: "High",
      category: "Primary",
    },
    {
      keyword: "SEO optimization tools",
      volume: 4800,
      trend: "down",
      change: -12,
      difficulty: 38,
      opportunity: "Low",
      category: "Tertiary",
    },
  ]

  const contentTrends = [
    {
      title: "AI Marketing Guide: Complete Automation Playbook",
      type: "Blog Post",
      engagement: 15600,
      shares: 892,
      trend: "up",
      change: 156,
      platform: "LinkedIn",
      category: "Educational",
    },
    {
      title: "Marketing Dashboard Demo Video",
      type: "Video",
      engagement: 23400,
      shares: 1240,
      trend: "up",
      change: 340,
      platform: "YouTube",
      category: "Product Demo",
    },
    {
      title: "Customer Success Story: 300% ROI Increase",
      type: "Case Study",
      engagement: 8900,
      shares: 456,
      trend: "stable",
      change: 12,
      platform: "Website",
      category: "Social Proof",
    },
    {
      title: "Marketing Automation Trends 2024",
      type: "Infographic",
      engagement: 12300,
      shares: 678,
      trend: "up",
      change: 89,
      platform: "Twitter",
      category: "Industry Insights",
    },
  ]

  const industryTrends = [
    {
      trend: "AI-Powered Personalization",
      description: "Hyper-personalized marketing experiences using AI",
      growth: 78,
      impact: "High",
      timeframe: "Next 6 months",
      relevance: 95,
    },
    {
      trend: "Voice Search Optimization",
      description: "Optimizing content for voice search queries",
      growth: 45,
      impact: "Medium",
      timeframe: "Next 12 months",
      relevance: 72,
    },
    {
      trend: "Interactive Content",
      description: "Polls, quizzes, and interactive experiences",
      growth: 62,
      impact: "High",
      timeframe: "Current",
      relevance: 88,
    },
    {
      trend: "Privacy-First Marketing",
      description: "Cookieless tracking and privacy-compliant strategies",
      growth: 89,
      impact: "Critical",
      timeframe: "Current",
      relevance: 92,
    },
  ]

  const competitorActivity = [
    {
      competitor: "MarketingPro",
      activity: "Launched new AI features",
      impact: "Medium",
      date: "2 days ago",
      category: "Product",
      sentiment: "neutral",
    },
    {
      competitor: "AutomateHub",
      activity: "Major pricing changes announced",
      impact: "High",
      date: "1 week ago",
      category: "Pricing",
      sentiment: "opportunity",
    },
    {
      competitor: "CampaignMaster",
      activity: "New integration partnerships",
      impact: "Low",
      date: "3 days ago",
      category: "Partnerships",
      sentiment: "neutral",
    },
    {
      competitor: "GrowthEngine",
      activity: "Acquired smaller competitor",
      impact: "High",
      date: "2 weeks ago",
      category: "M&A",
      sentiment: "threat",
    },
  ]

  const getTrendIcon = (trend: string, size = "h-4 w-4") => {
    switch (trend) {
      case "up":
        return <ArrowUpRight className={`${size} text-green-500`} />
      case "down":
        return <ArrowDownRight className={`${size} text-red-500`} />
      default:
        return <Minus className={`${size} text-gray-500`} />
    }
  }

  const getOpportunityColor = (opportunity: string) => {
    switch (opportunity) {
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

  const getImpactColor = (impact: string) => {
    switch (impact) {
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

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "opportunity":
        return "text-green-600"
      case "threat":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader
        title="Trends"
        description="Track industry trends, keyword performance, and competitor activity"
      />

      <div className="flex-1 space-y-6 p-6">
        {/* Trend Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trendMetrics.map((metric) => (
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

        <Tabs defaultValue="keywords" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="industry">Industry</TabsTrigger>
              <TabsTrigger value="competitors">Competitors</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Last 30 Days
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="keywords" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Trends</CardTitle>
                <CardDescription>Track keyword performance and identify opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keywordTrends.map((keyword, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{keyword.keyword}</h4>
                          <Badge variant="outline">{keyword.category}</Badge>
                          <Badge variant={getOpportunityColor(keyword.opportunity)}>{keyword.opportunity}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{keyword.volume.toLocaleString()} searches/month</span>
                          <span>Difficulty: {keyword.difficulty}%</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            {getTrendIcon(keyword.trend)}
                            <span
                              className={`font-medium ${
                                keyword.change > 0
                                  ? "text-green-600"
                                  : keyword.change < 0
                                    ? "text-red-600"
                                    : "text-gray-600"
                              }`}
                            >
                              {keyword.change > 0 ? "+" : ""}
                              {keyword.change}%
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">vs last month</div>
                        </div>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          Track
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trending Content</CardTitle>
                <CardDescription>Content pieces gaining traction across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentTrends.map((content, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{content.title}</h4>
                          <Badge variant="outline">{content.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{content.engagement.toLocaleString()} engagements</span>
                          <span>{content.shares} shares</span>
                          <span>{content.platform}</span>
                          <Badge variant="secondary" className="text-xs">
                            {content.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            {getTrendIcon(content.trend)}
                            <span
                              className={`font-medium ${
                                content.change > 0
                                  ? "text-green-600"
                                  : content.change < 0
                                    ? "text-red-600"
                                    : "text-gray-600"
                              }`}
                            >
                              {content.change > 0 ? "+" : ""}
                              {content.change}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">new engagements</div>
                        </div>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="industry" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Industry Trends</CardTitle>
                <CardDescription>Emerging trends and their potential impact on your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {industryTrends.map((trend, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-medium">{trend.trend}</h4>
                            <Badge variant={getImpactColor(trend.impact)}>{trend.impact} Impact</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{trend.description}</p>
                          <p className="text-xs text-muted-foreground">Timeline: {trend.timeframe}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{trend.growth}%</div>
                          <div className="text-sm text-muted-foreground">growth</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Relevance to your business</span>
                          <span>{trend.relevance}%</span>
                        </div>
                        <Progress value={trend.relevance} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitor Activity</CardTitle>
                <CardDescription>Recent competitor moves and market changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitorActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{activity.competitor}</h4>
                          <Badge variant="outline">{activity.category}</Badge>
                          <Badge variant={getImpactColor(activity.impact)}>{activity.impact}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{activity.activity}</p>
                        <p className="text-xs text-muted-foreground">{activity.date}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className={`text-sm font-medium ${getSentimentColor(activity.sentiment)}`}>
                          {activity.sentiment === "opportunity" && "Opportunity"}
                          {activity.sentiment === "threat" && "Threat"}
                          {activity.sentiment === "neutral" && "Monitor"}
                        </div>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          Analyze
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Market Share Trends</CardTitle>
                  <CardDescription>Competitive landscape changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Your Position</span>
                      <span className="text-sm text-green-600">+2.3%</span>
                    </div>
                    <Progress value={23} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">MarketingPro</span>
                      <span className="text-sm text-red-600">-1.2%</span>
                    </div>
                    <Progress value={31} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">AutomateHub</span>
                      <span className="text-sm text-green-600">+0.8%</span>
                    </div>
                    <Progress value={28} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Others</span>
                      <span className="text-sm text-gray-600">-1.9%</span>
                    </div>
                    <Progress value={18} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Competitive Alerts</CardTitle>
                  <CardDescription>Important updates to monitor</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2 p-3 border rounded-lg">
                      <TrendingUp className="h-4 w-4 text-green-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Pricing Opportunity</p>
                        <p className="text-xs text-muted-foreground">
                          AutomateHub raised prices by 15% - potential to capture price-sensitive customers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 p-3 border rounded-lg">
                      <Eye className="h-4 w-4 text-blue-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Feature Gap</p>
                        <p className="text-xs text-muted-foreground">
                          MarketingPro launched advanced AI features - consider roadmap acceleration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 p-3 border rounded-lg">
                      <Globe className="h-4 w-4 text-purple-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Market Expansion</p>
                        <p className="text-xs text-muted-foreground">
                          CampaignMaster entering European market - monitor for competitive response
                        </p>
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
