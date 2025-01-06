"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"

const Header = () => {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Tech Stack",
      href: "/tech-stack",
    },
    {
      name: "Work",
      href: "/work",
    },
    {
      name: "About",
      href: "/about",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Logo - Left side */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">HUM SOPHA</span>
        </Link>

        {/* Desktop Navigation - Right side */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <div className="hidden md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 transition-colors hover:text-foreground/80 ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Header
