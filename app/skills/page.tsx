"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Cpu, 
  Globe, 
  Server, 
  Layers, 
  Zap, 
  Shield, 
  GitBranch, 
  Database,
  Code,
  ArrowRight,
  Users,
  Target,
  Clock,
  Brain
} from "lucide-react"
import { hardSkills, softSkills } from "@/lib/data"
import Link from "next/link"
import TechBackground from "@/components/TechBackground"

type CategoryKey = "embedded" | "web" | "devops" | "fpga"

const categoryConfig: Record<CategoryKey, { 
  icon: typeof Cpu
  label: string
  description: string
  color: string
  gradient: string
  bgColor: string
}> = {
  embedded: { 
    icon: Cpu, 
    label: "Embedded & IoT",
    description: "Low-level programming, firmware development, and IoT integration",
    color: "text-cyan-500",
    gradient: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10"
  },
  web: { 
    icon: Globe, 
    label: "Web & Mobile",
    description: "Frontend frameworks, backend services, and mobile development",
    color: "text-orange-500",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10"
  },
  devops: { 
    icon: Server, 
    label: "DevOps & Cloud",
    description: "CI/CD, containerization, monitoring, and cloud services",
    color: "text-emerald-500",
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10"
  },
  fpga: { 
    icon: Layers, 
    label: "FPGA & Hardware",
    description: "HDL programming, SoC design, and hardware description",
    color: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10"
  },
}

const categorySkills: Record<CategoryKey, string[]> = {
  embedded: hardSkills.embeddedAndIoT,
  web: [...hardSkills.webAndMobile, ...hardSkills.programmingLanguages],
  devops: [...hardSkills.devopsAndAutomation, ...hardSkills.monitoringAndCloud, ...hardSkills.databases],
  fpga: hardSkills.fpgaAndHardware,
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("embedded")

  const skills = categorySkills[activeCategory] || []
  const config = categoryConfig[activeCategory]
  const Icon = config.icon

  const highlights = [
    { icon: Zap, label: "Fast Learner", desc: "Quick adaptation to new technologies and frameworks" },
    { icon: Shield, label: "Security First", desc: "Implementing secure coding practices and protocols" },
    { icon: GitBranch, label: "Version Control", desc: "Clean Git workflows and collaborative development" },
    { icon: Database, label: "Data Driven", desc: "Efficient data handling and optimization" },
  ]

  const softSkillCategories = [
    {
      title: "Professional Mindset",
      icon: Brain,
      skills: softSkills.professionalMindset,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      title: "Collaboration",
      icon: Users,
      skills: softSkills.collaboration,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "Productivity",
      icon: Clock,
      skills: softSkills.productivity,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <TechBackground />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-secondary border-secondary/30">
              <Code className="w-3 h-3 mr-1" />
              Technical Expertise
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Skills &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500">
                Capabilities
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From low-level hardware programming to high-level web applications,
              I bring a comprehensive skill set to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-8 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(Object.keys(categoryConfig) as CategoryKey[]).map((category) => {
              const cat = categoryConfig[category]
              const CatIcon = cat.icon
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg scale-105`
                      : "bg-card border border-border/50 hover:border-secondary/50"
                  }`}
                >
                  <CatIcon className={`w-8 h-8 mb-2 ${isActive ? 'text-white' : cat.color}`} />
                  <h3 className={`font-bold ${isActive ? 'text-white' : 'text-foreground'}`}>{cat.label}</h3>
                  <p className={`text-xs mt-1 ${isActive ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {cat.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Display - Badges */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${config.gradient}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">{config.label}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`px-4 py-2 text-sm font-medium ${config.color} border-current/30 ${config.bgColor} hover:scale-105 transition-all duration-300`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-16 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Soft Skills</h2>
            <p className="text-muted-foreground">Essential interpersonal abilities that complement technical expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {softSkillCategories.map((category) => (
              <Card key={category.title} className="border border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`${category.color} border-current/30 ${category.bgColor}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Strengths</h2>
            <p className="text-muted-foreground">What sets my work apart</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <Card key={item.label} className="border border-secondary/20 text-center hover:border-secondary transition-colors">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                  <h4 className="font-bold text-foreground mb-1">{item.label}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Hard Skills Overview */}
      <section className="py-16 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Complete Skill Set</h2>
            <p className="text-muted-foreground">All my technical skills at a glance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Programming Languages */}
            <Card className="border border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-lg text-cyan-400">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.programmingLanguages.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-cyan-400 border-cyan-400/30 bg-cyan-500/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Web & Mobile */}
            <Card className="border border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-lg text-orange-400">Web & Mobile Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.webAndMobile.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-orange-400 border-orange-400/30 bg-orange-500/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Embedded & IoT */}
            <Card className="border border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-lg text-blue-400">Embedded Systems & IoT</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.embeddedAndIoT.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-blue-400 border-blue-400/30 bg-blue-500/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* DevOps */}
            <Card className="border border-emerald-500/30">
              <CardHeader>
                <CardTitle className="text-lg text-emerald-400">DevOps & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.devopsAndAutomation.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-emerald-400 border-emerald-400/30 bg-emerald-500/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FPGA & Hardware */}
            <Card className="border border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg text-purple-400">FPGA & Hardware Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.fpgaAndHardware.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-purple-400 border-purple-400/30 bg-purple-500/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Databases & Cloud */}
            <Card className="border border-pink-500/30">
              <CardHeader>
                <CardTitle className="text-lg text-pink-400">Databases & Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[...hardSkills.databases, ...hardSkills.monitoringAndCloud].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-pink-400 border-pink-400/30 bg-pink-500/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">See Skills in Action</h2>
          <p className="text-muted-foreground mb-8">
            Check out my projects to see how I apply these skills to build real-world solutions.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-secondary to-accent" asChild>
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
