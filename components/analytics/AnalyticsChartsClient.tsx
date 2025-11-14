"use client"

import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"

const Charts = dynamic(() => import("@/components/analytics/AnalyticsCharts"), {
  ssr: false,
  loading: () => <Skeleton className="h-64 w-full" />,
})

export default function AnalyticsChartsClient() {
  return <Charts />
}


