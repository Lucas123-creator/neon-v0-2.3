"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Save, Key, Trash2, Plus, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false)

  const apiKeys = [
    {
      id: 1,
      name: "Production API Key",
      key: "sk-proj-abc123...xyz789",
      created: "2024-01-15",
      lastUsed: "2 hours ago",
      status: "Active",
    },
    {
      id: 2,
      name: "Development API Key",
      key: "sk-dev-def456...uvw012",
      created: "2024-02-01",
      lastUsed: "1 day ago",
      status: "Active",
    },
  ]

  const promptTemplates = [
    {
      id: 1,
      name: "SEO Content Generator",
      description: "Template for generating SEO-optimized content",
      category: "SEO",
      lastModified: "3 days ago",
    },
    {
      id: 2,
      name: "Social Media Post",
      description: "Template for creating engaging social media posts",
      category: "Social",
      lastModified: "1 week ago",
    },
    {
      id: 3,
      name: "Email Campaign",
      description: "Template for email marketing campaigns",
      category: "Email",
      lastModified: "2 weeks ago",
    },
  ]

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Settings" description="Manage your account settings and preferences" />

      <div className="flex-1 space-y-6 p-6">
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="api-keys">API Keys</TabsTrigger>
            <TabsTrigger value="prompts">Prompts</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Manage your general account settings and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input id="company-name" defaultValue="NeonHub Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://neonhub.ai" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Company Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="AI-powered marketing automation platform helping businesses scale their marketing efforts."
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input id="timezone" defaultValue="UTC-8 (Pacific Time)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Input id="language" defaultValue="English (US)" />
                  </div>
                </div>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api-keys" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>API Keys</CardTitle>
                    <CardDescription>Manage your API keys for integrating with external services</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Key
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{apiKey.name}</h4>
                        <Badge variant="outline">{apiKey.status}</Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span className="font-mono">{showApiKey ? apiKey.key : apiKey.key.replace(/./g, "•")}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Created {apiKey.created} • Last used {apiKey.lastUsed}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Key className="h-4 w-4 mr-2" />
                        Regenerate
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prompts" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Prompt Templates</CardTitle>
                    <CardDescription>Manage your AI prompt templates for consistent results</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Template
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {promptTemplates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{template.name}</h4>
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                      <p className="text-xs text-muted-foreground">Last modified {template.lastModified}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure how you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive email updates about your campaigns and agents
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Campaign Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when campaigns start, pause, or complete
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Agent Status Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive updates when AI agents encounter issues</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">Get weekly performance summaries via email</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize the look and feel of your dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Compact Mode</Label>
                      <p className="text-sm text-muted-foreground">Use a more compact layout to fit more content</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Sidebar Auto-collapse</Label>
                      <p className="text-sm text-muted-foreground">Automatically collapse sidebar on smaller screens</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Appearance
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Manage your personal account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Johnson" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="alex@neonhub.ai" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Update Account
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600">Danger Zone</CardTitle>
                <CardDescription>Irreversible and destructive actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-red-600">Delete Account</h4>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
