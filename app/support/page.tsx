import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  LifeBuoy,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Search,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle,
  Book,
  Video,
  Users,
  Zap,
} from "lucide-react"

export default function SupportPage() {
  const supportMetrics = [
    {
      title: "Response Time",
      value: "< 2 hours",
      change: "Average response",
      icon: Clock,
      color: "text-green-600",
    },
    {
      title: "Resolution Rate",
      value: "98%",
      change: "First contact",
      icon: CheckCircle,
      color: "text-blue-600",
    },
    {
      title: "Active Tickets",
      value: "2",
      change: "Your open tickets",
      icon: AlertCircle,
      color: "text-purple-600",
    },
    {
      title: "Knowledge Base",
      value: "150+",
      change: "Articles available",
      icon: Book,
      color: "text-emerald-600",
    },
  ]

  const faqItems = [
    {
      question: "How do I set up my first AI agent?",
      answer:
        "To set up your first AI agent, navigate to the Agents page and click 'Create New Agent'. Choose your agent type (SEO, Content, Social, etc.), configure the settings, and activate it. Our setup wizard will guide you through each step.",
    },
    {
      question: "What's included in my subscription plan?",
      answer:
        "Your subscription includes access to AI agents, campaign management, analytics, and support. The specific limits depend on your plan tier. Check the Billing page for detailed information about your current plan's features and usage limits.",
    },
    {
      question: "How can I integrate NeonHub with my existing tools?",
      answer:
        "NeonHub offers integrations with popular marketing tools through our API and pre-built connectors. Visit the Settings > Integrations page to connect your tools, or use our REST API for custom integrations.",
    },
    {
      question: "Can I customize the AI agent behavior?",
      answer:
        "Yes! Each AI agent can be customized with specific prompts, brand voice settings, and operational parameters. Go to the agent configuration page to adjust behavior, set custom instructions, and define your brand guidelines.",
    },
    {
      question: "How do I track campaign performance?",
      answer:
        "Campaign performance can be tracked in the Analytics section. You'll find detailed metrics including engagement rates, conversion tracking, ROI analysis, and comparative performance across different campaigns and time periods.",
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer:
        "If you approach your plan limits, you'll receive notifications. If you exceed limits, some features may be temporarily restricted. You can upgrade your plan at any time to increase your limits and restore full functionality.",
    },
    {
      question: "How secure is my data with NeonHub?",
      answer:
        "We take security seriously. All data is encrypted in transit and at rest, we're SOC 2 compliant, and we follow industry best practices for data protection. Your data is never shared with third parties without your explicit consent.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export your data at any time. Use the export features in each section (campaigns, analytics, etc.) or contact support for bulk data exports. We support various formats including CSV, JSON, and PDF reports.",
    },
  ]

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      availability: "24/7",
      responseTime: "< 5 minutes",
      action: "Start Chat",
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      availability: "24/7",
      responseTime: "< 2 hours",
      action: "Send Email",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      availability: "Mon-Fri 9AM-6PM PST",
      responseTime: "Immediate",
      action: "Call Now",
    },
    {
      title: "Knowledge Base",
      description: "Browse our comprehensive guides",
      icon: Book,
      availability: "Always available",
      responseTime: "Self-service",
      action: "Browse Articles",
    },
  ]

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete walkthrough for new users",
      type: "Guide",
      icon: Book,
      link: "#",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video instructions",
      type: "Video",
      icon: Video,
      link: "#",
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      type: "Documentation",
      icon: FileText,
      link: "#",
    },
    {
      title: "Community Forum",
      description: "Connect with other NeonHub users",
      type: "Community",
      icon: Users,
      link: "#",
    },
    {
      title: "Best Practices",
      description: "Tips and tricks for optimal results",
      type: "Guide",
      icon: Zap,
      link: "#",
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      type: "Guide",
      icon: LifeBuoy,
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Support" description="Get help and find answers to your questions" />

      <div className="flex-1 space-y-6 p-6">
        {/* Support Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {supportMetrics.map((metric) => (
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

        <Tabs defaultValue="help" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="help">Get Help</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="help" className="space-y-6">
            {/* Quick Search */}
            <Card>
              <CardHeader>
                <CardTitle>How can we help you?</CardTitle>
                <CardDescription>Search our knowledge base or choose a support channel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search for help articles, guides, or common issues..." className="pl-10" />
                </div>
              </CardContent>
            </Card>

            {/* Support Channels */}
            <div className="grid gap-6 md:grid-cols-2">
              {supportChannels.map((channel) => (
                <Card key={channel.title}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <channel.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{channel.title}</CardTitle>
                        <CardDescription>{channel.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Availability</p>
                        <p className="font-medium">{channel.availability}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Response Time</p>
                        <p className="font-medium">{channel.responseTime}</p>
                      </div>
                    </div>
                    <Button className="w-full">{channel.action}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Submit a Support Ticket</CardTitle>
                  <CardDescription>Describe your issue and we'll get back to you quickly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Brief description of your issue" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Low - General question</option>
                      <option>Medium - Feature request</option>
                      <option>High - Bug or issue</option>
                      <option>Critical - Service down</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide as much detail as possible about your issue..."
                      rows={6}
                    />
                  </div>
                  <Button className="w-full">
                    <LifeBuoy className="h-4 w-4 mr-2" />
                    Submit Ticket
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Other ways to reach our support team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">support@neonhub.ai</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-sm text-muted-foreground">Available 24/7 in-app</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Business Hours</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      For urgent issues outside business hours, please use our live chat or email support for fastest
                      response.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Help Resources</CardTitle>
                <CardDescription>Guides, tutorials, and documentation to help you succeed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {resources.map((resource) => (
                    <Card key={resource.title} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-muted rounded-lg">
                              <resource.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <CardTitle className="text-base">{resource.title}</CardTitle>
                              <Badge variant="outline" className="mt-1">
                                {resource.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <CardDescription>{resource.description}</CardDescription>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Resource
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
