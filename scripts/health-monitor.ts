#!/usr/bin/env tsx

/**
 * Continuous health monitoring for the NeonHub frontend
 * Runs periodic checks and alerts on issues
 */

import { spawn } from "child_process"
import fs from "fs"
import path from "path"

interface HealthCheck {
  name: string
  command: string
  args: string[]
  timeout: number
  critical: boolean
}

const healthChecks: HealthCheck[] = [
  {
    name: "TypeScript Check",
    command: "pnpm",
    args: ["typecheck"],
    timeout: 30000,
    critical: true,
  },
  {
    name: "Lint Check",
    command: "pnpm",
    args: ["lint"],
    timeout: 20000,
    critical: false,
  },
  {
    name: "Build Test",
    command: "pnpm",
    args: ["build"],
    timeout: 60000,
    critical: true,
  },
  {
    name: "Test Suite",
    command: "pnpm",
    args: ["test", "--passWithNoTests"],
    timeout: 45000,
    critical: false,
  },
]

class HealthMonitor {
  private results: Map<string, boolean> = new Map()
  private lastRun: Date = new Date()

  async runHealthChecks(): Promise<void> {
    console.log("🏥 Running health checks...")

    for (const check of healthChecks) {
      const success = await this.runSingleCheck(check)
      this.results.set(check.name, success)

      if (!success && check.critical) {
        console.error(`❌ CRITICAL: ${check.name} failed`)
      } else if (!success) {
        console.warn(`⚠️  WARNING: ${check.name} failed`)
      } else {
        console.log(`✅ ${check.name} passed`)
      }
    }

    this.lastRun = new Date()
    await this.generateHealthReport()
  }

  private async runSingleCheck(check: HealthCheck): Promise<boolean> {
    return new Promise((resolve) => {
      const process = spawn(check.command, check.args, {
        stdio: "pipe",
        shell: true,
      })

      const timeout = setTimeout(() => {
        process.kill()
        resolve(false)
      }, check.timeout)

      process.on("close", (code) => {
        clearTimeout(timeout)
        resolve(code === 0)
      })

      process.on("error", () => {
        clearTimeout(timeout)
        resolve(false)
      })
    })
  }

  private async generateHealthReport(): Promise<void> {
    const report = {
      timestamp: this.lastRun.toISOString(),
      overall: Array.from(this.results.values()).every(Boolean),
      checks: Object.fromEntries(this.results),
      criticalIssues: healthChecks
        .filter((check) => check.critical && !this.results.get(check.name))
        .map((check) => check.name),
    }

    const reportsDir = path.join(process.cwd(), "healing-reports")
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true })
    }

    const reportPath = path.join(reportsDir, "health-report.json")
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))

    console.log(`📊 Health report saved to: ${reportPath}`)

    if (report.criticalIssues.length > 0) {
      console.error(`🚨 ${report.criticalIssues.length} critical issues found!`)
    } else {
      console.log("💚 All health checks passed!")
    }
  }

  async startMonitoring(intervalMinutes = 30): Promise<void> {
    console.log(`🔄 Starting health monitoring (every ${intervalMinutes} minutes)`)

    // Run initial check
    await this.runHealthChecks()

    // Set up periodic checks
    setInterval(
      async () => {
        await this.runHealthChecks()
      },
      intervalMinutes * 60 * 1000,
    )
  }
}

// Main execution
async function main() {
  const monitor = new HealthMonitor()

  if (process.argv.includes("--watch")) {
    await monitor.startMonitoring(30)
  } else {
    await monitor.runHealthChecks()
  }
}

if (require.main === module) {
  main().catch(console.error)
}

export { HealthMonitor }
