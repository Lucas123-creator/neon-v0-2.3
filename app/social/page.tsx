"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Share,
  Users,
  ImageIcon,
  Video,
  FileText,
  Send,
  Zap,
  Eye,
  ThumbsUp,
  Star,
} from "lucide-react"

const platforms = [
  { name: "LinkedIn", icon: "💼", color: "bg-blue-600", followers: "12.5K", engagement: "4.2%" },
  { name: "Twitter", icon: "🐦", color: "bg-sky-500", followers: "8.3K", engagement: "3.8%" },
  { name: "Instagram", icon: "📷", color: "bg-pink-500", followers: "15.2K", engagement: "5.1%" },
  { name: "Facebook", icon: "👥", color: "bg-blue-700", followers: "9.8K", engagement: "2.9%" },
]

const scheduledPosts = [
  {
    id: 1,
    platform: "LinkedIn",
    content: "Excited to share our latest AI marketing insights! 🚀",
    scheduledFor: "Today, 2:00 PM",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
  {
    id: 2,
    platform: "Twitter",
    content: "The future of marketing is here with AI-powered automation #MarketingTech",
    scheduledFor: "Tomorrow, 10:00 AM",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
  {
    id: 3,
    platform: "Instagram",
    content: "Behind the scenes at NeonHub HQ 📸",
    scheduledFor: "Dec 8, 3:00 PM",
    status: "draft",
    engagement: { likes: 0, comments: 0, shares: 0 },
  },
]

const aiContentIdeas = [
  {
    id: 1,
    title: "AI Marketing Trends 2024",
    description: "Share insights about emerging AI trends in marketing automation",
    platform: "LinkedIn",
    engagementScore: 92,
    priority: "high",
  },
  {
    id: 2,
    title: "Customer Success Story",
    description: "Highlight how a client achieved 300% ROI with our platform",
    platform: "Twitter",
    engagementScore: 87,
    priority: "high",
  },
  {
    id: 3,
    title: "Team Spotlight",
    description: "Feature your AI development team and their innovations",
    platform: "Instagram",
    engagementScore: 78,
    priority: "medium",
  },
  {
    id: 4,
    title: "Industry Report",
    description: "Share key findings from the latest marketing automation report",
    platform: "LinkedIn",
    engagementScore: 85,
    priority: "high",
  },
]

const recentPosts = [
  {
    id: 1,
    platform: "LinkedIn",
    content: "Just launched our new AI-powered campaign optimizer! 🎯",
    timestamp: "2 hours ago",
    engagement: { likes: 45, comments: 12, shares: 8 },
    reach: "2.3K",
  },
  {
    id: 2,
    platform: "Twitter",
    content: "Marketing automation just got smarter with our latest update",
    timestamp: "4 hours ago",
    engagement: { likes: 23, comments: 5, shares: 12 },
    reach: "1.8K",
  },
  {
    id: 3,
    platform: "Instagram",
    content: "Office vibes at NeonHub 🌟",
    timestamp: "1 day ago",
    engagement: { likes: 89, comments: 15, shares: 6 },
    reach: "3.1K",
  },
]

export default function SocialMediaPage() {
  const [newPost, setNewPost] = useState("")
  const [selectedPlatform, setSelectedPlatform] = useState("LinkedIn")

  return (
    <div className="space-y-6">
      <DashboardHeader title="Social Media" description="Manage your social media presence across all platforms" />

      {/* Platform Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {platforms.map((platform) => (
          <Card key={platform.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <span className="text-lg">{platform.icon}</span>
                {platform.name}
              </CardTitle>
              <div className={`h-2 w-2 rounded-full ${platform.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platform.followers}</div>
              <p className="text-xs text-muted-foreground">{platform.engagement} engagement rate</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="composer" className="space-y-4">
        <TabsList>
          <TabsTrigger value="composer">Content Composer</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Posts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="ai-ideas">AI Ideas</TabsTrigger>
        </TabsList>

        <TabsContent value="composer" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Create New Post
              </CardTitle>
              <CardDescription>Compose and schedule content across all your social platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {platforms.map((platform) => (
                      <SelectItem key={platform.name} value={platform.name}>
                        <div className="flex items-center gap-2">
                          <span>{platform.icon}</span>
                          {platform.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="What's on your mind?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[120px]"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{newPost.length}/280 characters</span>
                  <span>AI Enhancement Available</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Image
                </Button>
                <Button variant="outline" size="sm">
                  <Video className="h-4 w-4 mr-2" />
                  Video
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Document
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm">
                    <Zap className="h-4 w-4 mr-2" />
                    AI Enhance
                  </Button>
                </div>
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Post Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Scheduled Posts
              </CardTitle>
              <CardDescription>Manage your upcoming social media posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledPosts.map((post) => (
                  <div key={post.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{post.platform}</Badge>
                        <Badge variant={post.status === "scheduled" ? "default" : "secondary"}>{post.status}</Badge>
                      </div>
                      <p className="text-sm">{post.content}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.scheduledFor}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47.2K</div>
                <p className="text-xs text-muted-foreground">+12% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement</CardTitle>
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.1%</div>
                <p className="text-xs text-muted-foreground">+0.3% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Followers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+234</div>
                <p className="text-xs text-muted-foreground">+18% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Best Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2-4 PM</div>
                <p className="text-xs text-muted-foreground">Peak engagement window</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Posts Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{post.platform}</Badge>
                        <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                      </div>
                      <p className="text-sm">{post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {post.engagement.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {post.engagement.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share className="h-3 w-3" />
                          {post.engagement.shares}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.reach}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-ideas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                AI Content Ideas
              </CardTitle>
              <CardDescription>AI-generated content suggestions based on your audience and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiContentIdeas.map((idea) => (
                  <div key={idea.id} className="flex items-start justify-between p-4 border rounded-lg">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{idea.title}</h4>
                        <Badge variant={idea.priority === "high" ? "default" : "secondary"}>{idea.priority}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{idea.description}</p>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{idea.platform}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-xs">{idea.engagementScore}% predicted engagement</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Use Idea
                      </Button>
                      <Button variant="outline" size="sm">
                        Customize
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
