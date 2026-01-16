"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Clock, 
  User, 
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Play,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { projects } from "@/lib/data"
import { getAssetPath } from "@/lib/utils"
import { useState, useEffect } from "react"
import TechBackground from "@/components/TechBackground"

const categoryColors: Record<string, string> = {
  embedded: "from-orange-500 to-red-500",
  mobile: "from-purple-500 to-pink-500",
  web: "from-blue-500 to-cyan-500",
  fullstack: "from-green-500 to-emerald-500",
  iot: "from-yellow-500 to-orange-500",
  ai: "from-violet-500 to-purple-500"
}

const statusColors: Record<string, string> = {
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
  "in-progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  maintained: "bg-blue-500/20 text-blue-400 border-blue-500/30"
}

function ImageGallery({ 
  images, 
  activeIndex, 
  onNext, 
  onPrev,
  setActiveIndex 
}: { 
  images: string[]
  activeIndex: number
  onNext: () => void
  onPrev: () => void
  setActiveIndex: (idx: number) => void
}) {
  return (
    <div className="relative">
      <div className="aspect-video bg-card relative overflow-hidden">
        <img 
          src={getAssetPath(images[activeIndex]) || getAssetPath("/placeholder.svg")}
          alt={`Project image ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 p-4 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                idx === activeIndex ? "border-secondary" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={getAssetPath(img) || getAssetPath("/placeholder.svg")} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ProjectDetailClient({ id }: { id: string }) {
  const router = useRouter()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-pulse mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-background" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Button onClick={() => router.push("/#projects")} className="bg-gradient-to-r from-secondary to-accent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % project.images.length)
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="relative overflow-hidden min-h-[60vh]">
          <div className="absolute inset-0">
            <TechBackground />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} opacity-10`} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/#projects">
              <Button variant="ghost" size="sm" className={`mb-8 hover:bg-secondary/20 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className={`space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="flex flex-wrap gap-3">
                  <Badge className={`bg-gradient-to-r ${categoryColors[project.category]} text-white border-0 px-4 py-1`}>
                    {project.category.toUpperCase()}
                  </Badge>
                  <Badge className={`${statusColors[project.status]} border px-4 py-1`}>
                    {project.status === "in-progress" ? "In Progress" : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-secondary" /><span>{project.date}</span></div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-secondary" /><span>{project.duration}</span></div>
                  <div className="flex items-center gap-2"><User className="h-4 w-4 text-secondary" /><span>{project.role}</span></div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.liveUrl && (
                    <Button className="bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/30" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4" />Live Demo</a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" className="border-2 border-secondary hover:bg-secondary/20" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" />View Code</a>
                    </Button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, idx) => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-sm font-medium ${idx % 3 === 0 ? "bg-secondary/20 text-secondary" : idx % 3 === 1 ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"}`}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="rounded-2xl overflow-hidden border-2 border-secondary/30 bg-card">
                  {project.videoUrl ? (
                    <Tabs defaultValue="video" className="w-full">
                      <TabsList className="w-full bg-card border-b border-secondary/20 rounded-none p-1">
                        <TabsTrigger value="video" className="flex-1 data-[state=active]:bg-secondary/20"><Play className="mr-2 h-4 w-4" />Video</TabsTrigger>
                        <TabsTrigger value="images" className="flex-1 data-[state=active]:bg-secondary/20"><ImageIcon className="mr-2 h-4 w-4" />Images</TabsTrigger>
                      </TabsList>
                      <TabsContent value="video" className="mt-0">
                        <div className="aspect-video">
                          {project.videoUrl.includes('youtube') || project.videoUrl.includes('vimeo') ? (
                            <iframe src={project.videoUrl} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                          ) : (
                            <video src={getAssetPath(project.videoUrl)} className="w-full h-full" controls playsInline>
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      </TabsContent>
                      <TabsContent value="images" className="mt-0">
                        <ImageGallery images={project.images} activeIndex={activeImageIndex} onNext={nextImage} onPrev={prevImage} setActiveIndex={setActiveImageIndex} />
                      </TabsContent>
                    </Tabs>
                  ) : (
                    <ImageGallery images={project.images} activeIndex={activeImageIndex} onNext={nextImage} onPrev={prevImage} setActiveIndex={setActiveImageIndex} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-2 border-secondary/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-secondary/10 to-transparent border-b border-secondary/20">
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-secondary/20"><Lightbulb className="h-5 w-5 text-secondary" /></div>
                    About This Project
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  {project.longDescription.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{paragraph.trim()}</p>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-accent/10 to-transparent border-b border-secondary/20">
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-accent/20"><CheckCircle2 className="h-5 w-5 text-accent" /></div>
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-card hover:bg-secondary/10 transition-colors">
                        <div className="mt-0.5 p-1 rounded-full bg-gradient-to-r from-secondary to-accent"><CheckCircle2 className="h-3 w-3 text-background" /></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {project.challenges && project.challenges.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2 border-orange-500/20">
                    <CardHeader className="bg-gradient-to-r from-orange-500/10 to-transparent border-b border-orange-500/20">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="p-2 rounded-lg bg-orange-500/20"><AlertTriangle className="h-5 w-5 text-orange-400" /></div>
                        Challenges
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-orange-400 mt-1">•</span>{challenge}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-500/20">
                    <CardHeader className="bg-gradient-to-r from-green-500/10 to-transparent border-b border-green-500/20">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <div className="p-2 rounded-lg bg-green-500/20"><Lightbulb className="h-5 w-5 text-green-400" /></div>
                        Solutions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-3">
                        {project.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-green-400 mt-1">•</span>{solution}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-secondary/20 overflow-hidden sticky top-24">
                <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10 border-b border-secondary/20">
                  <CardTitle className="text-lg">Technology Stack</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-secondary/10">
                    {project.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 hover:bg-secondary/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${idx % 3 === 0 ? "bg-secondary" : idx % 3 === 1 ? "bg-accent" : "bg-primary"}`} />
                          <span className="font-medium text-foreground">{tech.name}</span>
                        </div>
                        {tech.version && <Badge variant="outline" className="text-xs">{tech.version}</Badge>}
                      </div>
                    ))}
                  </div>
                  
                  {/* Quick Links Section */}
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="border-t border-secondary/20">
                      <div className="p-4 pb-2">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Quick Links</h4>
                      </div>
                      <div className="px-4 pb-4 space-y-2">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-secondary/20 transition-colors group">
                            <Github className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                            <span className="text-sm text-foreground">Source Code</span>
                            <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-accent/20 transition-colors group">
                            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                            <span className="text-sm text-foreground">Live Demo</span>
                            <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-secondary/20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Explore More Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => p.id !== project.id).slice(0, 3).map((p) => (
              <Link key={p.id} href={`/projects/${p.id}`}>
                <Card className="border-2 border-secondary/20 hover:border-secondary transition-all cursor-pointer group overflow-hidden h-full">
                  <div className="aspect-video bg-card overflow-hidden">
                    <img src={getAssetPath(p.thumbnail) || getAssetPath("/placeholder.svg")} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardHeader>
                    <Badge className={`w-fit bg-gradient-to-r ${categoryColors[p.category]} text-white border-0 text-xs`}>{p.category}</Badge>
                    <CardTitle className="text-lg group-hover:text-secondary transition-colors">{p.title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
