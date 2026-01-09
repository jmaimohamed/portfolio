"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap, Cpu, Globe, Smartphone, ArrowRight, Layers } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/data"

const categoryConfig: Record<string, { icon: typeof Cpu; color: string; bg: string }> = {
  embedded: { icon: Cpu, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  web: { icon: Globe, color: "text-orange-500", bg: "bg-orange-500/10" },
  mobile: { icon: Smartphone, color: "text-purple-500", bg: "bg-purple-500/10" },
  fullstack: { icon: Layers, color: "text-emerald-500", bg: "bg-emerald-500/10" },
}

const statusColors: Record<string, string> = {
  completed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "in-progress": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  planned: "bg-blue-500/20 text-blue-400 border-blue-500/30",
}

export function ProjectsGallery() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const categories = [
    { value: "all", label: "All Projects", icon: Layers },
    { value: "embedded", label: "Embedded", icon: Cpu },
    { value: "web", label: "Web", icon: Globe },
    { value: "mobile", label: "Mobile", icon: Smartphone },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary/30">
            <Layers className="w-3 h-3 mr-1" />
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From embedded systems and IoT devices to full-stack web applications,
            explore my diverse portfolio of engineering projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const CatIcon = cat.icon
            const isActive = selectedCategory === cat.value
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-secondary to-accent text-white shadow-lg scale-105"
                    : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50"
                }`}
              >
                <CatIcon className="w-4 h-4" />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const catConfig = categoryConfig[project.category] || categoryConfig.web
            const CatIcon = catConfig.icon
            
            return (
              <Card
                key={project.id}
                className={`border border-border/50 overflow-hidden hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 75}ms` : "0ms",
                }}
              >
                {/* Image with overlay */}
                <div className="overflow-hidden h-48 bg-gradient-to-br from-card to-card/50 relative">
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <CatIcon className={`w-16 h-16 ${catConfig.color} opacity-30`} />
                    </div>
                  )}
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-3 left-3 ${catConfig.bg} ${catConfig.color} px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm`}>
                    <CatIcon className="w-3 h-3" />
                    {project.category}
                  </div>
                  
                  {/* Status Badge */}
                  <Badge 
                    variant="outline" 
                    className={`absolute top-3 right-3 text-xs ${statusColors[project.status]} backdrop-blur-sm`}
                  >
                    {project.status === "in-progress" && <Zap className="w-3 h-3 mr-1" />}
                    {project.status}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="group-hover:text-secondary transition-colors text-xl flex items-center gap-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => {
                      const techName = typeof tech === 'string' ? tech : tech.name
                      return (
                        <Badge
                          key={techName}
                          variant="secondary"
                          className="text-xs bg-card border border-border/50"
                        >
                          {techName}
                        </Badge>
                      )
                    })}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-card border border-border/50">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/30 text-white"
                      asChild
                    >
                      <Link href={`/projects/${project.id}`}>
                        <ArrowRight size={16} className="mr-1" />
                        Details
                      </Link>
                    </Button>
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border border-border/50 hover:border-secondary/50 bg-transparent"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border border-border/50 hover:border-secondary/50 bg-transparent"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* Find More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/30" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
