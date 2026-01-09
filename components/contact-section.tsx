"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Phone, Github, Linkedin, MapPin, ArrowRight } from "lucide-react"
import { personalInfo } from "@/lib/data"
import Link from "next/link"

export function ContactSection() {
  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      icon: Phone,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      icon: MapPin,
      title: "Location",
      value: personalInfo.location,
      href: "#",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
  ]

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-secondary border-secondary/30">
            <MessageSquare className="w-3 h-3 mr-1" />
            Contact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500">
              Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have an embedded systems project or full-stack application in mind?
            I'd love to hear about it. Let's build something amazing together.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <a key={card.title} href={card.href}>
                <Card className="h-full border border-border/50 hover:border-secondary/50 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-secondary/5">
                  <CardHeader className="flex flex-row items-center gap-4 py-6">
                    <div className={`p-4 rounded-xl ${card.bg}`}>
                      <Icon className={`${card.color}`} size={24} />
                    </div>
                    <div>
                      <CardDescription className="text-xs uppercase tracking-wider">{card.title}</CardDescription>
                      <CardTitle className="text-base font-medium group-hover:text-secondary transition-colors">
                        {card.value}
                      </CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              </a>
            )
          })}
        </div>

        {/* Social Links & Availability */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* Social Links Card */}
          <Card className="border border-border/50 hover:border-secondary/50 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">Connect on Social</CardTitle>
              <CardDescription>Follow me on social media</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border/50 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
                    >
                      <Icon size={20} />
                      <span className="font-medium">{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Availability Card */}
          <Card className="border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                </div>
                <CardTitle className="text-lg font-semibold text-emerald-400">Available for Projects</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground mb-4">
                I'm currently open to freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your ideas to life.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">Freelance</Badge>
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">Full-time</Badge>
                <Badge variant="outline" className="border-orange-500/30 text-orange-400">Remote</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Find More Button */}
        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-600 hover:to-orange-600 text-white group">
              Go to Full Contact Page
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
