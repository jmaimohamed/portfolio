"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, Code, Smartphone, Rocket, Target, Lightbulb, ArrowRight } from "lucide-react"
import { personalInfo } from "@/lib/data"
import Link from "next/link"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      description: "Designing firmware and hardware solutions for IoT devices, from PCB design to production-ready code",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern frameworks, APIs, and cloud infrastructure",
      color: "from-secondary to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Creating cross-platform mobile apps that connect seamlessly with IoT devices and backend services",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const values = [
    { icon: Rocket, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
    { icon: Target, title: "Precision", description: "Writing clean, efficient, and maintainable code" },
    { icon: Lightbulb, title: "Problem Solving", description: "Finding elegant solutions to complex challenges" }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card/30 border-t-2 border-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Engineer by training, creator by passion
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content - Bio */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="prose prose-lg prose-invert">
              {personalInfo.about.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {values.map((value, idx) => (
                <div 
                  key={idx}
                  className="text-center p-4 rounded-xl bg-card/50 border border-secondary/20 hover:border-secondary/40 transition-colors"
                >
                  <value.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
                  <h4 className="font-semibold text-sm text-foreground">{value.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {[
              { number: "1+", label: "Years Experience", color: "text-secondary" },
              { number: "10+", label: "Projects Completed", color: "text-accent" },
              { number: "4+", label: "MCU Platforms", color: "text-orange-500" },
              { number: "15+", label: "Technologies", color: "text-purple-500" },
            ].map((stat, idx) => (
              <Card
                key={stat.label}
                className={`border-2 border-secondary/20 overflow-hidden hover:border-secondary transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6 text-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent`} />
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 relative`}>
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground relative">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <Card 
              key={idx}
              className={`border-2 border-secondary/20 overflow-hidden group hover:border-secondary transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} p-0.5 mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <item.icon className="w-7 h-7" style={{ color: item.color.includes('orange') ? '#f97316' : item.color.includes('secondary') ? 'var(--secondary)' : '#a855f7' }} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Find More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/30" asChild>
            <Link href="/about">
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
