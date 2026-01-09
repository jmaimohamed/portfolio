import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jemai Mohamed | Embedded Systems & Full-Stack Developer",
  description: "Portfolio of Jemai Mohamed - Embedded Systems Engineer & Full-Stack Developer. Explore my projects in IoT, firmware, web and mobile development.",
  generator: "v0.app",
  icons: {
    icon: "/logo (2).png",
    apple: "/logo (2).png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased dark`}>
        {children}
      </body>
    </html>
  )
}
