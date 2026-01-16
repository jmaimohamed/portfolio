"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Code2, Home, User, Briefcase, Mail, Cpu, FileText, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: User },
    { label: "Skills", href: "/skills", icon: Cpu },
    { label: "Projects", href: "/projects", icon: Briefcase },
    { label: "Resume", href: "/resume", icon: FileText },
    { label: "Knowledge", href: "/knowledge", icon: BookOpen },
    { label: "Contact", href: "/contact", icon: Mail },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-6",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div 
        className={cn(
          "max-w-5xl mx-auto rounded-2xl transition-all duration-300",
          scrolled 
            ? "bg-background/80 backdrop-blur-md border border-border/50 shadow-lg shadow-black/5" 
            : "bg-transparent border-transparent"
        )}
      >
        <div className="h-16 px-4 md:px-6 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="justify-center transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo (2).png"
                  alt="JM Logo" 
                  width={48} 
                  height={48} 
                  className="rounded-lg"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 bg-background/40 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground transition-all group overflow-hidden hover:bg-background/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 pl-4">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors text-foreground/80"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-2 mx-2">
             <div className="rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl p-2 flex flex-col gap-1 overflow-hidden animate-in slide-in-from-top-2 fade-in duration-200">
               {navItems.map((item) => (
                 <Link
                   key={item.href}
                   href={item.href}
                   onClick={() => setIsOpen(false)}
                   className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/10 transition-colors group"
                 >
                   <div className="p-2 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                     <item.icon size={20} />
                   </div>
                   <span className="font-medium text-foreground/90 group-hover:text-foreground">{item.label}</span>
                 </Link>
               ))}
             </div>
          </div>
        )}
      </div>
    </nav>
  )
}
