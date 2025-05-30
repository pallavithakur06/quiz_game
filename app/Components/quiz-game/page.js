"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Trophy, Star, Zap, Award } from "lucide-react"

const baseLevels = [
  {
    title: "Level 1: Safety Scout",
    description: "Learn the basics of personal safety, good touch and bad touch, and who to trust.",
    color: "from-green-400 to-green-600",
    icon: Star,
    href: "/Components/quiz-game/level1",
  },
  {
    title: "Level 2: Awareness Adventurer",
    description: "Identify unsafe situations, understand emotions, and practice saying 'No' when needed.",
    color: "from-blue-400 to-blue-600",
    icon: Zap,
    href: "/Components/quiz-game/level2",
  },
  {
    title: "Level 3: Trustworthy Trailblazer",
    description: "Dive deeper into topics like online safety, bullying, and making safe decisions.",
    color: "from-yellow-400 to-orange-500",
    icon: Trophy,
    href: "/Components/quiz-game/level3",
  },
  {
    title: "Level 4: Courageous Champion",
    description: "Answer challenging scenarios requiring courage, honesty, and emotional strength.",
    color: "from-red-500 to-red-700",
    icon: Award,
    href: "/Components/quiz-game/level4",
  },
  {
    title: "Level 5: Safety Superhero",
    description: "Final test! Apply everything you’ve learned to become a real-life safety superhero.",
    color: "from-purple-500 to-purple-700",
    icon: Award,
    href: "/Components/quiz-game/level5",
  },
];


export default function QuizGameLevels() {
  const [unlocked, setUnlocked] = useState(1)

  useEffect(() => {
    // Check localStorage for progress
    const progress = parseInt(localStorage.getItem("quiz-progress") || "1", 10)
    setUnlocked(progress)
  }, [])

  // Helper to determine if a level is disabled
  const getLevels = () =>
    baseLevels.map((level, idx) => ({
      ...level,
      disabled: idx + 1 > unlocked,
    }))

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          Choose Your Quiz Level
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Progress through fun and challenging levels. Unlock new adventures as you learn!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {getLevels().map((level, idx) => {
          const Icon = level.icon
          return (
            <div
              key={level.title}
              className={`relative group rounded-3xl p-8 shadow-xl border border-red-200/50 dark:border-red-400/30 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl
                bg-gradient-to-r ${level.color} ${level.disabled ? "opacity-60 cursor-not-allowed" : "hover:opacity-100"}
              `}
            >
              <div className="flex items-center mb-4">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/80 shadow-lg mr-4`}>
                  <Icon className={`h-8 w-8 text-red-600`} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{level.title}</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{level.description}</p>
              {level.disabled ? (
                <button
                  disabled
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-gray-400 cursor-not-allowed shadow-lg"
                >
                  Locked
                </button>
              ) : (
                <Link href={level.href}>
                  <button
                    className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-500 to-red-700 shadow-lg transition-all duration-300 hover:from-red-400 hover:to-red-600 hover:scale-105"
                  >
                    Start Level
                  </button>
                </Link>
              )}
              {level.disabled && (
                <div className="absolute top-4 right-4 text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold shadow">
                  Coming Soon
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}