import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "University FYP Digital Library",
  description:
    "A comprehensive digital library for Technical Report Writing course - browse and access student FYP reports",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "SSUET-Official-Logo-final.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "SSUET-Official-Logo-final.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "SSUET-Official-Logo-final.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "SSUET-Official-Logo-final.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
