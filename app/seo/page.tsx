import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Search,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Globe,
  FileText,
  Zap,
  BarChart3,
  Download,
  Play,
  Settings,
} from "lucide-react"

export default function SEOPage() {
  const seoMetrics = [
    {
      title: "Organic Traffic",
      value: "45.2K",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Keyword Rankings",
      value: "1,247",
      change: "+8.3%",
      icon: Search,
      color: "text-blue-600",
    },
    {
      title: "Pages Indexed",
      value: "892",
      change: "+5.1%",
      icon: Globe,
      color: "text-purple-600",
    },
    {
      title: "SEO Score",
      value: "87/100",
      change: "+3 points",
      icon: BarChart3,
      color: "text-emerald-600",
    },
  ]

  const auditResults = [
    {
      category: "Technical SEO",
      score: 92,
      issues: 3,
      status: "good",
      items: [
        { name: "Page Speed", status: "good", score: 95 },
        { name: "Mobile Friendly", status: "good", score: 98 },
        { name: "SSL Certificate", status: "good", score: 100 },
        { name: "XML Sitemap", status: "warning", score: 75 },
      ],
    },
    {
      category: "On-Page SEO",
      score: 78,
      issues: 8,
      status: "warning",
      items: [
        { name: "Title Tags", status: "good", score: 85 },
        { name: "Meta Descriptions", status: "warning", score: 65 },
        { name: "Header Structure", status: "good", score: 90 },
        { name: "Internal Linking", status: "error", score: 45 },
      ],
    },
    {
      category: "Content Quality",
      score: 85,
      issues: 5,
      status: "good",
      items: [
        { name: "Content Length", status: "good", score: 88 },
        { name: "Keyword Density", status: "good", score: 82 },
        { name: "Readability", status: "warning", score: 70 },
        { name: "Duplicate Content", status: "good", score: 95 },
      ],
    },
  ]

  const topKeywords = [
    { keyword: "AI marketing automation", position: 3, volume: "12K", difficulty: 68, trend: "up" },
    { keyword: "marketing dashboard", position: 7, volume: "8.5K", difficulty: 45, trend: "up" },
    { keyword: "automated campaigns", position: 12, volume: "6.2K", difficulty: 52, trend: "stable" },
    { keyword: "SEO optimization tools", position: 15, volume: "4.8K", difficulty: 38, trend: "down" },
    { keyword: "content marketing AI", position: 8, volume: "9.1K", difficulty: 61, trend: "up" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "default"
      case "warning":
        return "secondary"
      case "error":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="SEO Tools" description="Optimize your website's search engine performance" />

      <div className="flex-1 space-y-6 p-6">
        {/* SEO Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {seoMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">{metric.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="audit" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="audit">SEO Audit</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="meta-generator">Meta Generator</TabsTrigger>
            <TabsTrigger value="content-analyzer">Content Analyzer</TabsTrigger>
          </TabsList>

          <TabsContent value="audit" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">SEO Audit Results</h2>
                <p className="text-muted-foreground">Comprehensive analysis of your website's SEO performance</p>
              </div>
              <Button>
                <Play className="h-4 w-4 mr-2" />
                Run New Audit
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              {auditResults.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                      <Badge variant={getStatusColor(category.status)}>{category.score}/100</Badge>
                    </div>
                    <CardDescription>{category.issues} issues found</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Progress value={category.score} className="w-full" />
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <div key={item.name} className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(item.status)}
                            <span>{item.name}</span>
                          </div>
                          <span className="text-muted-foreground">{item.score}%</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="keywords" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Keyword Rankings</CardTitle>
                    <CardDescription>Track your keyword performance and rankings</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Keyword</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Search Volume</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead>Trend</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topKeywords.map((keyword, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{keyword.keyword}</TableCell>
                        <TableCell>
                          <Badge variant="outline">#{keyword.position}</Badge>
                        </TableCell>
                        <TableCell>{keyword.volume}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={keyword.difficulty} className="w-16" />
                            <span className="text-sm text-muted-foreground">{keyword.difficulty}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            {keyword.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
                            {keyword.trend === "down" && <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />}
                            {keyword.trend === "stable" && <div className="h-4 w-4 bg-gray-400 rounded-full" />}
                            <span className="text-sm capitalize">{keyword.trend}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meta-generator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Meta Tag Generator</CardTitle>
                <CardDescription>Generate optimized meta tags for your pages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="page-url">Page URL</Label>
                    <Input id="page-url" placeholder="https://example.com/page" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target-keyword">Target Keyword</Label>
                    <Input id="target-keyword" placeholder="AI marketing automation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="page-content">Page Content (optional)</Label>
                    <Textarea
                      id="page-content"
                      placeholder="Paste your page content here for AI-powered optimization..."
                      rows={4}
                    />
                  </div>
                </div>

                <Button className="w-full">
                  <Zap className="h-4 w-4 mr-2" />
                  Generate Meta Tags
                </Button>

                <div className="space-y-4 pt-4 border-t">
                  <div className="space-y-2">
                    <Label>Generated Title Tag</Label>
                    <div className="p-3 bg-muted rounded-lg">
                      <code className="text-sm">
                        AI Marketing Automation Platform | Boost Your ROI by 300% | NeonHub
                      </code>
                    </div>
                    <p className="text-xs text-muted-foreground">Length: 68 characters (Optimal)</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Generated Meta Description</Label>
                    <div className="p-3 bg-muted rounded-lg">
                      <code className="text-sm">
                        Transform your marketing with AI-powered automation. Create campaigns, manage agents, and boost
                        ROI with our comprehensive marketing platform. Start your free trial today.
                      </code>
                    </div>
                    <p className="text-xs text-muted-foreground">Length: 156 characters (Optimal)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content-analyzer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content SEO Analyzer</CardTitle>
                <CardDescription>Analyze and optimize your content for search engines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="content-url">Content URL or Text</Label>
                    <Input id="content-url" placeholder="https://example.com/blog-post or paste content" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="focus-keyword">Focus Keyword</Label>
                    <Input id="focus-keyword" placeholder="marketing automation" />
                  </div>
                </div>

                <Button className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Analyze Content
                </Button>

                <div className="grid gap-4 pt-4 border-t">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Content Score</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl font-bold text-green-600">82</div>
                          <div className="flex-1">
                            <Progress value={82} />
                            <p className="text-xs text-muted-foreground mt-1">Good optimization</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Readability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl font-bold text-blue-600">76</div>
                          <div className="flex-1">
                            <Progress value={76} />
                            <p className="text-xs text-muted-foreground mt-1">Easy to read</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Optimization Suggestions</h4>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Focus keyword appears in title</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                        <span>Add focus keyword to meta description</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                        <span>Content is too short - aim for 1500+ words</span>
                      </div>
                      <div className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Good use of header tags (H1, H2, H3)</span>
                      </div>
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
