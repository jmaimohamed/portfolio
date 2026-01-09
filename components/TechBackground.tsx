"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  type: "circle" | "square" | "code"
  opacity: number
  pulseSpeed: number
  pulseOffset: number
}

interface Connection {
  from: number
  to: number
  opacity: number
}

const codeSymbols = ["</>", "{}", "[]", "()", "01", "//", "&&", "||", "=>", "++", "##", "$$"]

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const connectionsRef = useRef<Connection[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const colors = [
      "rgba(34, 211, 238, ", // cyan-400
      "rgba(251, 146, 60, ", // orange-400
      "rgba(167, 139, 250, ", // purple-400
      "rgba(74, 222, 128, ", // green-400
    ]

    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      particlesRef.current = []

      for (let i = 0; i < particleCount; i++) {
        const types: ("circle" | "square" | "code")[] = ["circle", "square", "code"]
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: types[Math.floor(Math.random() * types.length)],
          opacity: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawCircuitLines = (time: number) => {
      ctx.strokeStyle = "rgba(34, 211, 238, 0.03)"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 60) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        for (let x = 0; x < canvas.width; x += 30) {
          const offset = Math.sin((x + time * 0.5) * 0.01) * 5
          ctx.lineTo(x, y + offset)
        }
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 60) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        for (let y = 0; y < canvas.height; y += 30) {
          const offset = Math.cos((y + time * 0.5) * 0.01) * 5
          ctx.lineTo(x + offset, y)
        }
        ctx.stroke()
      }
    }

    const drawParticle = (p: Particle, time: number) => {
      const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.3 + 0.7
      const opacity = p.opacity * pulse

      ctx.fillStyle = p.color + opacity + ")"
      ctx.strokeStyle = p.color + opacity * 0.5 + ")"

      if (p.type === "circle") {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2)
        ctx.fill()
        
        // Glow effect
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * pulse * 2, 0, Math.PI * 2)
        ctx.strokeStyle = p.color + opacity * 0.2 + ")"
        ctx.stroke()
      } else if (p.type === "square") {
        const size = p.size * pulse * 2
        ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size)
        
        // Border glow
        ctx.strokeStyle = p.color + opacity * 0.3 + ")"
        ctx.strokeRect(p.x - size, p.y - size, size * 2, size * 2)
      } else if (p.type === "code") {
        ctx.font = `${8 + p.size * 2}px monospace`
        ctx.fillStyle = p.color + opacity + ")"
        const symbol = codeSymbols[Math.floor(p.x + p.y) % codeSymbols.length]
        ctx.fillText(symbol, p.x, p.y)
      }
    }

    const drawConnections = () => {
      const particles = particlesRef.current
      const connectionDistance = 120

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }

        // Mouse interaction
        const dx = particles[i].x - mouseRef.current.x
        const dy = particles[i].y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const opacity = (1 - distance / 150) * 0.3
          ctx.beginPath()
          ctx.strokeStyle = `rgba(251, 146, 60, ${opacity})`
          ctx.lineWidth = 1
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.stroke()
        }
      }
    }

    const updateParticles = () => {
      const particles = particlesRef.current

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Mouse repulsion
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100 && distance > 0) {
          const force = (100 - distance) / 100
          p.vx += (dx / distance) * force * 0.2
          p.vy += (dy / distance) * force * 0.2
        }

        // Damping
        p.vx *= 0.99
        p.vy *= 0.99
      })
    }

    const drawBinaryRain = (time: number) => {
      ctx.font = "10px monospace"
      ctx.fillStyle = "rgba(34, 211, 238, 0.03)"
      
      for (let x = 0; x < canvas.width; x += 40) {
        const offset = (time * 0.05 + x) % canvas.height
        for (let y = 0; y < canvas.height; y += 20) {
          const char = Math.random() > 0.5 ? "1" : "0"
          const yPos = (y + offset) % canvas.height
          ctx.fillText(char, x, yPos)
        }
      }
    }

    const drawHexGrid = (time: number) => {
      ctx.strokeStyle = "rgba(167, 139, 250, 0.02)"
      ctx.lineWidth = 0.5

      const hexSize = 40
      const hexHeight = hexSize * Math.sqrt(3)
      
      for (let row = -1; row < canvas.height / hexHeight + 1; row++) {
        for (let col = -1; col < canvas.width / (hexSize * 1.5) + 1; col++) {
          const x = col * hexSize * 1.5
          const y = row * hexHeight + (col % 2 ? hexHeight / 2 : 0)
          
          const pulse = Math.sin(time * 0.001 + col * 0.1 + row * 0.1) * 0.5 + 0.5
          ctx.strokeStyle = `rgba(167, 139, 250, ${0.02 + pulse * 0.02})`
          
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + Math.PI / 6
            const hx = x + hexSize * Math.cos(angle)
            const hy = y + hexSize * Math.sin(angle)
            if (i === 0) ctx.moveTo(hx, hy)
            else ctx.lineTo(hx, hy)
          }
          ctx.closePath()
          ctx.stroke()
        }
      }
    }

    const animate = (time: number) => {
      ctx.fillStyle = "rgba(10, 15, 30, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw background elements
      drawHexGrid(time)
      drawCircuitLines(time)
      drawBinaryRain(time)

      // Draw connections
      drawConnections()

      // Update and draw particles
      updateParticles()
      particlesRef.current.forEach((p) => drawParticle(p, time))

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    
    resizeCanvas()
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMounted])

  // Don't render anything on server to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1526 50%, #0a1628 100%)" }}
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1526 50%, #0a1628 100%)" }}
    />
  )
}
