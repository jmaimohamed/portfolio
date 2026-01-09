import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsGallery } from "@/components/projects-gallery"
import { ResumeSection } from "@/components/resume-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsGallery />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
