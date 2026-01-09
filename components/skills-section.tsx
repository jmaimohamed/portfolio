"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Globe, Smartphone, Wrench, Zap, Shield, GitBranch, Database, ArrowRight, Server, Layers } from "lucide-react"
import { hardSkills, softSkills } from "@/lib/data"
import Link from "next/link"

type CategoryKey = "embedded" | "web" | "devops" | "fpga"

const categoryConfig: Record<CategoryKey, { 
  icon: typeof Cpu
  label: string
  color: string
  gradient: string
  bgColor: string
}> = {
  embedded: { 
    icon: Cpu, 
    label: "Embedded & IoT",
    color: "text-cyan-500",
    gradient: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10"
  },
  web: { 
    icon: Globe, 
    label: "Web & Mobile",
    color: "text-orange-500",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10"
  },
  devops: { 
    icon: Server, 
    label: "DevOps & Automation",
    color: "text-emerald-500",
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10"
  },
  fpga: { 
    icon: Layers, 
    label: "FPGA & Hardware",
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

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("embedded")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skills = categorySkills[activeCategory] || []
  const config = categoryConfig[activeCategory]
  const Icon = config.icon

  const highlights = [
    { icon: Zap, label: "Fast Learner", desc: "Quick adaptation to new technologies" },
    { icon: Shield, label: "Security First", desc: "Secure coding practices" },
    { icon: GitBranch, label: "Version Control", desc: "Clean Git workflows" },
    { icon: Database, label: "Data Driven", desc: "Efficient data handling" },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary/30">
            <Cpu className="w-3 h-3 mr-1" />
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500">
              Capabilities
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From low-level hardware programming to high-level web applications,
            I bring a comprehensive skill set to every project.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(categoryConfig) as CategoryKey[]).map((category) => {
            const cat = categoryConfig[category]
            const CatIcon = cat.icon
            const isActive = activeCategory === category
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg scale-105`
                    : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50"
                }`}
              >
                <CatIcon className="w-4 h-4" />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Skills Display - Badges without percentages */}
        <Card className={`border border-border/50 mb-16 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${config.gradient}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl">{config.label}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className={`px-4 py-2 text-sm font-medium ${config.color} border-current/30 ${config.bgColor} hover:scale-105 transition-all duration-300 cursor-default ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 30}ms` : "0ms",
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Highlights Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, index) => {
            const HIcon = item.icon
            return (
              <div
                key={item.label}
                className={`p-5 rounded-xl bg-card/50 border border-border/50 text-center hover:border-secondary/30 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${(skills.length + index) * 50}ms` : "0ms",
                }}
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r from-secondary/20 to-accent/20 flex items-center justify-center">
                  <HIcon className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Find More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/30" asChild>
            <Link href="/skills">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
