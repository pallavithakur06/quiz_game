"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-red-200/50 dark:border-red-400/30 hover:border-red-300/50 dark:hover:border-red-400/50 transition-all duration-300 hover:scale-110 shadow-lg group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 h-6 w-6 text-yellow-500 transition-all duration-500 ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
        />
        <Moon
          className={`absolute inset-0 h-6 w-6 text-blue-400 transition-all duration-500 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
        />
      </div>
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {isDark ? "Light mode" : "Dark mode"}
      </div>
    </button>
  )
}