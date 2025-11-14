"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

export default function OnboardingPage() {
  const [step, setStep] = useState("brand")
  const [brand, setBrand] = useState("")
  useEffect(() => {
    const s = localStorage.getItem("neonhub:onboarding:step")
    if (s) setStep(s)
  }, [])
  useEffect(() => {
    localStorage.setItem("neonhub:onboarding:step", step)
  }, [step])

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Onboarding" description="Quick setup" />
      <div className="p-6">
        <Tabs value={step} onValueChange={setStep} className="space-y-6">
          <TabsList>
            <TabsTrigger value="brand">Brand</TabsTrigger>
            <TabsTrigger value="keys">API Keys</TabsTrigger>
            <TabsTrigger value="campaign">First Campaign</TabsTrigger>
            <TabsTrigger value="finish">Finish</TabsTrigger>
          </TabsList>
          <TabsContent value="brand" className="space-y-3">
            <Input placeholder="Brand name" value={brand} onChange={(e) => setBrand(e.target.value)} />
            <Button onClick={() => setStep("keys")}>Continue</Button>
          </TabsContent>
          <TabsContent value="keys" className="space-y-3">
            <Input placeholder="Analytics Key" />
            <Input placeholder="SEO Key" />
            <Button onClick={() => setStep("campaign")}>Continue</Button>
          </TabsContent>
          <TabsContent value="campaign" className="space-y-3">
            <Input placeholder="Campaign name" />
            <Button onClick={() => setStep("finish")}>Continue</Button>
          </TabsContent>
          <TabsContent value="finish" className="space-y-3">
            <div className="rounded border p-4">You're set, {brand || "there"}! Explore the dashboard.</div>
            <Button onClick={() => (window.location.href = "/")}>Go to Dashboard</Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}


