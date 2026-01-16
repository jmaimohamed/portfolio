"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Cpu, Code2, Smartphone, ChevronDown, Sparkles, Terminal, Zap } from "lucide-react"
import TechBackground from "./TechBackground"
import { personalInfo } from "@/lib/data"

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [typedText, setTypedText] = useState("")
  
  const roles = [
    "Embedded Systems Engineer",
    "Full-Stack Developer", 
    "Mobile App Developer",
    "IoT Specialist"
  ]

  const fullName = personalInfo.name

  useEffect(() => {
    setIsMounted(true)
    setIsVisible(true)
    
    // Typing effect for name
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)

    // Role cycling
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => {
      clearInterval(typeInterval)
      clearInterval(roleInterval)
    }
  }, [])

  // Display static content for SSR, animated content after mount
  const displayName = isMounted ? typedText : fullName
  const displayRole = roles[currentRole]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Tech Background */}
      <TechBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-center">
            {/* Left: Copy */}
            <div>
          {/* Welcome Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-orange-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-400">Welcome to my portfolio</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-muted-foreground mb-2 font-light">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-orange-400">
                {displayName}
              </span>
              {isMounted && <span className="animate-pulse text-cyan-400">|</span>}
            </h1>
          </div>

          {/* Animated Role */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <div className="relative overflow-hidden h-10">
              <div 
                className="transition-transform duration-500"
                style={{ transform: `translateY(-${currentRole * 40}px)` }}
              >
                {roles.map((role, idx) => (
                  <div 
                    key={role}
                    className="h-10 flex items-center text-xl md:text-2xl font-semibold text-orange-400"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I transform ideas into reality by bridging{" "}
            <span className="text-cyan-400 font-medium">hardware</span> and{" "}
            <span className="text-orange-400 font-medium">software</span>. 
            From programming microcontrollers to building scalable web & mobile applications, 
            I deliver end-to-end solutions that make an impact.
          </p>

          {/* Expertise Cards */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl">
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-3 group-hover:bg-cyan-500/30 transition-colors">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-xs font-medium text-cyan-400">Embedded</p>
              <p className="text-xs text-muted-foreground">STM32 • ESP32</p>
            </div>
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center mb-3 group-hover:bg-orange-500/30 transition-colors">
                <Code2 className="w-5 h-5 text-orange-400" />
              </div>
              <p className="text-xs font-medium text-orange-400">Full-Stack</p>
              <p className="text-xs text-muted-foreground">React • Node.js</p>
            </div>
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3 group-hover:bg-purple-500/30 transition-colors">
                <Smartphone className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-xs font-medium text-purple-400">Mobile</p>
              <p className="text-xs text-muted-foreground">React Native</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-orange-500 hover:shadow-lg hover:shadow-cyan-500/25 text-white text-lg px-8 py-6 rounded-2xl h-auto border-0"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Explore My Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border border-cyan-500/30 text-foreground hover:bg-cyan-500/10 hover:border-cyan-500/50 text-lg px-8 py-6 rounded-2xl h-auto bg-background/50 backdrop-blur-sm"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Find me on</span>
            <div className="h-px w-8 bg-border" />
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card/50 border border-border/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-muted-foreground hover:text-cyan-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card/50 border border-border/50 hover:border-orange-500/50 hover:bg-orange-500/10 text-muted-foreground hover:text-orange-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-card/50 border border-border/50 hover:border-purple-500/50 hover:bg-purple-500/10 text-muted-foreground hover:text-purple-400 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
            </div>

            {/* Right: Profile photo */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/10 via-orange-500/10 to-purple-500/10 blur-2xl rounded-full" />
              <div className="relative rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm p-6">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-cyan-500/20">
                  <Image
                    src={personalInfo.photo}
                    alt={`${personalInfo.name} profile photo`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 360px, 0px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-foreground">{personalInfo.name}</p>
                  <p className="text-xs text-muted-foreground">{personalInfo.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <a 
            href="#about" 
            className="p-2 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all duration-300"
          >
            <ChevronDown className="w-5 h-5 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  )
}
