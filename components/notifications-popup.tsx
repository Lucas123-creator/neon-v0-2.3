"use client"

import { useState } from "react"
import { X, Check, AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Notification {
  id: string
  title: string
  message: string
  type: "success" | "warning" | "error" | "info"
  timestamp: string
  read: boolean
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Campaign Performance Alert",
    message: "Your 'Summer Sale' campaign has exceeded its target by 25%",
    type: "success",
    timestamp: "2 minutes ago",
    read: false,
  },
  {
    id: "2",
    title: "Budget Warning",
    message: "Campaign 'Brand Awareness' is approaching 90% of allocated budget",
    type: "warning",
    timestamp: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    title: "New Feature Available",
    message: "AI Content Generator 2.0 is now available with enhanced capabilities",
    type: "info",
    timestamp: "3 hours ago",
    read: false,
  },
  {
    id: "4",
    title: "Integration Complete",
    message: "LinkedIn integration has been successfully configured",
    type: "success",
    timestamp: "1 day ago",
    read: true,
  },
  {
    id: "5",
    title: "System Maintenance",
    message: "Scheduled maintenance completed successfully",
    type: "info",
    timestamp: "2 days ago",
    read: true,
  },
]

interface NotificationsPopupProps {
  onClose: () => void
}

export function NotificationsPopup({ onClose }: NotificationsPopupProps) {
  const [notifications, setNotifications] = useState(mockNotifications)

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Info className="h-4 w-4 text-blue-500" />
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Card className="absolute right-0 top-12 w-96 z-50 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Notifications{" "}
          {unreadCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {unreadCount} new
            </Badge>
          )}
        </CardTitle>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs">
              Mark all read
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-96">
          <div className="space-y-1 p-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50 ${
                  !notification.read ? "bg-muted/30" : ""
                }`}
              >
                {getIcon(notification.type)}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">{notification.title}</p>
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
