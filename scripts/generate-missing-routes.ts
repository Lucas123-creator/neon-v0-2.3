#!/usr/bin/env tsx

/**
 * Auto-generate missing route components based on the expected NeonHub structure
 */

import fs from "fs"
import path from "path"

interface RouteTemplate {
  path: string
  name: string
  description: string
  features: string[]
  template: string
}

const routeTemplates: RouteTemplate[] = [
  {
    path: "/outreach",
    name: "Outreach",
    description: "Manage proposals, offer sheets, and outreach analytics",
    features: ["proposals", "offer-sheets", "analytics"],
    template: "outreach",
  },
  {
    path: "/seo",
    name: "SEO Tools",
    description: "SEO optimization tools and analytics",
    features: ["meta-generator", "analyzer", "audit"],
    template: "seo",
  },
  {
    path: "/brand-voice",
    name: "Brand Voice",
    description: "Manage brand voice profiles and guidelines",
    features: ["profiles", "guidelines", "analysis"],
    template: "brand-voice",
  },
  {
    path: "/billing",
    name: "Billing",
    description: "Subscription management and billing",
    features: ["subscription", "invoices", "payment-methods"],
    template: "billing",
  },
  {
    path: "/support",
    name: "Support",
    description: "Help center and support resources",
    features: ["faq", "contact", "troubleshooting"],
    template: "support",
  },
  {
    path: "/analytics",
    name: "Analytics",
    description: "Comprehensive analytics and reporting",
    features: ["charts", "kpis", "performance"],
    template: "analytics",
  },
  {
    path: "/ab-testing",
    name: "A/B Testing",
    description: "Create and manage A/B tests",
    features: ["test-list", "creation", "analytics"],
    template: "ab-testing",
  },
  {
    path: "/coordination",
    name: "Coordination",
    description: "Coordinate goals, workflows, and agent assignments",
    features: ["goals", "workflows", "assignments"],
    template: "coordination",
  },
]

function generatePageTemplate(route: RouteTemplate): string {
  return `import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Settings, MoreHorizontal } from 'lucide-react'

export default function ${route.name.replace(/\s+/g, "")}Page() {
  return (
    <div className="flex flex-col">
      <DashboardHeader 
        title="${route.name}" 
        description="${route.description}" 
      />

      <div className="flex-1 space-y-6 p-6">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">${route.name}</h2>
            <p className="text-muted-foreground">
              ${route.description}
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          ${route.features
            .map(
              (feature) => `
          <Card>
            <CardHeader>
              <CardTitle className="capitalize">${feature.replace("-", " ")}</CardTitle>
              <CardDescription>
                ${feature.replace("-", " ")} management and configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge variant="outline">Coming Soon</Badge>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>`,
            )
            .join("")}
        </div>

        {/* Placeholder Content */}
        <Card>
          <CardHeader>
            <CardTitle>${route.name} Dashboard</CardTitle>
            <CardDescription>
              Main ${route.name.toLowerCase()} interface and controls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">${route.name} features coming soon</h3>
              <p className="text-muted-foreground mb-4">
                This section is under development and will include ${route.features.join(", ")} functionality.
              </p>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
`
}

async function generateMissingRoutes(dashboardPath: string) {
  console.log("🚀 Generating missing route components...")

  const appDir = path.join(dashboardPath, "src/app")

  if (!fs.existsSync(appDir)) {
    console.error("❌ App directory not found. Make sure you are using Next.js App Router.")
    return
  }

  let generatedCount = 0

  for (const route of routeTemplates) {
    const routeDir = path.join(appDir, route.path)
    const pageFile = path.join(routeDir, "page.tsx")

    if (!fs.existsSync(pageFile)) {
      // Create directory if it doesn't exist
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true })
      }

      // Generate page component
      const pageContent = generatePageTemplate(route)
      fs.writeFileSync(pageFile, pageContent)

      console.log(`✅ Generated ${route.path}/page.tsx`)
      generatedCount++
    } else {
      console.log(`⏭️  Skipped ${route.path} (already exists)`)
    }
  }

  console.log(`🎉 Generated ${generatedCount} missing route components!`)
}

// Main execution
async function main() {
  const dashboardPath = process.argv[2] || process.cwd()
  await generateMissingRoutes(dashboardPath)
}

if (require.main === module) {
  main().catch(console.error)
}

export { generateMissingRoutes, routeTemplates }
