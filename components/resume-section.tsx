"use client"

import { useState } from "react"
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
  ArrowRight
} from "lucide-react"
import { personalInfo, experiences, education, hardSkills, softSkills } from "@/lib/data"
import Link from "next/link"

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-background to-card/30 border-t-2 border-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
              Resume
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional journey, skills, and achievements
          </p>
          
          {/* Download Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/30 transition-all"
            asChild
          >
            <a href={personalInfo.resume} download>
              <Download className="mr-2 h-5 w-5" />
              Download Full CV (PDF)
            </a>
          </Button>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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
              <div className="min-w-0">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium truncate flex items-center gap-1">
                    Profile <ExternalLink className="h-3 w-3" />
                  </p>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-xl mx-auto grid grid-cols-3 bg-card border-2 border-secondary/20 p-1 mb-8">
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
              {experiences.map((exp, idx) => (
                <Card key={exp.id} className="border-2 border-secondary/20 overflow-hidden hover:border-secondary transition-all">
                  <div className="flex">
                    {/* Timeline indicator */}
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
                      
                      {edu.achievements && (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <GraduationCap className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
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
            <div className="grid md:grid-cols-2 gap-6">
              {/* Programming Languages */}
              <Card className="border-2 border-cyan-500/30 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-transparent border-b border-cyan-500/20">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="p-2 rounded-lg bg-cyan-500/20">
                      <Code className="h-5 w-5 text-cyan-500" />
                    </div>
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {hardSkills.programmingLanguages.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-cyan-400 border-cyan-400/30 bg-cyan-500/10 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Embedded Systems & IoT */}
              <Card className="border-2 border-orange-500/30 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-500/10 to-transparent border-b border-orange-500/20">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="p-2 rounded-lg bg-orange-500/20">
                      <Cpu className="h-5 w-5 text-orange-500" />
                    </div>
                    Embedded Systems & IoT
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {hardSkills.embeddedAndIoT.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-orange-400 border-orange-400/30 bg-orange-500/10 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Web & Mobile */}
              <Card className="border-2 border-secondary/30 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-secondary/10 to-transparent border-b border-secondary/20">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="p-2 rounded-lg bg-secondary/20">
                      <Smartphone className="h-5 w-5 text-secondary" />
                    </div>
                    Web & Mobile
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {hardSkills.webAndMobile.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-cyan-400 border-cyan-400/30 bg-cyan-500/10 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* DevOps & Automation */}
              <Card className="border-2 border-emerald-500/30 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-emerald-500/10 to-transparent border-b border-emerald-500/20">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="p-2 rounded-lg bg-emerald-500/20">
                      <Code className="h-5 w-5 text-emerald-500" />
                    </div>
                    DevOps & Automation
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {hardSkills.devopsAndAutomation.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-emerald-400 border-emerald-400/30 bg-emerald-500/10 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FPGA & Hardware */}
              <Card className="border-2 border-purple-500/30 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-500/10 to-transparent border-b border-purple-500/20">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Cpu className="h-5 w-5 text-purple-500" />
                    </div>
                    FPGA & Hardware
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {hardSkills.fpgaAndHardware.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-purple-400 border-purple-400/30 bg-purple-500/10 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Databases & Cloud */}
              <Card className="border-2 border-pink-500/30 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-pink-500/10 to-transparent border-b border-pink-500/20">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="p-2 rounded-lg bg-pink-500/20">
                      <Code className="h-5 w-5 text-pink-500" />
                    </div>
                    Databases & Cloud
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {[...hardSkills.databases, ...hardSkills.monitoringAndCloud].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-pink-400 border-pink-400/30 bg-pink-500/10 px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Soft Skills */}
            <Card className="mt-6 border-2 border-accent/30">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-transparent border-b border-accent/20">
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  Soft Skills & Competencies
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Professional Mindset */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Professional Mindset</h4>
                    <div className="flex flex-wrap gap-2">
                      {softSkills.professionalMindset.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-accent border-accent/30 bg-accent/10">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* Collaboration */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Collaboration</h4>
                    <div className="flex flex-wrap gap-2">
                      {softSkills.collaboration.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-secondary border-secondary/30 bg-secondary/10">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* Productivity */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3">Productivity</h4>
                    <div className="flex flex-wrap gap-2">
                      {softSkills.productivity.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-emerald-400 border-emerald-400/30 bg-emerald-500/10">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Connect with me</p>
          <div className="flex justify-center gap-4">
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-all"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border-2 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          {/* Find More Button */}
          <div className="mt-8">
            <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/30" asChild>
              <Link href="/resume">
                View Full Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
