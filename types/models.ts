export type Project = { id: string; name: string; owner: string; status: "ok" | "warn" | "error" | "paused"; updatedAt: string }
export type Team = { id: string; name: string; members: number }
export type Task = { id: string; title: string; status: "todo" | "doing" | "done" }
export type Document = { id: string; title: string }
export type Message = { id: string; subject: string; preview: string }
export type FeedbackItem = { id: string; label: string; value: number }


