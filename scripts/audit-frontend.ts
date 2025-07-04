#!/usr/bin/env tsx

/**
 * NeonHub v0 Frontend Audit Script
 * Comprehensive analysis of frontend structure, routes, components, and integrations
 */

import fs from "fs"
import path from "path"
import { glob } from "glob"

interface AuditReport {
  timestamp: string
  structure: StructureAudit
  routes: RouteAudit[]
  components: ComponentAudit[]
  tRPCIntegration: TRPCAudit
  issues: Issue[]
  recommendations: string[]
}

interface StructureAudit {
  isMonorepo: boolean
  hasAppsDirectory: boolean
  hasDashboardApp: boolean
  hasApiApp: boolean
  hasPackagesDirectory: boolean
  packageManager: "npm" | "pnpm" | "yarn"
  nextJsVersion: string | null
  routerType: "app" | "pages" | "unknown"
}

interface RouteAudit {
  path: string
  exists: boolean
  hasLayout: boolean
  hasLoading: boolean
  hasError: boolean
  expectedFeatures: string[]
  missingFeatures: string[]
}

interface ComponentAudit {
  name: string
  path: string
  exports: string[]
  imports: string[]
  hasTypes: boolean
  isUsed: boolean
  issues: string[]
}

interface TRPCAudit {
  hasTRPCProvider: boolean
  tRPCCalls: string[]
  missingProcedures: string[]
  typeIssues: string[]
}

interface Issue {
  type: "error" | "warning" | "info"
  category: "structure" | "route" | "component" | "trpc" | "build"
  message: string
  file?: string
  line?: number
  fix?: string
}

class FrontendAuditor {
  private rootDir: string
  private report: AuditReport

  constructor(rootDir: string = process.cwd()) {
    this.rootDir = rootDir
    this.report = {
      timestamp: new Date().toISOString(),
      structure: {} as StructureAudit,
      routes: [],
      components: [],
      tRPCIntegration: {} as TRPCAudit,
      issues: [],
      recommendations: [],
    }
  }

  async audit(): Promise<AuditReport> {
    console.log("🔍 Starting comprehensive frontend audit...")

    await this.auditStructure()
    await this.auditRoutes()
    await this.auditComponents()
    await this.auditTRPCIntegration()
    this.generateRecommendations()

    console.log("✅ Audit completed!")
    return this.report
  }

  private async auditStructure(): Promise<void> {
    console.log("📁 Auditing project structure...")

    const structure: StructureAudit = {
      isMonorepo:
        fs.existsSync(path.join(this.rootDir, "pnpm-workspace.yaml")) ||
        fs.existsSync(path.join(this.rootDir, "lerna.json")),
      hasAppsDirectory: fs.existsSync(path.join(this.rootDir, "apps")),
      hasDashboardApp:
        fs.existsSync(path.join(this.rootDir, "apps/dashboard")) || fs.existsSync(path.join(this.rootDir, "apps/web")),
      hasApiApp: fs.existsSync(path.join(this.rootDir, "apps/api")),
      hasPackagesDirectory: fs.existsSync(path.join(this.rootDir, "packages")),
      packageManager: this.detectPackageManager(),
      nextJsVersion: this.getNextJsVersion(),
      routerType: this.detectRouterType(),
    }

    this.report.structure = structure

    // Add issues based on structure
    if (!structure.isMonorepo) {
      this.addIssue("warning", "structure", "Not detected as monorepo - may need workspace configuration")
    }

    if (!structure.hasDashboardApp) {
      this.addIssue("error", "structure", "Dashboard app not found in expected location")
    }
  }

  private async auditRoutes(): Promise<void> {
    console.log("🛣️  Auditing routes...")

    const expectedRoutes = [
      { path: "/", features: ["dashboard", "metrics", "activity-feed", "quick-actions"] },
      { path: "/agents", features: ["agent-list", "status-controls", "metrics", "configuration"] },
      { path: "/campaigns", features: ["campaign-table", "creation", "editing", "analytics"] },
      { path: "/strategy", features: ["strategy-management", "tabs", "dialogs", "templates"] },
      { path: "/outreach", features: ["proposals", "offer-sheets", "analytics"] },
      { path: "/seo", features: ["meta-generator", "analyzer", "audit"] },
      { path: "/brand-voice", features: ["profiles", "guidelines", "analysis"] },
      { path: "/billing", features: ["subscription", "invoices", "payment-methods"] },
      { path: "/settings", features: ["general", "api-keys", "prompts", "notifications"] },
      { path: "/support", features: ["faq", "contact", "troubleshooting"] },
      { path: "/analytics", features: ["charts", "kpis", "performance"] },
      { path: "/ab-testing", features: ["test-list", "creation", "analytics"] },
      { path: "/coordination", features: ["goals", "workflows", "assignments"] },
    ]

    const dashboardPath = this.getDashboardPath()

    for (const expectedRoute of expectedRoutes) {
      const routeAudit = await this.auditSingleRoute(dashboardPath, expectedRoute)
      this.report.routes.push(routeAudit)
    }
  }

  private async auditSingleRoute(dashboardPath: string, expectedRoute: any): Promise<RouteAudit> {
    const routePath = expectedRoute.path === "/" ? "/page" : expectedRoute.path + "/page"
    const fullPath = path.join(dashboardPath, "src/app", routePath + ".tsx")
    const altPath = path.join(dashboardPath, "src/app", routePath + ".ts")

    const exists = fs.existsSync(fullPath) || fs.existsSync(altPath)

    return {
      path: expectedRoute.path,
      exists,
      hasLayout: fs.existsSync(
        path.join(dashboardPath, "src/app", expectedRoute.path === "/" ? "" : expectedRoute.path, "layout.tsx"),
      ),
      hasLoading: fs.existsSync(
        path.join(dashboardPath, "src/app", expectedRoute.path === "/" ? "" : expectedRoute.path, "loading.tsx"),
      ),
      hasError: fs.existsSync(
        path.join(dashboardPath, "src/app", expectedRoute.path === "/" ? "" : expectedRoute.path, "error.tsx"),
      ),
      expectedFeatures: expectedRoute.features,
      missingFeatures: [], // Would need content analysis to determine
    }
  }

  private async auditComponents(): Promise<void> {
    console.log("🧩 Auditing components...")

    const dashboardPath = this.getDashboardPath()
    const componentPaths = await glob("**/*.{tsx,ts}", {
      cwd: path.join(dashboardPath, "src/components"),
      ignore: ["**/*.test.*", "**/*.spec.*", "**/*.d.ts"],
    })

    for (const componentPath of componentPaths) {
      const fullPath = path.join(dashboardPath, "src/components", componentPath)
      const componentAudit = await this.auditSingleComponent(fullPath, componentPath)
      this.report.components.push(componentAudit)
    }
  }

  private async auditSingleComponent(fullPath: string, relativePath: string): Promise<ComponentAudit> {
    const content = fs.readFileSync(fullPath, "utf-8")
    const name = path.basename(relativePath, path.extname(relativePath))

    // Basic analysis - would need AST parsing for complete analysis
    const exports = this.extractExports(content)
    const imports = this.extractImports(content)

    return {
      name,
      path: relativePath,
      exports,
      imports,
      hasTypes: content.includes("interface ") || content.includes("type "),
      isUsed: false, // Would need cross-reference analysis
      issues: [],
    }
  }

  private async auditTRPCIntegration(): Promise<void> {
    console.log("🔌 Auditing tRPC integration...")

    const dashboardPath = this.getDashboardPath()

    // Check for tRPC provider
    const layoutPath = path.join(dashboardPath, "src/app/layout.tsx")
    const appPath = path.join(dashboardPath, "src/pages/_app.tsx")

    let hasTRPCProvider = false

    if (fs.existsSync(layoutPath)) {
      const content = fs.readFileSync(layoutPath, "utf-8")
      hasTRPCProvider = content.includes("TRPCProvider") || content.includes("trpc")
    } else if (fs.existsSync(appPath)) {
      const content = fs.readFileSync(appPath, "utf-8")
      hasTRPCProvider = content.includes("TRPCProvider") || content.includes("trpc")
    }

    // Find all tRPC calls
    const tRPCCalls = await this.findTRPCCalls(dashboardPath)

    this.report.tRPCIntegration = {
      hasTRPCProvider,
      tRPCCalls,
      missingProcedures: [], // Would need backend analysis
      typeIssues: [],
    }

    if (!hasTRPCProvider) {
      this.addIssue("error", "trpc", "tRPC provider not found in app layout")
    }
  }

  private async findTRPCCalls(dashboardPath: string): Promise<string[]> {
    const files = await glob("**/*.{tsx,ts}", {
      cwd: path.join(dashboardPath, "src"),
      ignore: ["**/*.test.*", "**/*.spec.*", "**/*.d.ts"],
    })

    const tRPCCalls: string[] = []

    for (const file of files) {
      const content = fs.readFileSync(path.join(dashboardPath, "src", file), "utf-8")
      const matches = content.match(/api\.\w+\.(useQuery|useMutation|useInfiniteQuery)/g)
      if (matches) {
        tRPCCalls.push(...matches)
      }
    }

    return [...new Set(tRPCCalls)]
  }

  private generateRecommendations(): void {
    const recommendations: string[] = []

    // Structure recommendations
    if (!this.report.structure.isMonorepo) {
      recommendations.push("Consider setting up monorepo structure with pnpm workspaces")
    }

    // Route recommendations
    const missingRoutes = this.report.routes.filter((r) => !r.exists)
    if (missingRoutes.length > 0) {
      recommendations.push(`Create missing routes: ${missingRoutes.map((r) => r.path).join(", ")}`)
    }

    // tRPC recommendations
    if (!this.report.tRPCIntegration.hasTRPCProvider) {
      recommendations.push("Set up tRPC provider in app layout")
    }

    // Component recommendations
    const unusedComponents = this.report.components.filter((c) => !c.isUsed)
    if (unusedComponents.length > 0) {
      recommendations.push("Review and remove unused components or ensure they are properly exported")
    }

    this.report.recommendations = recommendations
  }

  private detectPackageManager(): "npm" | "pnpm" | "yarn" {
    if (fs.existsSync(path.join(this.rootDir, "pnpm-lock.yaml"))) return "pnpm"
    if (fs.existsSync(path.join(this.rootDir, "yarn.lock"))) return "yarn"
    return "npm"
  }

  private getNextJsVersion(): string | null {
    try {
      const packageJsonPath = path.join(this.getDashboardPath(), "package.json")
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"))
        return packageJson.dependencies?.next || packageJson.devDependencies?.next || null
      }
    } catch (error) {
      // Ignore errors
    }
    return null
  }

  private detectRouterType(): "app" | "pages" | "unknown" {
    const dashboardPath = this.getDashboardPath()
    if (fs.existsSync(path.join(dashboardPath, "src/app"))) return "app"
    if (fs.existsSync(path.join(dashboardPath, "src/pages"))) return "pages"
    if (fs.existsSync(path.join(dashboardPath, "pages"))) return "pages"
    return "unknown"
  }

  private getDashboardPath(): string {
    if (fs.existsSync(path.join(this.rootDir, "apps/dashboard"))) {
      return path.join(this.rootDir, "apps/dashboard")
    }
    if (fs.existsSync(path.join(this.rootDir, "apps/web"))) {
      return path.join(this.rootDir, "apps/web")
    }
    return this.rootDir
  }

  private extractExports(content: string): string[] {
    const exports: string[] = []
    const exportMatches = content.match(/export\s+(default\s+)?(function|const|class|interface|type)\s+(\w+)/g)
    if (exportMatches) {
      exportMatches.forEach((match) => {
        const nameMatch = match.match(/(\w+)$/)
        if (nameMatch) exports.push(nameMatch[1])
      })
    }
    return exports
  }

  private extractImports(content: string): string[] {
    const imports: string[] = []
    const importMatches = content.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/g)
    if (importMatches) {
      importMatches.forEach((match) => {
        const pathMatch = match.match(/from\s+['"]([^'"]+)['"]/)
        if (pathMatch) imports.push(pathMatch[1])
      })
    }
    return imports
  }

  private addIssue(
    type: Issue["type"],
    category: Issue["category"],
    message: string,
    file?: string,
    fix?: string,
  ): void {
    this.report.issues.push({ type, category, message, file, fix })
  }

  async saveReport(): Promise<void> {
    const reportsDir = path.join(this.rootDir, "healing-reports")
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true })
    }

    const reportPath = path.join(reportsDir, `audit-${Date.now()}.json`)
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2))

    console.log(`📊 Audit report saved to: ${reportPath}`)

    // Also create a human-readable summary
    const summaryPath = path.join(reportsDir, `audit-summary-${Date.now()}.md`)
    const summary = this.generateMarkdownSummary()
    fs.writeFileSync(summaryPath, summary)

    console.log(`📋 Audit summary saved to: ${summaryPath}`)
  }

  private generateMarkdownSummary(): string {
    const { structure, routes, components, tRPCIntegration, issues, recommendations } = this.report

    return `# NeonHub v0 Frontend Audit Report

Generated: ${this.report.timestamp}

## 📁 Project Structure
- **Monorepo**: ${structure.isMonorepo ? "✅" : "❌"}
- **Package Manager**: ${structure.packageManager}
- **Next.js Version**: ${structure.nextJsVersion || "Not detected"}
- **Router Type**: ${structure.routerType}
- **Dashboard App**: ${structure.hasDashboardApp ? "✅" : "❌"}
- **API App**: ${structure.hasApiApp ? "✅" : "❌"}

## 🛣️ Routes Analysis
Total routes analyzed: ${routes.length}
Existing routes: ${routes.filter((r) => r.exists).length}
Missing routes: ${routes.filter((r) => !r.exists).length}

### Missing Routes:
${routes
  .filter((r) => !r.exists)
  .map((r) => `- ${r.path}`)
  .join("\n")}

## 🧩 Components Analysis
Total components: ${components.length}
Components with types: ${components.filter((c) => c.hasTypes).length}

## 🔌 tRPC Integration
- **Provider Setup**: ${tRPCIntegration.hasTRPCProvider ? "✅" : "❌"}
- **tRPC Calls Found**: ${tRPCIntegration.tRPCCalls.length}

## ⚠️ Issues Found
${issues.map((issue) => `- **${issue.type.toUpperCase()}** [${issue.category}]: ${issue.message}`).join("\n")}

## 💡 Recommendations
${recommendations.map((rec) => `- ${rec}`).join("\n")}

## 🔧 Next Steps
1. Address critical errors first
2. Implement missing routes and components
3. Set up proper tRPC integration
4. Run comprehensive testing
5. Optimize build and deployment pipeline
`
  }
}

// Main execution
async function main() {
  const auditor = new FrontendAuditor()
  const report = await auditor.audit()
  await auditor.saveReport()

  console.log("\n🎉 Frontend audit completed!")
  console.log(`Found ${report.issues.length} issues`)
  console.log(`Generated ${report.recommendations.length} recommendations`)
}

if (require.main === module) {
  main().catch(console.error)
}

export { FrontendAuditor }
