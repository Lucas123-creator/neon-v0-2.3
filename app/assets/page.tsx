import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Upload,
  Download,
  Share2,
  Folder,
  FileText,
  ImageIcon,
  Video,
  Music,
  Archive,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Copy,
  Star,
  HardDrive,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AssetsPage() {
  const storageMetrics = [
    {
      title: "Total Storage",
      value: "2.4 TB",
      change: "of 5 TB used",
      icon: HardDrive,
      color: "text-blue-600",
    },
    {
      title: "Total Assets",
      value: "12,847",
      change: "+234 this month",
      icon: Archive,
      color: "text-green-600",
    },
    {
      title: "Shared Assets",
      value: "3,421",
      change: "26% of total assets",
      icon: Share2,
      color: "text-purple-600",
    },
    {
      title: "Downloads",
      value: "8,932",
      change: "+15% this month",
      icon: Download,
      color: "text-orange-600",
    },
  ]

  const folders = [
    {
      id: 1,
      name: "Brand Assets",
      itemCount: 156,
      size: "2.3 GB",
      lastModified: "2 days ago",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Campaign Materials",
      itemCount: 89,
      size: "1.8 GB",
      lastModified: "1 day ago",
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "Product Images",
      itemCount: 234,
      size: "3.2 GB",
      lastModified: "3 hours ago",
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "Video Content",
      itemCount: 45,
      size: "8.7 GB",
      lastModified: "1 week ago",
      color: "bg-red-500",
    },
    {
      id: 5,
      name: "Templates",
      itemCount: 67,
      size: "456 MB",
      lastModified: "5 days ago",
      color: "bg-yellow-500",
    },
    {
      id: 6,
      name: "Archive",
      itemCount: 123,
      size: "1.2 GB",
      lastModified: "2 weeks ago",
      color: "bg-gray-500",
    },
  ]

  const recentAssets = [
    {
      id: 1,
      name: "hero-banner-2024.jpg",
      type: "image",
      size: "2.4 MB",
      uploadedBy: "Sarah Johnson",
      uploadedAt: "2 hours ago",
      downloads: 23,
      thumbnail: "/placeholder.svg?height=60&width=60",
      starred: true,
    },
    {
      id: 2,
      name: "product-demo-video.mp4",
      type: "video",
      size: "45.2 MB",
      uploadedBy: "Michael Chen",
      uploadedAt: "1 day ago",
      downloads: 12,
      thumbnail: "/placeholder.svg?height=60&width=60",
      starred: false,
    },
    {
      id: 3,
      name: "brand-guidelines.pdf",
      type: "document",
      size: "3.1 MB",
      uploadedBy: "Emily Rodriguez",
      uploadedAt: "3 days ago",
      downloads: 45,
      thumbnail: "/placeholder.svg?height=60&width=60",
      starred: true,
    },
    {
      id: 4,
      name: "logo-variations.zip",
      type: "archive",
      size: "12.8 MB",
      uploadedBy: "David Kim",
      uploadedAt: "1 week ago",
      downloads: 67,
      thumbnail: "/placeholder.svg?height=60&width=60",
      starred: false,
    },
    {
      id: 5,
      name: "campaign-music.mp3",
      type: "audio",
      size: "5.6 MB",
      uploadedBy: "Lisa Thompson",
      uploadedAt: "2 weeks ago",
      downloads: 8,
      thumbnail: "/placeholder.svg?height=60&width=60",
      starred: false,
    },
  ]

  const popularAssets = [
    {
      id: 1,
      name: "company-logo.svg",
      downloads: 234,
      type: "image",
      size: "45 KB",
    },
    {
      id: 2,
      name: "email-template.html",
      downloads: 189,
      type: "document",
      size: "12 KB",
    },
    {
      id: 3,
      name: "product-showcase.mp4",
      downloads: 156,
      type: "video",
      size: "67 MB",
    },
    {
      id: 4,
      name: "brand-colors.pdf",
      downloads: 134,
      type: "document",
      size: "2.1 MB",
    },
    {
      id: 5,
      name: "social-media-kit.zip",
      downloads: 98,
      type: "archive",
      size: "23 MB",
    },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-5 w-5 text-blue-600" />
      case "video":
        return <Video className="h-5 w-5 text-red-600" />
      case "audio":
        return <Music className="h-5 w-5 text-green-600" />
      case "document":
        return <FileText className="h-5 w-5 text-orange-600" />
      case "archive":
        return <Archive className="h-5 w-5 text-purple-600" />
      default:
        return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case "image":
        return "bg-blue-100 text-blue-700"
      case "video":
        return "bg-red-100 text-red-700"
      case "audio":
        return "bg-green-100 text-green-700"
      case "document":
        return "bg-orange-100 text-orange-700"
      case "archive":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Assets" description="Manage your digital assets and media library" />

      <div className="flex-1 space-y-6 p-6">
        {/* Storage Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {storageMetrics.map((metric) => (
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

        {/* Storage Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Storage Usage</CardTitle>
            <CardDescription>Current storage utilization across different file types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full" style={{ width: "48%" }} />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span>Images (1.2 TB)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span>Videos (800 GB)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <span>Documents (250 GB)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span>Audio (100 GB)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  <span>Other (50 GB)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="folders" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="folders">Folders</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="starred">Starred</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search assets..." className="pl-8 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>

          <TabsContent value="folders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Folders</CardTitle>
                <CardDescription>Organize your assets into folders for better management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {folders.map((folder) => (
                    <div key={folder.id} className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-8 h-8 ${folder.color} rounded-lg flex items-center justify-center`}>
                          <Folder className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{folder.name}</h4>
                          <p className="text-sm text-muted-foreground">{folder.itemCount} items</p>
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
                              Open
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Rename
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Size</span>
                          <span className="font-medium">{folder.size}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Modified</span>
                          <span className="font-medium">{folder.lastModified}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Assets</CardTitle>
                <CardDescription>Recently uploaded and modified assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAssets.map((asset) => (
                    <div key={asset.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0">
                        <img
                          src={asset.thumbnail || "/placeholder.svg"}
                          alt={asset.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          {getFileIcon(asset.type)}
                          <h4 className="font-medium">{asset.name}</h4>
                          {asset.starred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="outline" className={getFileTypeColor(asset.type)}>
                            {asset.type}
                          </Badge>
                          <span>{asset.size}</span>
                          <span>by {asset.uploadedBy}</span>
                          <span>{asset.uploadedAt}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">{asset.downloads}</div>
                        <div className="text-xs text-muted-foreground">downloads</div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Link
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Star className="h-4 w-4 mr-2" />
                            {asset.starred ? "Unstar" : "Star"}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Assets</CardTitle>
                <CardDescription>Most downloaded and shared assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularAssets.map((asset, index) => (
                    <div key={asset.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          {getFileIcon(asset.type)}
                          <h4 className="font-medium">{asset.name}</h4>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="outline" className={getFileTypeColor(asset.type)}>
                            {asset.type}
                          </Badge>
                          <span>{asset.size}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{asset.downloads}</div>
                        <div className="text-xs text-muted-foreground">downloads</div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="starred" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Starred Assets</CardTitle>
                <CardDescription>Your favorite and bookmarked assets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAssets
                    .filter((asset) => asset.starred)
                    .map((asset) => (
                      <div key={asset.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0">
                          <img
                            src={asset.thumbnail || "/placeholder.svg"}
                            alt={asset.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center space-x-2">
                            {getFileIcon(asset.type)}
                            <h4 className="font-medium">{asset.name}</h4>
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <Badge variant="outline" className={getFileTypeColor(asset.type)}>
                              {asset.type}
                            </Badge>
                            <span>{asset.size}</span>
                            <span>by {asset.uploadedBy}</span>
                            <span>{asset.uploadedAt}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium">{asset.downloads}</div>
                          <div className="text-xs text-muted-foreground">downloads</div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              Preview
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Star className="h-4 w-4 mr-2" />
                              Unstar
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))}
                  {recentAssets.filter((asset) => asset.starred).length === 0 && (
                    <div className="text-center py-8">
                      <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No starred assets</h3>
                      <p className="text-muted-foreground">Star your favorite assets to find them quickly</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
