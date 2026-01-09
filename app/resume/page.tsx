"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Cpu,
  Smartphone,
  Calendar,
  FileText,
  ArrowRight,
  Globe
} from "lucide-react"
import { personalInfo, experiences, education, technicalSkills } from "@/lib/data"
import Link from "next/link"
import TechBackground from "@/components/TechBackground"

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("experience")

  const skillCategories = [
    { key: "embedded", label: "Embedded", icon: Cpu, color: "text-cyan-500" },
    { key: "web", label: "Web", icon: Globe, color: "text-orange-500" },
    { key: "mobile", label: "Mobile", icon: Smartphone, color: "text-purple-500" },
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
              <FileText className="w-3 h-3 mr-1" />
              Curriculum Vitae
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
                Resume
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive overview of my professional journey, education, skills, and achievements
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/30" asChild>
              <a href={personalInfo.resume} download>
                <Download className="mr-2 h-5 w-5" />
                Download Full CV (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all group">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/20 group-hover:bg-secondary transition-colors">
                  <Mail className="h-5 w-5 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium truncate">{personalInfo.email}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all group">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium truncate">{personalInfo.phone}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all group">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary transition-colors">
                  <MapPin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium truncate">{personalInfo.location}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all group">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500 transition-colors">
                  <Github className="h-5 w-5 text-green-500 group-hover:text-white" />
                </div>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="min-w-0 hover:text-secondary transition-colors">
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium truncate flex items-center gap-1">
                    Profile <ExternalLink className="h-3 w-3" />
                  </p>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 bg-card border-2 border-secondary/20 p-1 mb-12">
              <TabsTrigger 
                value="experience" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent data-[state=active]:text-white"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger 
                value="education"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent data-[state=active]:text-white"
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Education
              </TabsTrigger>
              <TabsTrigger 
                value="skills"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-secondary data-[state=active]:to-accent data-[state=active]:text-white"
              >
                <Code className="mr-2 h-4 w-4" />
                Skills
              </TabsTrigger>
            </TabsList>

            {/* Experience Tab */}
            <TabsContent value="experience" className="mt-0">
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <Card key={exp.id} className="border-2 border-secondary/20 overflow-hidden hover:border-secondary transition-all">
                    <div className="flex">
                      <div className="w-1 bg-gradient-to-b from-secondary to-accent" />
                      
                      <div className="flex-1 p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                            <p className="text-secondary font-medium">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Award className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="mt-0">
              <div className="space-y-6">
                {education.map((edu) => (
                  <Card key={edu.id} className="border-2 border-secondary/20 overflow-hidden hover:border-secondary transition-all">
                    <div className="flex">
                      <div className="w-1 bg-gradient-to-b from-accent to-secondary" />
                      
                      <div className="flex-1 p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                            <p className="text-accent font-medium">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground">{edu.field}</p>
                          </div>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.period}
                          </Badge>
                        </div>
                        
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Award className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="mt-0">
              <div className="space-y-8">
                {skillCategories.map((category) => {
                  const skills = technicalSkills[category.key as keyof typeof technicalSkills]
                  if (!skills) return null
                  
                  const Icon = category.icon
                  
                  return (
                    <Card key={category.key} className="border-2 border-secondary/20">
                      <CardHeader className="flex flex-row items-center gap-3 pb-4">
                        <div className={`p-2 rounded-lg bg-secondary/20`}>
                          <Icon className={`h-5 w-5 ${category.color}`} />
                        </div>
                        <CardTitle>{category.label}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <Badge
                              key={skill.name}
                              variant="outline"
                              className={`${category.color} border-current/30 bg-secondary/10 px-3 py-1 cursor-default`}
                            >
                              {skill.name}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Interested in Working Together?</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-secondary to-accent" asChild>
              <Link href="/#contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-secondary" asChild>
              <Link href="/projects">
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
