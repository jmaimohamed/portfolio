import { projects } from "@/lib/data"
import ProjectDetailClient from "./ProjectDetailClient"

// Generate static paths for all projects at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

// Server component that passes the ID to the client component
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return <ProjectDetailClient id={id} />
}
