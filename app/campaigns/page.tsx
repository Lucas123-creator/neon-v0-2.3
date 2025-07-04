import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Copy,
  Archive,
  Play,
  Pause,
  TrendingUp,
  DollarSign,
  Target,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function CampaignsPage() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Product Launch",
      type: "Product Launch",
      status: "Active",
      progress: 75,
      budget: "$5,000",
      spent: "$3,750",
      impressions: "125K",
      clicks: "3.2K",
      conversions: 156,
      ctr: "2.56%",
      startDate: "2024-06-01",
      endDate: "2024-07-31",
    },
    {
      id: 2,
      name: "Brand Awareness Q3",
      type: "Brand Awareness",
      status: "Active",
      progress: 45,
      budget: "$8,000",
      spent: "$3,600",
      impressions: "89K",
      clicks: "1.8K",
      conversions: 89,
      ctr: "2.02%",
      startDate: "2024-07-01",
      endDate: "2024-09-30",
    },
    {
      id: 3,
      name: "Email Newsletter Series",
      type: "Email Marketing",
      status: "Completed",
      progress: 100,
      budget: "$2,500",
      spent: "$2,500",
      impressions: "45K",
      clicks: "2.1K",
      conversions: 234,
      ctr: "4.67%",
      startDate: "2024-05-01",
      endDate: "2024-06-30",
    },
    {
      id: 4,
      name: "Social Media Boost",
      type: "Social Media",
      status: "Paused",
      progress: 30,
      budget: "$3,000",
      spent: "$900",
      impressions: "67K",
      clicks: "1.2K",
      conversions: 45,
      ctr: "1.79%",
      startDate: "2024-06-15",
      endDate: "2024-08-15",
    },
    {
      id: 5,
      name: "SEO Content Push",
      type: "SEO",
      status: "Active",
      progress: 60,
      budget: "$4,500",
      spent: "$2,700",
      impressions: "156K",
      clicks: "4.8K",
      conversions: 312,
      ctr: "3.08%",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "default"
      case "Paused":
        return "secondary"
      case "Completed":
        return "outline"
      default:
        return "secondary"
    }
  }

  const totalMetrics = {
    totalBudget: campaigns.reduce((sum, c) => sum + Number.parseFloat(c.budget.replace("$", "").replace(",", "")), 0),
    totalSpent: campaigns.reduce((sum, c) => sum + Number.parseFloat(c.spent.replace("$", "").replace(",", "")), 0),
    totalImpressions: campaigns.reduce((sum, c) => sum + Number.parseFloat(c.impressions.replace("K", "")) * 1000, 0),
    totalConversions: campaigns.reduce((sum, c) => sum + c.conversions, 0),
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Campaigns" description="Manage and monitor your marketing campaigns" />

      <div className="flex-1 space-y-6 p-6">
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalMetrics.totalBudget.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">${totalMetrics.totalSpent.toLocaleString()} spent</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round(totalMetrics.totalImpressions / 1000)}K</div>
              <p className="text-xs text-muted-foreground">Across all campaigns</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Conversions</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMetrics.totalConversions}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{campaigns.filter((c) => c.status === "Active").length}</div>
              <p className="text-xs text-muted-foreground">Out of {campaigns.length} total</p>
            </CardContent>
          </Card>
        </div>

        {/* Campaigns Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Campaigns</CardTitle>
                <CardDescription>Manage your marketing campaigns and track their performance</CardDescription>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>Conversions</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{campaign.name}</div>
                        <div className="text-sm text-muted-foreground">{campaign.type}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={campaign.progress} className="w-16" />
                        <span className="text-sm text-muted-foreground">{campaign.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{campaign.budget}</div>
                        <div className="text-sm text-muted-foreground">{campaign.spent} spent</div>
                      </div>
                    </TableCell>
                    <TableCell>{campaign.impressions}</TableCell>
                    <TableCell>{campaign.conversions}</TableCell>
                    <TableCell>{campaign.ctr}</TableCell>
                    <TableCell className="text-right">
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
                            Edit Campaign
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="h-4 w-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          {campaign.status === "Active" ? (
                            <DropdownMenuItem>
                              <Pause className="h-4 w-4 mr-2" />
                              Pause
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <Play className="h-4 w-4 mr-2" />
                              Resume
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem>
                            <Archive className="h-4 w-4 mr-2" />
                            Archive
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
