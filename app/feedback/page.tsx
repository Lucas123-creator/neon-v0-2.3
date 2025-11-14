"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"
import { KPIStat } from "@/components/neon/KPIStat"

export default function FeedbackPage() {
  const Charts = dynamic(() => import("@/components/feedback/FeedbackCharts"), { ssr: false, loading: () => <Skeleton className="h-64 w-full" /> })
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Feedback" description="Sentiment and NPS overview" />
      <div className="p-6 grid gap-4 md:grid-cols-3">
        <KPIStat label="NPS" value={47} delta="▲ 3" />
        <KPIStat label="CSAT" value="89%" delta="▲ 2%" />
        <KPIStat label="Responses" value={1245} />
      </div>
      <div className="px-6">
        <Charts />
      </div>
    </div>
  )
}


