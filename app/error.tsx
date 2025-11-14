"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="flex min-h-svh items-center justify-center p-6">
          <div className="max-w-md text-center space-y-4">
            <h2 className="text-xl font-semibold">Something went wrong</h2>
            <p className="text-sm text-muted-foreground">An unexpected error occurred. You can try again.</p>
            <div className="flex items-center justify-center gap-2">
              <Button onClick={() => reset()}>Try again</Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>Go to dashboard</Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}


