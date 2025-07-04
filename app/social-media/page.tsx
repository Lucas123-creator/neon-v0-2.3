import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Plus,
  Calendar,
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Edit,
  MoreHorizontal,
  ImageIcon,
  Video,
  Link,
  Clock,
  Send,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function SocialMediaPage() {
  const socialMetrics = [
    {
      title: "Total Followers",
      value: "45.2K",
      change: "+2.3K this month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Engagement Rate",
      value: "4.8%",
      change: "+0.5% vs last month",
      icon: Heart,
      color: "text-red-600",
    },
    {
      title: "Posts This Month",
      value: "127",
      change: "Across all platforms",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Reach",
      value: "892K",
      change: "+12% this week",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const platforms = [
    {
      name: "LinkedIn",
      followers: "18.5K",
      engagement: "6.2%",
      posts: 45,
      reach: "234K",
      color: "bg-blue-600",
      icon: "💼",
    },
    {
      name: "Twitter",
      followers: "12.8K",
      engagement: "3.4%",
      posts: 67,
      reach: "189K",
      color: "bg-sky-500",
      icon: "🐦",
    },
    {
      name: "Instagram",
      followers: "8.9K",
      engagement: "7.1%",
      posts: 23,
      reach: "156K",
      color: "bg-pink-600",
      icon: "📷",
    },
    {
      name: "Facebook",
      followers: "5.0K",
      engagement: "2.8%",
      posts: 18,
      reach: "89K",
      color: "bg-blue-700",
      icon: "👥",
    },
  ]

  const scheduledPosts = [
    {
      id: 1,
      content:
        "🚀 Exciting news! Our new AI marketing automation features are now live. See how they can transform your campaigns...",
      platform: "LinkedIn",
      scheduledTime: "Today, 2:00 PM",
      status: "Scheduled",
      type: "text",
      engagement: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      content: "Check out our latest customer success story! 📈 300% ROI increase in just 3 months. #MarketingSuccess",
      platform: "Twitter",
      scheduledTime: "Today, 4:30 PM",
      status: "Scheduled",
      type: "image",
      engagement: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      content: "Behind the scenes: How our AI agents work together to optimize your marketing campaigns 24/7 ⚡",
      platform: "Instagram",
      scheduledTime: "Tomorrow, 10:00 AM",
      status: "Scheduled",
      type: "video",
      engagement: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      content: "Join our upcoming webinar: 'Marketing Automation Best Practices' - Register now! 🎯",
      platform: "Facebook",
      scheduledTime: "Tomorrow, 3:00 PM",
      status: "Scheduled",
      type: "link",
      engagement: null,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const recentPosts = [
    {
      id: 1,
      content: "AI is revolutionizing marketing automation. Here's what you need to know about the latest trends...",
      platform: "LinkedIn",
      publishedTime: "2 hours ago",
      status: "Published",
      type: "text",
      engagement: {
        likes: 156,
        comments: 23,
        shares: 45,
        views: 2340,
      },
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      content: "Customer spotlight: How @TechCorp increased their conversion rate by 85% using our platform 🎉",
      platform: "Twitter",
      publishedTime: "4 hours ago",
      status: "Published",
      type: "image",
      engagement: {
        likes: 89,
        comments: 12,
        shares: 34,
        views: 1890,
      },
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      content: "Monday motivation: Your marketing campaigns working while you sleep ✨ #MarketingAutomation",
      platform: "Instagram",
      publishedTime: "1 day ago",
      status: "Published",
      type: "image",
      engagement: {
        likes: 234,
        comments: 18,
        shares: 67,
        views: 3450,
      },
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const contentIdeas = [
    {
      title: "AI Marketing Trends 2024",
      description: "Share insights about emerging AI trends in marketing",
      platform: "LinkedIn",
      type: "Article",
      priority: "High",
    },
    {
      title: "Customer Success Video",
      description: "Feature a customer testimonial about ROI improvements",
      platform: "Instagram",
      type: "Video",
      priority: "Medium",
    },
    {
      title: "Behind the Scenes",
      description: "Show the team working on new features",
      platform: "Twitter",
      type: "Image",
      priority: "Low",
    },
    {
      title: "Webinar Promotion",
      description: "Promote upcoming marketing automation webinar",
      platform: "Facebook",
      type: "Event",
      priority: "High",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "default"
      case "Scheduled":
        return "secondary"
      case "Draft":
        return "outline"
      default:
        return "secondary"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive"
      case "Medium":
        return "secondary"
      case "Low":
        return "outline"
      default:
        return "outline"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "link":
        return <Link className="h-4 w-4" />
      default:
        return <MessageCircle className="h-4 w-4" />
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "LinkedIn":
        return "bg-blue-600"
      case "Twitter":
        return "bg-sky-500"
      case "Instagram":
        return "bg-pink-600"
      case "Facebook":
        return "bg-blue-700"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Social Media" description="Manage your social media presence and content strategy" />

      <div className="flex-1 space-y-6 p-6">
        {/* Social Media Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {socialMetrics.map((metric) => (
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

        {/* Platform Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
            <CardDescription>Overview of your social media platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {platforms.map((platform) => (
                <div key={platform.name} className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center text-white text-sm`}
                    >
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{platform.name}</h4>
                      <p className="text-sm text-muted-foreground">{platform.followers} followers</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Engagement</span>
                      <span className="font-medium">{platform.engagement}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Posts</span>
                      <span className="font-medium">{platform.posts}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Reach</span>
                      <span className="font-medium">{platform.reach}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="schedule" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="schedule">Scheduled</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="compose">Compose</TabsTrigger>
              <TabsTrigger value="ideas">Content Ideas</TabsTrigger>
            </TabsList>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </div>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Posts</CardTitle>
                <CardDescription>Posts scheduled for publication across your social media platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledPosts.map((post) => (
                    <div key={post.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 ${getPlatformColor(post.platform)} rounded-full`} />
                          <span className="font-medium">{post.platform}</span>
                          <Badge variant={getStatusColor(post.status)}>{post.status}</Badge>
                          {getTypeIcon(post.type)}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.scheduledTime}</span>
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
                            Preview
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Send className="h-4 w-4 mr-2" />
                            Post Now
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="published" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Published Posts</CardTitle>
                <CardDescription>Recent posts and their performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 ${getPlatformColor(post.platform)} rounded-full`} />
                          <span className="font-medium">{post.platform}</span>
                          <Badge variant={getStatusColor(post.status)}>{post.status}</Badge>
                          {getTypeIcon(post.type)}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{post.publishedTime}</span>
                          {post.engagement && (
                            <>
                              <div className="flex items-center space-x-1">
                                <Heart className="h-3 w-3" />
                                <span>{post.engagement.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="h-3 w-3" />
                                <span>{post.engagement.comments}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Share2 className="h-3 w-3" />
                                <span>{post.engagement.shares}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{post.engagement.views}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        View Analytics
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compose" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compose New Post</CardTitle>
                <CardDescription>Create and schedule content for your social media platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Platforms</label>
                    <div className="flex space-x-2">
                      {platforms.map((platform) => (
                        <Button key={platform.name} variant="outline" size="sm" className="bg-transparent">
                          <div className={`w-4 h-4 ${platform.color} rounded mr-2`} />
                          {platform.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Content</label>
                    <Textarea placeholder="What's happening? Share your thoughts..." rows={4} className="resize-none" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <ImageIcon className="h-4 w-4 mr-2" />
                        Add Image
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Video className="h-4 w-4 mr-2" />
                        Add Video
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Link className="h-4 w-4 mr-2" />
                        Add Link
                      </Button>
                    </div>
                    <div className="text-sm text-muted-foreground">0/280 characters</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="bg-transparent">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule
                    </Button>
                    <Button>
                      <Send className="h-4 w-4 mr-2" />
                      Post Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ideas" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Ideas</CardTitle>
                <CardDescription>AI-generated content suggestions based on your audience and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentIdeas.map((idea, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{idea.title}</h4>
                          <Badge variant="outline">{idea.type}</Badge>
                          <Badge variant={getPriorityColor(idea.priority)}>{idea.priority}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{idea.description}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <div className={`w-2 h-2 ${getPlatformColor(idea.platform)} rounded-full`} />
                          <span>Suggested for {idea.platform}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Edit className="h-4 w-4 mr-2" />
                          Use Idea
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Calendar</CardTitle>
                <CardDescription>Upcoming content schedule and posting frequency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-7">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="text-center">
                        <div className="text-sm font-medium mb-2">{day}</div>
                        <div className="space-y-1">
                          <div className="w-full h-8 bg-blue-100 rounded text-xs flex items-center justify-center">
                            LinkedIn
                          </div>
                          {day === "Wed" && (
                            <div className="w-full h-8 bg-pink-100 rounded text-xs flex items-center justify-center">
                              Instagram
                            </div>
                          )}
                          {day === "Fri" && (
                            <div className="w-full h-8 bg-sky-100 rounded text-xs flex items-center justify-center">
                              Twitter
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
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
