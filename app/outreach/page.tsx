import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import {
  Plus,
  Send,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Edit,
  Copy,
  MoreHorizontal,
  Download,
  Mail,
  Phone,
  Calendar,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function OutreachPage() {
  const proposals = [
    {
      id: 1,
      title: "Enterprise Marketing Automation Package",
      client: "TechCorp Solutions",
      status: "Sent",
      value: "$45,000",
      sentDate: "2024-01-15",
      responseRate: 85,
      followUps: 2,
      type: "Proposal",
    },
    {
      id: 2,
      title: "Social Media Management Suite",
      client: "StartupXYZ",
      status: "Draft",
      value: "$12,500",
      sentDate: null,
      responseRate: 0,
      followUps: 0,
      type: "Proposal",
    },
    {
      id: 3,
      title: "AI Content Creation Service",
      client: "MediaGroup Inc",
      status: "Accepted",
      value: "$28,000",
      sentDate: "2024-01-10",
      responseRate: 100,
      followUps: 1,
      type: "Offer Sheet",
    },
    {
      id: 4,
      title: "SEO Optimization Campaign",
      client: "E-commerce Plus",
      status: "Under Review",
      value: "$18,750",
      sentDate: "2024-01-18",
      responseRate: 60,
      followUps: 3,
      type: "Proposal",
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Enterprise Proposal Template",
      description: "Comprehensive template for large enterprise clients",
      category: "Proposal",
      uses: 24,
      conversionRate: "68%",
    },
    {
      id: 2,
      name: "Startup Offer Sheet",
      description: "Streamlined offer sheet for startup clients",
      category: "Offer Sheet",
      uses: 18,
      conversionRate: "72%",
    },
    {
      id: 3,
      name: "Follow-up Email Series",
      description: "Automated follow-up sequence for proposals",
      category: "Follow-up",
      uses: 45,
      conversionRate: "45%",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "default"
      case "Sent":
        return "secondary"
      case "Under Review":
        return "outline"
      case "Draft":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const totalMetrics = {
    totalValue: proposals.reduce((sum, p) => sum + Number.parseFloat(p.value.replace("$", "").replace(",", "")), 0),
    avgResponseRate: Math.round(
      proposals.filter((p) => p.responseRate > 0).reduce((sum, p) => sum + p.responseRate, 0) /
        proposals.filter((p) => p.responseRate > 0).length,
    ),
    acceptedProposals: proposals.filter((p) => p.status === "Accepted").length,
    totalProposals: proposals.length,
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Outreach" description="Manage proposals, offer sheets, and client outreach campaigns" />

      <div className="flex-1 space-y-6 p-6">
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pipeline Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalMetrics.totalValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across {totalMetrics.totalProposals} proposals</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMetrics.avgResponseRate}%</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accepted Proposals</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMetrics.acceptedProposals}</div>
              <p className="text-xs text-muted-foreground">
                {Math.round((totalMetrics.acceptedProposals / totalMetrics.totalProposals) * 100)}% conversion rate
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Outreach</CardTitle>
              <Send className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{proposals.filter((p) => p.status === "Sent").length}</div>
              <p className="text-xs text-muted-foreground">Awaiting responses</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="proposals" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="proposals">Proposals & Offers</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Proposal
            </Button>
          </div>

          <TabsContent value="proposals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Proposals & Offer Sheets</CardTitle>
                <CardDescription>Track and manage your client proposals and offer sheets</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Proposal</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Response Rate</TableHead>
                      <TableHead>Follow-ups</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {proposals.map((proposal) => (
                      <TableRow key={proposal.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{proposal.title}</div>
                            <div className="text-sm text-muted-foreground flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {proposal.type}
                              </Badge>
                              {proposal.sentDate && <span>Sent {proposal.sentDate}</span>}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{proposal.client}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(proposal.status)}>{proposal.status}</Badge>
                        </TableCell>
                        <TableCell className="font-medium">{proposal.value}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={proposal.responseRate} className="w-16" />
                            <span className="text-sm text-muted-foreground">{proposal.responseRate}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{proposal.followUps}</Badge>
                        </TableCell>
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
                                Edit Proposal
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Copy className="h-4 w-4 mr-2" />
                                Duplicate
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Send className="h-4 w-4 mr-2" />
                                Send Follow-up
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                Export PDF
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
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <Card key={template.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {template.category}
                        </Badge>
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-medium text-green-600">{template.conversionRate}</div>
                        <div className="text-muted-foreground">conversion</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{template.description}</CardDescription>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Used {template.uses} times</span>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Copy className="h-4 w-4 mr-2" />
                        Use Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Outreach Performance</CardTitle>
                  <CardDescription>Track your outreach success metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Email Open Rate</span>
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                    <Progress value={78} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Response Rate</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Meeting Conversion</span>
                      <span className="text-sm text-muted-foreground">32%</span>
                    </div>
                    <Progress value={32} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Proposal Acceptance</span>
                      <span className="text-sm text-muted-foreground">68%</span>
                    </div>
                    <Progress value={68} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Communication Channels</CardTitle>
                  <CardDescription>Effectiveness by outreach method</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-muted-foreground">Primary channel</div>
                        </div>
                      </div>
                      <Badge>78% success</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-500" />
                        <div>
                          <div className="font-medium">Phone</div>
                          <div className="text-sm text-muted-foreground">Follow-up calls</div>
                        </div>
                      </div>
                      <Badge>85% success</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-purple-500" />
                        <div>
                          <div className="font-medium">Meetings</div>
                          <div className="text-sm text-muted-foreground">Direct meetings</div>
                        </div>
                      </div>
                      <Badge>92% success</Badge>
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
