"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play, Trophy, Users, Clock, Star, Zap, Target } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingIcons = [
    { icon: Star, delay: "0s", duration: "6s" },
    { icon: Zap, delay: "2s", duration: "8s" },
    { icon: Target, delay: "4s", duration: "7s" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.15), transparent 40%)`,
          }}
        ></div>

        {/* Floating Elements */}
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon
          return (
            <div
              key={index}
              className="absolute text-red-300/40"
              style={{
                left: `${20 + index * 30}%`,
                top: `${30 + index * 20}%`,
                animation: `float ${item.duration} ease-in-out infinite`,
                animationDelay: item.delay,
              }}
            >
              <IconComponent className="h-8 w-8" />
            </div>
          )
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-red-200/50 dark:border-red-400/30 mb-8 shadow-lg">
            <Star className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-red-700 dark:text-red-300 text-sm font-medium">
              The Ultimate Quiz Experience for Kids
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span
              className="block bg-gradient-to-r from-gray-800 dark:from-gray-100 to-gray-600 dark:to-gray-300 bg-clip-text text-transparent"
              style={{ animation: "fadeInUp 1s ease-out" }}
            >
              Welcome to
            </span>
            <span
              className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent"
              style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}
            >
              PAQuiz
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            style={{ animation: "fadeInUp 1s ease-out 0.6s both" }}
          >
            Because teaching kids the difference between good and bad isn't just education it's
            <span className="text-red-600 font-semibold">  protection, empowerment, </span>
            and preparation for life!
          </p>
        </div>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8" style={{ animation: "slideInLeft 1s ease-out 0.9s both" }}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                Help Children Learn About
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  {" "}
                  Right and Wrong
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Through engaging quizzes and thoughtful scenarios, kids explore values like honesty, kindness, safety, and awareness. PaQuiz makes learning about the good and bad in society simple, fun, and meaningful for young minds.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Trophy, label: "Leaderboards", color: "text-yellow-600" },
                { icon: Users, label: "Play with Friends", color: "text-green-600" },
                { icon: Clock, label: "Fun Challenges", color: "text-blue-600" },
              ].map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-red-200/50 dark:border-red-400/30 shadow-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group"
                    style={{ animation: `fadeInUp 0.6s ease-out ${1.2 + index * 0.2}s both` }}
                  >
                    <IconComponent
                      className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{feature.label}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="Components/quiz-game">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white text-lg px-8 py-4 shadow-xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 border-0"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Learning Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative" style={{ animation: "slideInRight 1s ease-out 0.9s both" }}>
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Quiz Game Illustration"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-red-600/10 rounded-3xl"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-r from-red-200/60 to-red-300/60 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-8 -left-8 w-72 h-72 bg-gradient-to-r from-red-300/60 to-pink-300/60 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Floating Stats */}
            <div className="absolute top-8 -left-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-4 border border-red-200/50 dark:border-red-400/30 shadow-xl">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Questions</div>
            </div>

            <div className="absolute bottom-8 -right-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-4 border border-red-200/50 dark:border-red-400/30 shadow-xl">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
