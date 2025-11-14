import type { Project, Team, Task, Document, Message, FeedbackItem } from "@/types/models"

export const mockProjects: Project[] = [
  { id: "p1", name: "Website Revamp", owner: "Alex", status: "ok", updatedAt: "2025-09-01" },
  { id: "p2", name: "Q4 Campaign", owner: "Sam", status: "warn", updatedAt: "2025-09-10" },
]

export const mockTeams: Team[] = [
  { id: "t1", name: "Marketing", members: 12 },
  { id: "t2", name: "Growth", members: 7 },
]

export const mockTasks: Task[] = [
  { id: "tk1", title: "Wire Content Hub", status: "todo" },
  { id: "tk2", title: "Design Inbox", status: "doing" },
  { id: "tk3", title: "Sidebar Groups", status: "done" },
]

export const mockDocuments: Document[] = [
  { id: "d1", title: "Brand Guidelines" },
  { id: "d2", title: "Campaign Playbook" },
]

export const mockMessages: Message[] = [
  { id: "m1", subject: "Welcome to NeonHub", preview: "Let’s get started..." },
  { id: "m2", subject: "Q4 Campaign Launch", preview: "Assets checklist" },
]

export const mockFeedback: FeedbackItem[] = [
  { id: "f1", label: "Positive", value: 62 },
  { id: "f2", label: "Neutral", value: 24 },
  { id: "f3", label: "Negative", value: 14 },
]


