import { mockDocuments, mockFeedback, mockMessages, mockProjects, mockTasks, mockTeams } from "@/lib/mocks"
import type { Document, FeedbackItem, Message, Project, Task, Team } from "@/types/models"

// Replace with real API clients when available
export async function getProjects(): Promise<Project[]> {
  try {
    // @ts-ignore replace with api.projects.list.query()
    if (globalThis.api?.projects?.list) return await globalThis.api.projects.list.query()
    return mockProjects
  } catch {
    return mockProjects
  }
}

export async function getTeams(): Promise<Team[]> {
  try {
    // @ts-ignore
    if (globalThis.api?.teams?.list) return await globalThis.api.teams.list.query()
    return mockTeams
  } catch {
    return mockTeams
  }
}

export async function getTasks(): Promise<Task[]> {
  try {
    // @ts-ignore
    if (globalThis.api?.tasks?.list) return await globalThis.api.tasks.list.query()
    return mockTasks
  } catch {
    return mockTasks
  }
}

export async function getDocuments(): Promise<Document[]> {
  try {
    // @ts-ignore
    if (globalThis.api?.documents?.list) return await globalThis.api.documents.list.query()
    return mockDocuments
  } catch {
    return mockDocuments
  }
}

export async function getMessages(): Promise<Message[]> {
  try {
    // @ts-ignore
    if (globalThis.api?.messages?.list) return await globalThis.api.messages.list.query()
    return mockMessages
  } catch {
    return mockMessages
  }
}

export async function getFeedback(): Promise<FeedbackItem[]> {
  try {
    // @ts-ignore
    if (globalThis.api?.feedback?.list) return await globalThis.api.feedback.list.query()
    return mockFeedback
  } catch {
    return mockFeedback
  }
}


