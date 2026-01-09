"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Cpu, 
  Code, 
  Smartphone, 
  Rocket, 
  Target, 
  Lightbulb,
  User,
  ArrowRight,
  Download,
  Calendar,
  Award,
  Heart,
  Coffee,
  Zap
} from "lucide-react"
import { personalInfo } from "@/lib/data"
import Link from "next/link"
import TechBackground from "@/components/TechBackground"

export default function AboutPage() {
  const highlights = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Designing firmware and hardware solutions for IoT devices, from PCB design to production-ready code. Expert in STM32, ESP32, and various microcontroller platforms.",
      color: "from-orange-500 to-red-500",
      skills: ["STM32", "ESP32", "Arduino", "RTOS", "I2C/SPI/UART"]
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern frameworks, APIs, and cloud infrastructure. Proficient in both frontend and backend technologies.",
      color: "from-cyan-500 to-blue-500",
      skills: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Creating cross-platform mobile apps that connect seamlessly with IoT devices and backend services. Native and hybrid development experience.",
      color: "from-purple-500 to-pink-500",
      skills: ["React Native", "Flutter", "Kotlin", "BLE Integration"]
    }
  ]

  const values = [
    { icon: Rocket, title: "Innovation", description: "Pushing boundaries with cutting-edge technology and creative solutions" },
    { icon: Target, title: "Precision", description: "Writing clean, efficient, and maintainable code with attention to detail" },
    { icon: Lightbulb, title: "Problem Solving", description: "Finding elegant solutions to complex technical challenges" },
    { icon: Heart, title: "Passion", description: "Genuinely enthusiastic about technology and continuous learning" },
    { icon: Coffee, title: "Dedication", description: "Committed to delivering high-quality results on every project" },
    { icon: Zap, title: "Efficiency", description: "Optimizing performance and streamlining development processes" }
  ]

  const timeline = [
    { year: "2020", event: "Started Engineering at ESPRIT", description: "Began Software Engineering with Embedded Systems specialization" },
    { year: "2021", event: "First Embedded Projects", description: "Built IoT devices with STM32 and ESP32 microcontrollers" },
    { year: "2022", event: "Full-Stack Development", description: "Expanded skills into web (React, Spring Boot) and mobile development" },
    { year: "2023", event: "Started Freelancing", description: "Began freelance work in embedded systems and full-stack development" },
    { year: "2024", event: "ACTIA Internship", description: "Embedded Systems internship - automotive diagnostics, CAN/UDS protocols" },
    { year: "2025", event: "Graduated & Continuing Freelance", description: "Engineering degree (1st in class), active freelance developer" }
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
              <User className="w-3 h-3 mr-1" />
              About Me
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Know More{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
                About Me
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineer by training, creator by passion. I bridge the gap between hardware and software 
              to build innovative solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
              <div className="prose prose-lg prose-invert">
                {personalInfo.about.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button className="bg-gradient-to-r from-secondary to-accent" asChild>
                  <a href={personalInfo.resume} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" className="border-secondary" asChild>
                  <Link href="/#contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                 { number: "1+", label: "Years Experience", color: "text-secondary" },
                 { number: "10+", label: "Projects Completed", color: "text-accent" },
                 { number: "4+", label: "MCU Platforms", color: "text-orange-500" },
                 { number: "15+", label: "Technologies", color: "text-purple-500" },
              ].map((stat) => (
                <Card key={stat.label} className="border-2 border-secondary/20 hover:border-secondary transition-all">
                  <CardContent className="p-6 text-center">
                    <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized in bridging the gap between hardware and software with comprehensive skills across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <Card key={idx} className="border-2 border-secondary/20 overflow-hidden group hover:border-secondary transition-all">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
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

      {/* Values Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and professional growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {values.map((value, idx) => (
              <Card key={idx} className="border border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <value.icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-xs text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">My Journey</h2>
            <p className="text-muted-foreground">Key milestones in my professional development</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary" />
            
            {timeline.map((item, idx) => (
              <div key={idx} className={`relative flex items-center mb-8 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="border border-secondary/20 hover:border-secondary transition-colors">
                    <CardContent className="p-4">
                      <Badge className="mb-2 bg-secondary/20 text-secondary">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.year}
                      </Badge>
                      <h4 className="font-bold text-foreground">{item.event}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating on your next embedded systems or full-stack project? 
            I'm always open to discussing new opportunities.
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
