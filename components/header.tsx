"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"

const Header = () => {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
        <span className="text-2xl font-extrabold gradient-text animate-gradient-text hover:opacity-80 transition-opacity">HUM SOPHA</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        </svg>
      </button>

      {/* Desktop and Mobile Navigation */}
      <nav className={`md:flex items-center space-x-6 text-sm font-medium ${
        isOpen 
        ? "absolute top-14 left-0 right-0 bg-background border-b border-border/40 p-4 flex flex-col space-y-4 md:space-y-0"
        : "hidden"
      }`}>
        <div className="flex md:flex-row flex-col w-full md:w-auto">
        {navItems.map((item) => (
          <Link
          key={item.href}
          href={item.href}
          className={`px-4 py-2 transition-colors hover:text-foreground/80 ${
            pathname === item.href
            ? "text-foreground"
            : "text-foreground/60"
          }`}
          onClick={() => setIsOpen(false)}
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
