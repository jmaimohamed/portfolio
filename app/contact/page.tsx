"use client"

import type React from "react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Check, 
  Github, 
  Linkedin, 
  MapPin, 
  Send, 
  Clock,
  Calendar,
  ArrowRight
} from "lucide-react"
import { personalInfo } from "@/lib/data"
import Link from "next/link"
import TechBackground from "@/components/TechBackground"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Message sent:", formData)
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "", projectType: "" })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      description: "Best for detailed inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      description: "Available Mon-Fri, 9am-6pm"
    },
    {
      icon: MapPin,
      title: "Location",
      value: personalInfo.location,
      href: "#",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      description: "Open to remote work globally"
    },
  ]

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub", color: "hover:text-white hover:bg-gray-800" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "hover:text-white hover:bg-blue-600" },
  ]

  const projectTypes = [
    "Embedded Systems / IoT",
    "Web Application",
    "Mobile App",
    "Full-Stack Project",
    "Consulting",
    "Other"
  ]

  const faqs = [
    { q: "What's your typical response time?", a: "I usually respond within 24-48 hours on business days." },
    { q: "Do you work with international clients?", a: "Yes! I work with clients globally and am flexible with time zones." },
    { q: "What information should I include?", a: "Project scope, timeline, budget range, and any technical requirements." },
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
              <MessageSquare className="w-3 h-3 mr-1" />
              Contact
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500">
                Connect
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have an embedded systems project or full-stack application in mind?
              I'd love to hear about it. Let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info) => {
              const Icon = info.icon
              return (
                <a key={info.title} href={info.href}>
                  <Card className="border border-border/50 hover:border-secondary/50 transition-all duration-300 group h-full">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-xl ${info.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`${info.color} w-7 h-7`} />
                      </div>
                      <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                      <p className="text-secondary font-medium mb-2">{info.value}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Social Links */}
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Connect on Social</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 transition-all duration-300 ${link.color}`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{link.label}</span>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </a>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                    </div>
                    <span className="font-bold text-foreground">Available for Projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Open to freelance, contract, and full-time opportunities in embedded systems and full-stack development.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Response within 24-48 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Available from January 2026</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQs */}
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Quick FAQs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx}>
                      <p className="font-medium text-sm text-foreground">{faq.q}</p>
                      <p className="text-xs text-muted-foreground mt-1">{faq.a}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-3 border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-secondary" />
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/30 transition-all"
                    disabled={isLoading || submitted}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
