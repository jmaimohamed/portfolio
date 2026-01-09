"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ExternalLink, 
  Github, 
  Zap, 
  Cpu, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  Layers,
  Search,
  Filter,
  Grid,
  List
} from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/data"
import TechBackground from "@/components/TechBackground"

const categoryConfig: Record<string, { icon: typeof Cpu; color: string; bg: string; gradient: string }> = {
  embedded: { icon: Cpu, color: "text-cyan-500", bg: "bg-cyan-500/10", gradient: "from-cyan-500 to-blue-600" },
  web: { icon: Globe, color: "text-orange-500", bg: "bg-orange-500/10", gradient: "from-orange-500 to-red-500" },
  mobile: { icon: Smartphone, color: "text-purple-500", bg: "bg-purple-500/10", gradient: "from-purple-500 to-pink-500" },
  fullstack: { icon: Layers, color: "text-emerald-500", bg: "bg-emerald-500/10", gradient: "from-emerald-500 to-teal-500" },
  iot: { icon: Cpu, color: "text-yellow-500", bg: "bg-yellow-500/10", gradient: "from-yellow-500 to-orange-500" },
}

const statusColors: Record<string, string> = {
  completed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "in-progress": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  planned: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  maintained: "bg-blue-500/20 text-blue-400 border-blue-500/30",
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const categories = [
    { value: "all", label: "All Projects", icon: Layers },
    { value: "embedded", label: "Embedded", icon: Cpu },
    { value: "web", label: "Web", icon: Globe },
    { value: "mobile", label: "Mobile", icon: Smartphone },
    { value: "fullstack", label: "Full-Stack", icon: Layers },
  ]

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const stats = {
    total: projects.length,
    completed: projects.filter(p => p.status === "completed").length,
    inProgress: projects.filter(p => p.status === "in-progress").length,
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <TechBackground />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/30">
              <Layers className="w-3 h-3 mr-1" />
              Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my complete portfolio of embedded systems, web applications, and mobile projects.
              Each project represents a unique challenge solved with innovative solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500">{stats.completed}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">{stats.inProgress}</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card/30 sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const CatIcon = cat.icon
                const isActive = selectedCategory === cat.value
                return (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-secondary to-accent text-white shadow-lg"
                        : "bg-card text-muted-foreground hover:text-foreground border border-border/50"
                    }`}
                  >
                    <CatIcon className="w-4 h-4" />
                    {cat.label}
                  </button>
                )
              })}
            </div>

            {/* View Toggle */}
            <div className="flex gap-1 bg-card border border-border/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-secondary text-white" : "text-muted-foreground"}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-secondary text-white" : "text-muted-foreground"}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => {
                const catConfig = categoryConfig[project.category] || categoryConfig.web
                const CatIcon = catConfig.icon
                
                return (
                  <Card
                    key={project.id}
                    className="border border-border/50 overflow-hidden hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 group"
                  >
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
                      
                      <div className={`absolute top-3 left-3 ${catConfig.bg} ${catConfig.color} px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm`}>
                        <CatIcon className="w-3 h-3" />
                        {project.category}
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        className={`absolute top-3 right-3 text-xs ${statusColors[project.status]} backdrop-blur-sm`}
                      >
                        {project.status === "in-progress" && <Zap className="w-3 h-3 mr-1" />}
                        {project.status}
                      </Badge>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="group-hover:text-secondary transition-colors text-xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-2">
                        {project.shortDescription}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => {
                          const techName = typeof tech === 'string' ? tech : tech.name
                          return (
                            <Badge key={techName} variant="secondary" className="text-xs bg-card border border-border/50">
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

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-secondary to-accent" asChild>
                          <Link href={`/projects/${project.id}`}>
                            <ArrowRight size={16} className="mr-1" />
                            Details
                          </Link>
                        </Button>
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" className="border-border/50" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={16} />
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="outline" size="sm" className="border-border/50" asChild>
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
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project) => {
                const catConfig = categoryConfig[project.category] || categoryConfig.web
                const CatIcon = catConfig.icon
                
                return (
                  <Card key={project.id} className="border border-border/50 hover:border-secondary/50 transition-all">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                          {project.images && project.images.length > 0 ? (
                            <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <CatIcon className={`w-8 h-8 ${catConfig.color} opacity-30`} />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className={`${catConfig.bg} ${catConfig.color} text-xs`}>
                                  {project.category}
                                </Badge>
                                <Badge variant="outline" className={`text-xs ${statusColors[project.status]}`}>
                                  {project.status}
                                </Badge>
                              </div>
                              <h3 className="font-bold text-foreground">{project.title}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-1">{project.shortDescription}</p>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-gradient-to-r from-secondary to-accent" asChild>
                                <Link href={`/projects/${project.id}`}>View</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
