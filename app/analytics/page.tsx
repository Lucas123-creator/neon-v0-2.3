import { DashboardHeader } from "@/components/dashboard-header"
import AnalyticsChartsClient from "@/components/analytics/AnalyticsChartsClient"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart3,
  Users,
  DollarSign,
  Eye,
  Target,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function AnalyticsPage() {
  const kpiMetrics = [
    {
      title: "Total Revenue",
      value: "$127,450",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Website Traffic",
      value: "89.2K",
      change: "+8.3%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-0.2%",
      trend: "down",
      icon: Target,
      color: "text-purple-600",
    },
    {
      title: "Avg. Session Duration",
      value: "4m 32s",
      change: "+15.7%",
      trend: "up",
      icon: Eye,
      color: "text-emerald-600",
    },
  ]

  const campaignPerformance = [
    {
      campaign: "Summer Product Launch",
      impressions: 125000,
      clicks: 3200,
      conversions: 156,
      ctr: 2.56,
      cpa: 28.85,
      roas: 4.2,
      status: "Active",
    },
    {
      campaign: "Brand Awareness Q3",
      impressions: 89000,
      clicks: 1800,
      conversions: 89,
      ctr: 2.02,
      cpa: 40.45,
      roas: 3.1,
      status: "Active",
    },
    {
      campaign: "Email Newsletter Series",
      impressions: 45000,
      clicks: 2100,
      conversions: 234,
      ctr: 4.67,
      cpa: 10.68,
      roas: 8.9,
      status: "Completed",
    },
    {
      campaign: "SEO Content Push",
      impressions: 156000,
      clicks: 4800,
      conversions: 312,
      ctr: 3.08,
      cpa: 14.42,
      roas: 6.5,
      status: "Active",
    },
  ]

  const topPerformingContent = [
    {
      title: "AI Marketing Automation Guide",
      type: "Blog Post",
      views: 12500,
      engagement: 8.4,
      conversions: 89,
      revenue: 4500,
    },
    {
      title: "Marketing Dashboard Demo",
      type: "Video",
      views: 8900,
      engagement: 12.1,
      conversions: 156,
      revenue: 7800,
    },
    {
      title: "Free Marketing Audit Tool",
      type: "Landing Page",
      views: 15600,
      engagement: 6.7,
      conversions: 234,
      revenue: 11700,
    },
    {
      title: "Customer Success Stories",
      type: "Case Study",
      views: 6700,
      engagement: 9.8,
      conversions: 67,
      revenue: 3350,
    },
  ]

  const audienceInsights = [
    { segment: "Enterprise (1000+ employees)", percentage: 35, growth: "+12%" },
    { segment: "Mid-market (100-999 employees)", percentage: 28, growth: "+8%" },
    { segment: "Small business (10-99 employees)", percentage: 22, growth: "+15%" },
    { segment: "Startups (<10 employees)", percentage: 15, growth: "+22%" },
  ]

  const channelPerformance = [
    { channel: "Organic Search", sessions: 45600, conversions: 892, revenue: 44600, cpa: 50.0 },
    { channel: "Paid Search", sessions: 23400, conversions: 567, revenue: 28350, cpa: 50.0 },
    { channel: "Social Media", sessions: 18900, conversions: 234, revenue: 11700, cpa: 50.0 },
    { channel: "Email Marketing", sessions: 12300, conversions: 445, revenue: 22250, cpa: 50.0 },
    { channel: "Direct Traffic", sessions: 8900, conversions: 178, revenue: 8900, cpa: 50.0 },
  ]

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <ArrowUpRight className="h-4 w-4 text-green-500" />
    ) : (
      <ArrowDownRight className="h-4 w-4 text-red-500" />
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "Completed":
        return "secondary"
      case "Paused":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Analytics" description="Comprehensive analytics and performance insights" />

      <div className="flex-1 space-y-6 p-6">
        <AnalyticsChartsClient />
        {/* KPI Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpiMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  {getTrendIcon(metric.trend)}
                  <span>{metric.change} from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="audience">Audience</TabsTrigger>
              <TabsTrigger value="channels">Channels</TabsTrigger>
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

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Monthly revenue growth over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Revenue chart visualization would appear here</p>
                      <p className="text-sm">Integration with charting library needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>Breakdown of traffic by source</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {channelPerformance.slice(0, 4).map((channel) => (
                      <div key={channel.channel} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full" />
                          <span className="text-sm font-medium">{channel.channel}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{channel.sessions.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">sessions</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
                <CardDescription>Key metrics comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Conversion Rate</span>
                      <span>3.24%</span>
                    </div>
                    <Progress value={32.4} />
                    <p className="text-xs text-muted-foreground">Target: 4.0%</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Customer Acquisition</span>
                      <span>892</span>
                    </div>
                    <Progress value={74.3} />
                    <p className="text-xs text-muted-foreground">Target: 1,200</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Revenue Goal</span>
                      <span>$127K</span>
                    </div>
                    <Progress value={84.9} />
                    <p className="text-xs text-muted-foreground">Target: $150K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>Detailed performance metrics for all campaigns</CardDescription>
                  </div>
                  <Link href="/campaigns" className="text-sm text-primary hover:underline">Optimize Campaigns →</Link>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Impressions</TableHead>
                      <TableHead>Clicks</TableHead>
                      <TableHead>CTR</TableHead>
                      <TableHead>Conversions</TableHead>
                      <TableHead>CPA</TableHead>
                      <TableHead>ROAS</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {campaignPerformance.map((campaign) => (
                      <TableRow key={campaign.campaign}>
                        <TableCell className="font-medium">{campaign.campaign}</TableCell>
                        <TableCell>{campaign.impressions.toLocaleString()}</TableCell>
                        <TableCell>{campaign.clicks.toLocaleString()}</TableCell>
                        <TableCell>{campaign.ctr}%</TableCell>
                        <TableCell>{campaign.conversions}</TableCell>
                        <TableCell>${campaign.cpa}</TableCell>
                        <TableCell className="font-medium">{campaign.roas}x</TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Content</CardTitle>
                <CardDescription>Content pieces driving the most engagement and conversions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformingContent.map((content, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{content.title}</h4>
                          <Badge variant="outline">{content.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{content.views.toLocaleString()} views</span>
                          <span>{content.engagement}% engagement</span>
                          <span>{content.conversions} conversions</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-green-600">${content.revenue.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">revenue</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audience" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Segments</CardTitle>
                  <CardDescription>Breakdown by company size</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {audienceInsights.map((segment, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{segment.segment}</span>
                          <div className="flex items-center space-x-2">
                            <span>{segment.percentage}%</span>
                            <Badge variant="secondary" className="text-xs">
                              {segment.growth}
                            </Badge>
                          </div>
                        </div>
                        <Progress value={segment.percentage} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Top performing regions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">North America</div>
                        <div className="text-sm text-muted-foreground">45% of traffic</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">$57K</div>
                        <div className="text-sm text-muted-foreground">revenue</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Europe</div>
                        <div className="text-sm text-muted-foreground">32% of traffic</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">$41K</div>
                        <div className="text-sm text-muted-foreground">revenue</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Asia Pacific</div>
                        <div className="text-sm text-muted-foreground">18% of traffic</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">$23K</div>
                        <div className="text-sm text-muted-foreground">revenue</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Other</div>
                        <div className="text-sm text-muted-foreground">5% of traffic</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">$6K</div>
                        <div className="text-sm text-muted-foreground">revenue</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="channels" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
                <CardDescription>Performance breakdown by marketing channel</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Channel</TableHead>
                      <TableHead>Sessions</TableHead>
                      <TableHead>Conversions</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>CPA</TableHead>
                      <TableHead>Conversion Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {channelPerformance.map((channel) => (
                      <TableRow key={channel.channel}>
                        <TableCell className="font-medium">{channel.channel}</TableCell>
                        <TableCell>{channel.sessions.toLocaleString()}</TableCell>
                        <TableCell>{channel.conversions}</TableCell>
                        <TableCell>${channel.revenue.toLocaleString()}</TableCell>
                        <TableCell>${channel.cpa.toFixed(2)}</TableCell>
                        <TableCell>{((channel.conversions / channel.sessions) * 100).toFixed(2)}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
