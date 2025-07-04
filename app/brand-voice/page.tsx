import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Plus,
  Palette,
  FileText,
  BarChart3,
  Settings,
  Edit,
  Copy,
  CheckCircle,
  AlertTriangle,
  Mic,
  Target,
  TrendingUp,
} from "lucide-react"

export default function BrandVoicePage() {
  const brandProfiles = [
    {
      id: 1,
      name: "Professional & Authoritative",
      description: "Formal tone for enterprise communications",
      tone: "Professional",
      personality: ["Authoritative", "Trustworthy", "Expert"],
      usageCount: 45,
      consistency: 92,
      lastUsed: "2 hours ago",
      isDefault: true,
    },
    {
      id: 2,
      name: "Friendly & Approachable",
      description: "Casual tone for social media and blog content",
      tone: "Casual",
      personality: ["Friendly", "Approachable", "Helpful"],
      usageCount: 78,
      consistency: 87,
      lastUsed: "1 day ago",
      isDefault: false,
    },
    {
      id: 3,
      name: "Technical & Precise",
      description: "Technical documentation and product descriptions",
      tone: "Technical",
      personality: ["Precise", "Detailed", "Informative"],
      usageCount: 23,
      consistency: 95,
      lastUsed: "3 days ago",
      isDefault: false,
    },
  ]

  const contentAnalysis = [
    {
      content: "Welcome to our AI-powered marketing platform...",
      type: "Website Copy",
      brandMatch: 94,
      tone: "Professional",
      suggestions: ["Consider adding more personality", "Strengthen call-to-action"],
      status: "excellent",
    },
    {
      content: "Hey there! Ready to supercharge your marketing?",
      type: "Social Media",
      brandMatch: 78,
      tone: "Casual",
      suggestions: ["Align with brand guidelines", "Reduce informal language"],
      status: "good",
    },
    {
      content: "Our advanced algorithms utilize machine learning...",
      type: "Technical Doc",
      brandMatch: 65,
      tone: "Technical",
      suggestions: ["Simplify complex terms", "Add more context"],
      status: "needs-work",
    },
  ]

  const voiceMetrics = [
    {
      title: "Brand Consistency",
      value: "89%",
      change: "+5% this month",
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "Content Analyzed",
      value: "1,247",
      change: "+156 this week",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Voice Profiles",
      value: "3",
      change: "Active profiles",
      icon: Mic,
      color: "text-purple-600",
    },
    {
      title: "Engagement Score",
      value: "8.4/10",
      change: "+0.3 improvement",
      icon: TrendingUp,
      color: "text-emerald-600",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "default"
      case "good":
        return "secondary"
      case "needs-work":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "good":
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      case "needs-work":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Brand Voice" description="Maintain consistent brand voice across all your content" />

      <div className="flex-1 space-y-6 p-6">
        {/* Voice Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {voiceMetrics.map((metric) => (
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

        <Tabs defaultValue="profiles" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="profiles">Voice Profiles</TabsTrigger>
              <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
              <TabsTrigger value="analyzer">Content Analyzer</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Profile
            </Button>
          </div>

          <TabsContent value="profiles" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {brandProfiles.map((profile) => (
                <Card key={profile.id} className="relative">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <CardTitle className="text-lg">{profile.name}</CardTitle>
                          {profile.isDefault && <Badge variant="default">Default</Badge>}
                        </div>
                        <CardDescription>{profile.description}</CardDescription>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm font-medium">Tone</Label>
                        <Badge variant="outline" className="ml-2">
                          {profile.tone}
                        </Badge>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Personality Traits</Label>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {profile.personality.map((trait) => (
                            <Badge key={trait} variant="secondary" className="text-xs">
                              {trait}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Consistency Score</span>
                        <span className="font-medium">{profile.consistency}%</span>
                      </div>
                      <Progress value={profile.consistency} />
                    </div>

                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Used {profile.usageCount} times</span>
                      <span>Last used {profile.lastUsed}</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Copy className="h-4 w-4 mr-2" />
                        Clone
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guidelines" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Voice Guidelines</CardTitle>
                <CardDescription>Define your brand's voice and tone guidelines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand-mission">Brand Mission</Label>
                      <Textarea
                        id="brand-mission"
                        placeholder="Describe your brand's mission and values..."
                        rows={3}
                        defaultValue="To empower businesses with AI-driven marketing automation that delivers measurable results and drives growth."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="target-audience">Target Audience</Label>
                      <Textarea
                        id="target-audience"
                        placeholder="Describe your target audience..."
                        rows={3}
                        defaultValue="Marketing directors, CMOs, and business owners at B2B SaaS companies looking to scale their marketing efforts."
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand-personality">Brand Personality</Label>
                      <Textarea
                        id="brand-personality"
                        placeholder="Describe your brand's personality..."
                        rows={3}
                        defaultValue="Professional yet approachable, innovative, trustworthy, and results-driven. We speak with confidence while remaining humble and helpful."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="communication-style">Communication Style</Label>
                      <Textarea
                        id="communication-style"
                        placeholder="Describe your communication style..."
                        rows={3}
                        defaultValue="Clear, concise, and jargon-free. We use active voice, focus on benefits, and always include actionable insights."
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Voice Characteristics</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label>Formal ← → Casual</Label>
                        <Badge variant="outline">Balanced</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <Label>Serious ← → Playful</Label>
                        <Badge variant="outline">Slightly Serious</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <Label>Respectful ← → Irreverent</Label>
                        <Badge variant="outline">Respectful</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label>Matter-of-fact ← → Enthusiastic</Label>
                        <Badge variant="outline">Enthusiastic</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <Label>Authoritative ← → Humble</Label>
                        <Badge variant="outline">Balanced</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <Label>Dry ← → Humorous</Label>
                        <Badge variant="outline">Slightly Humorous</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Palette className="h-4 w-4 mr-2" />
                  Save Guidelines
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analyzer" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Analyze Content</CardTitle>
                  <CardDescription>Check if your content matches your brand voice</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="content-input">Content to Analyze</Label>
                    <Textarea
                      id="content-input"
                      placeholder="Paste your content here..."
                      rows={6}
                      defaultValue="Transform your marketing strategy with our cutting-edge AI platform. Boost ROI, automate campaigns, and drive unprecedented growth for your business."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content-type">Content Type</Label>
                    <Input id="content-type" placeholder="e.g., Website copy, Email, Social media" />
                  </div>
                  <Button className="w-full">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analyze Content
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analysis Results</CardTitle>
                  <CardDescription>Brand voice consistency score and recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
                    <p className="text-sm text-muted-foreground">Brand Voice Match</p>
                    <Progress value={94} className="mt-2" />
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-medium">Detected Characteristics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Tone</span>
                        <Badge variant="outline">Professional</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Confidence Level</span>
                        <Badge variant="outline">High</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Formality</span>
                        <Badge variant="outline">Balanced</Badge>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="font-medium">Suggestions</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Tone matches brand guidelines</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Good use of action-oriented language</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                        <span>Consider adding more personality</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Content Analysis</CardTitle>
                <CardDescription>Review your recently analyzed content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentAnalysis.map((item, index) => (
                    <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(item.status)}
                          <span className="font-medium">{item.type}</span>
                          <Badge variant="outline">{item.tone}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{item.content}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>Match: {item.brandMatch}%</span>
                          <span>{item.suggestions.length} suggestions</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Badge variant={getStatusColor(item.status)}>{item.brandMatch}%</Badge>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Voice Consistency Trends</CardTitle>
                  <CardDescription>Track your brand voice consistency over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">This Month</span>
                      <span className="text-sm text-muted-foreground">89% avg</span>
                    </div>
                    <Progress value={89} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Last Month</span>
                      <span className="text-sm text-muted-foreground">84% avg</span>
                    </div>
                    <Progress value={84} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3 Months Ago</span>
                      <span className="text-sm text-muted-foreground">78% avg</span>
                    </div>
                    <Progress value={78} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Performance</CardTitle>
                  <CardDescription>How different content types perform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Website Copy</div>
                        <div className="text-sm text-muted-foreground">45 pieces analyzed</div>
                      </div>
                      <Badge>94% match</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Email Campaigns</div>
                        <div className="text-sm text-muted-foreground">78 pieces analyzed</div>
                      </div>
                      <Badge variant="secondary">87% match</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Social Media</div>
                        <div className="text-sm text-muted-foreground">156 pieces analyzed</div>
                      </div>
                      <Badge variant="secondary">82% match</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Blog Posts</div>
                        <div className="text-sm text-muted-foreground">23 pieces analyzed</div>
                      </div>
                      <Badge>91% match</Badge>
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
