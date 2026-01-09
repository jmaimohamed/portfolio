'use client';

import { useEffect, useRef } from 'react';

interface LiquidEtherProps {
  mouseForce?: number;
  cursorSize?: number;
  resolution?: number;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
}

// Particle class for fluid simulation
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: { r: number; g: number; b: number };
  size: number;

  constructor(
    x: number,
    y: number,
    vx: number,
    vy: number,
    color: { r: number; g: number; b: number },
    size: number
  ) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.life = 1.0;
    this.color = color;
    this.size = size;
  }

  update(damping: number) {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= damping;
    this.vy *= damping;
    this.life *= 0.99;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const alpha = this.life * 0.6;
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    gradient.addColorStop(0, `rgba(${Math.round(this.color.r * 255)}, ${Math.round(this.color.g * 255)}, ${Math.round(this.color.b * 255)}, ${alpha})`);
    gradient.addColorStop(1, `rgba(${Math.round(this.color.r * 255)}, ${Math.round(this.color.g * 255)}, ${Math.round(this.color.b * 255)}, 0)`);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function LiquidEther({
  mouseForce = 20,
  cursorSize = 150,
  resolution = 0.5,
  autoDemo = true,
  autoSpeed = 0.3,
  autoIntensity = 2,
}: LiquidEtherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const animationIdRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    
    if (!ctx) {
      console.error('Canvas 2D not supported');
      return;
    }

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();

    // Get theme colors from CSS variables
    const getThemeColor = (variable: string): { r: number; g: number; b: number } => {
      const color = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
      
      if (color.startsWith('#')) {
        const hex = color.slice(1);
        const r = parseInt(hex.slice(0, 2), 16) / 255;
        const g = parseInt(hex.slice(2, 4), 16) / 255;
        const b = parseInt(hex.slice(4, 6), 16) / 255;
        return { r, g, b };
      }
      
      // Parse HSL
      const hsl = color.match(/[\d.]+/g);
      if (hsl && hsl.length >= 3) {
        const h = parseFloat(hsl[0]) / 360;
        const s = parseFloat(hsl[1]) / 100;
        const l = parseFloat(hsl[2]) / 100;
        
        // HSL to RGB conversion
        const hue2rgb = (p: number, q: number, t: number) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1/6) return p + (q - p) * 6 * t;
          if (t < 1/2) return q;
          if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
        };
        
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        
        return {
          r: hue2rgb(p, q, h + 1/3),
          g: hue2rgb(p, q, h),
          b: hue2rgb(p, q, h - 1/3)
        };
      }
      
      return { r: 0.32, g: 0.15, b: 1.0 }; // Default purple
    };

    const colors = [
      getThemeColor('--primary'),
      getThemeColor('--secondary'),
      getThemeColor('--accent')
    ];

    let time = 0;
    let autoTime = 0;
    const particles = particlesRef.current;

    // Add particles
    const addParticles = (x: number, y: number, vx: number, vy: number, colorIndex: number) => {
      // Scale count based on speed to prevent excessive particles
      const speedMagnitude = Math.sqrt(vx * vx + vy * vy);
      const count = Math.min(3, Math.floor(speedMagnitude * 3) + 1);
      const color = colors[colorIndex % colors.length];
      
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Random spread speed
        const spread = Math.random() * mouseForce * 0.05;
        const size = cursorSize * (0.2 + Math.random() * 0.5);
        
        particles.push(
          new Particle(
            x + (Math.random() - 0.5) * 10, // Slight position jitter
            y + (Math.random() - 0.5) * 10,
            vx * mouseForce * 0.1 + Math.cos(angle) * spread, // Base velocity + spread
            vy * mouseForce * 0.1 + Math.sin(angle) * spread,
            color,
            size
          )
        );
      }
      
      // Limit particle count
      while (particles.length > 200) {
        particles.shift();
      }
    };

    // Animation loop
    const animate = () => {
      time += 0.016;
      
      // Semi-transparent black to create trail effect
      // Increased opacity for shorter/cleaner trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Auto demo mode (only if mouse hasn't moved recently - implicitly handled by motion)
      if (autoDemo) {
        autoTime += 0.016 * autoSpeed;
        const x = (Math.sin(autoTime) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(autoTime * 0.7) * 0.5 + 0.5) * canvas.height;
        const vx = Math.cos(autoTime * 3) * 0.01;
        const vy = Math.sin(autoTime * 3) * 0.01;
        const colorIndex = Math.floor(autoTime * 2);
        
        addParticles(x, y, vx, vy, colorIndex);
      }
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update(0.96); // Increased damping for more responsive feel
        particle.draw(ctx);
        
        // Remove dead particles
        if (particle.life < 0.01) {
          particles.splice(i, 1);
        }
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Initialize properly on first move to avoid jump
      if (mouseRef.current.x === 0 && mouseRef.current.y === 0) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
        return;
      }
      
      const dx = (x - mouseRef.current.x);
      const dy = (y - mouseRef.current.y);
      
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Responsive threshold - react to even small movements
      if (dist > 1) {
        const colorIndex = Math.floor(Math.random() * colors.length);
        // Pass scaled velocity (delta)
        addParticles(x, y, dx * 0.05, dy * 0.05, colorIndex);
      }
      
      mouseRef.current.x = x;
      mouseRef.current.y = y;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', resizeCanvas);
    }

    return () => {
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', resizeCanvas);
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [mouseForce, cursorSize, resolution, autoDemo, autoSpeed, autoIntensity]);

  return (
    <canvas 
      ref={canvasRef}
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        inset: 0,
        pointerEvents: 'none'
      }} 
    />
  );
}
