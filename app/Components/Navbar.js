"use client"

import { useState, useEffect } from "react"
import { Menu, X, Brain, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./Theme-toggle"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-red-200/50 dark:border-red-400/30 shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <a href="#home">
                <Brain className="h-10 w-10 text-red-600 group-hover:text-red-500 transition-all duration-300 group-hover:scale-110" />
                <Sparkles className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
              </a>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              PAQuiz
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "FAQ", "Contact", "Team"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 group py-2 font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="Components/quiz-game">
            <Button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white border-0 shadow-lg hover:shadow-red-500/25 transition-all duration-300 hover:scale-105">
              <Sparkles className="mr-2 h-4 w-4" />
              Start Learning
            </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-red-200/50 dark:border-red-400/30 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col space-y-4">
              {["Home", "About", "FAQ", "Contact", "Team"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors px-4 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animation: `slideInLeft 0.3s ease-out ${index * 100}ms both`,
                  }}
                >
                  {item}
                </a>
              ))}
              <div className="px-4 py-2">
                <ThemeToggle />
              </div>
              <Button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white mx-4 mt-4">
                <Sparkles className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
