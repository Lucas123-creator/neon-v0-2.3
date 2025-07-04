import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  CreditCard,
  Download,
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  Check,
  AlertTriangle,
  Settings,
  Plus,
} from "lucide-react"

export default function BillingPage() {
  const currentPlan = {
    name: "Professional",
    price: 99,
    billing: "monthly",
    features: [
      "Up to 15 AI Agents",
      "Unlimited Campaigns",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations",
      "Team Collaboration",
    ],
    usage: {
      agents: { current: 12, limit: 15 },
      campaigns: { current: 8, limit: "unlimited" },
      apiCalls: { current: 45000, limit: 100000 },
    },
  }

  const plans = [
    {
      name: "Starter",
      price: 29,
      billing: "monthly",
      description: "Perfect for small businesses getting started",
      features: ["Up to 5 AI Agents", "10 Campaigns", "Basic Analytics", "Email Support"],
      popular: false,
    },
    {
      name: "Professional",
      price: 99,
      billing: "monthly",
      description: "Ideal for growing marketing teams",
      features: [
        "Up to 15 AI Agents",
        "Unlimited Campaigns",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: 299,
      billing: "monthly",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited AI Agents",
        "Unlimited Campaigns",
        "Custom Analytics",
        "Dedicated Support",
        "White-label Options",
        "SLA Guarantee",
      ],
      popular: false,
    },
  ]

  const invoices = [
    {
      id: "INV-2024-001",
      date: "2024-01-01",
      amount: 99.0,
      status: "Paid",
      description: "Professional Plan - January 2024",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-012",
      date: "2023-12-01",
      amount: 99.0,
      status: "Paid",
      description: "Professional Plan - December 2023",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-011",
      date: "2023-11-01",
      amount: 99.0,
      status: "Paid",
      description: "Professional Plan - November 2023",
      downloadUrl: "#",
    },
    {
      id: "INV-2023-010",
      date: "2023-10-01",
      amount: 99.0,
      status: "Paid",
      description: "Professional Plan - October 2023",
      downloadUrl: "#",
    },
  ]

  const paymentMethods = [
    {
      id: 1,
      type: "card",
      brand: "Visa",
      last4: "4242",
      expiryMonth: 12,
      expiryYear: 2025,
      isDefault: true,
    },
    {
      id: 2,
      type: "card",
      brand: "Mastercard",
      last4: "8888",
      expiryMonth: 8,
      expiryYear: 2026,
      isDefault: false,
    },
  ]

  const billingMetrics = [
    {
      title: "Current Spend",
      value: "$99",
      change: "Monthly",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Next Billing",
      value: "Feb 1",
      change: "Auto-renewal",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      title: "Usage This Month",
      value: "75%",
      change: "Of plan limits",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Team Members",
      value: "8",
      change: "Active users",
      icon: Users,
      color: "text-emerald-600",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "default"
      case "Pending":
        return "secondary"
      case "Failed":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Billing" description="Manage your subscription, invoices, and payment methods" />

      <div className="flex-1 space-y-6 p-6">
        {/* Billing Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {billingMetrics.map((metric) => (
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

        <Tabs defaultValue="subscription" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="subscription" className="space-y-6">
            {/* Current Plan */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Current Plan</CardTitle>
                    <CardDescription>You are currently on the {currentPlan.name} plan</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{currentPlan.name}</h3>
                    <p className="text-muted-foreground">
                      ${currentPlan.price}/{currentPlan.billing}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Next billing date</p>
                    <p className="font-medium">February 1, 2024</p>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-3">Plan Features</h4>
                    <ul className="space-y-2">
                      {currentPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Current Usage</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>AI Agents</span>
                          <span>
                            {currentPlan.usage.agents.current}/{currentPlan.usage.agents.limit}
                          </span>
                        </div>
                        <Progress value={(currentPlan.usage.agents.current / currentPlan.usage.agents.limit) * 100} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>API Calls</span>
                          <span>
                            {currentPlan.usage.apiCalls.current.toLocaleString()}/
                            {currentPlan.usage.apiCalls.limit.toLocaleString()}
                          </span>
                        </div>
                        <Progress
                          value={(currentPlan.usage.apiCalls.current / currentPlan.usage.apiCalls.limit) * 100}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Plan
                  </Button>
                  <Button variant="outline" className="bg-transparent">
                    Cancel Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Available Plans */}
            <Card>
              <CardHeader>
                <CardTitle>Available Plans</CardTitle>
                <CardDescription>Upgrade or downgrade your plan anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {plans.map((plan) => (
                    <Card key={plan.name} className={`relative ${plan.popular ? "border-blue-500" : ""}`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-blue-500">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <div className="text-3xl font-bold">
                          ${plan.price}
                          <span className="text-sm font-normal text-muted-foreground">/{plan.billing}</span>
                        </div>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm">
                              <Check className="h-4 w-4 text-green-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          className="w-full"
                          variant={plan.name === currentPlan.name ? "outline" : "default"}
                          disabled={plan.name === currentPlan.name}
                        >
                          {plan.name === currentPlan.name ? "Current Plan" : `Upgrade to ${plan.name}`}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Usage Overview</CardTitle>
                <CardDescription>Monitor your current usage against plan limits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">AI Agents</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold">{currentPlan.usage.agents.current}</span>
                        <span className="text-sm text-muted-foreground">of {currentPlan.usage.agents.limit}</span>
                      </div>
                      <Progress value={(currentPlan.usage.agents.current / currentPlan.usage.agents.limit) * 100} />
                      <p className="text-xs text-muted-foreground mt-2">
                        {currentPlan.usage.agents.limit - currentPlan.usage.agents.current} agents remaining
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">API Calls</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold">
                          {currentPlan.usage.apiCalls.current.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          of {currentPlan.usage.apiCalls.limit.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={(currentPlan.usage.apiCalls.current / currentPlan.usage.apiCalls.limit) * 100} />
                      <p className="text-xs text-muted-foreground mt-2">
                        {(currentPlan.usage.apiCalls.limit - currentPlan.usage.apiCalls.current).toLocaleString()} calls
                        remaining
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Usage Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 border rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Approaching API Limit</p>
                          <p className="text-sm text-muted-foreground">
                            You've used 45% of your monthly API calls. Consider upgrading if you need more.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 border rounded-lg">
                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Agent Usage Normal</p>
                          <p className="text-sm text-muted-foreground">
                            You're using 80% of your agent limit, which is within normal range.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoices" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>Download and manage your invoices</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
                        <TableCell>{invoice.description}</TableCell>
                        <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods and billing information</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">
                            {method.brand} •••• {method.last4}
                          </span>
                          {method.isDefault && <Badge variant="secondary">Default</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Expires {method.expiryMonth}/{method.expiryYear}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {!method.isDefault && (
                        <Button variant="outline" size="sm">
                          Set as Default
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing Address</CardTitle>
                <CardDescription>Update your billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name</label>
                    <p className="text-sm text-muted-foreground">NeonHub Inc.</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tax ID</label>
                    <p className="text-sm text-muted-foreground">12-3456789</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Address</label>
                    <p className="text-sm text-muted-foreground">
                      123 Business Ave
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-sm text-muted-foreground">billing@neonhub.ai</p>
                  </div>
                </div>
                <Button variant="outline" className="bg-transparent">
                  <Settings className="h-4 w-4 mr-2" />
                  Update Billing Info
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
