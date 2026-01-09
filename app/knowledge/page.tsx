import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { KnowledgeBase } from "@/components/knowledge-base"

export const metadata = {
  title: "Knowledge Base | Dev Notes & Research",
  description: "My personal collection of technical notes, learnings, and research on embedded systems, web development, and software engineering."
}

export default function KnowledgePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <KnowledgeBase />
      <Footer />
    </main>
  )
}
