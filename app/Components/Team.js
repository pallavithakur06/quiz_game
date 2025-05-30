"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Award, Coffee, Heart } from "lucide-react"

export default function Team() {
  const router = useRouter()

  const teamMembers = [
    {
      name: "Aniket Saha",
      role: "Developer",
      image: "/aniket.jpeg",
      bio: "A student at LPU, Aniket founded PaQuiz to make learning about life’s values fun, meaningful, and accessible for every child.",
      achievements: "LPU Education",
      social: {
        linkedin: "https://www.linkedin.com/in/aniketsaha2005/",
        twitter: "https://x.com/AniketSaha41043",
        github: "https://github.com/Aniket-a14",
      },
    },
    {
      name: "Pallavi Thakur",
      role: "Cloud Architect",
      image: "/pallavi.jpeg",
      bio: "Pallavi is a cloud architect with a passion for building secure and efficient systems that empower educators and students alike.",
      achievements: "LPU Education",
      social: {
        linkedin: "https://www.linkedin.com/in/pallavi-thakur-880a83294/",
        twitter: "https://x.com/Pallavi41327610",
        github: "https://github.com/pallavithakur06",
      },
    },
  ]

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-rose-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-100/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-red-200/50 dark:border-red-400/30 mb-8 shadow-lg">
            <Heart className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
            <span className="text-red-700 dark:text-red-300 text-sm font-medium">Meet Our Team</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-800 dark:from-gray-100 to-gray-600 dark:to-gray-300 bg-clip-text text-transparent">
              The Caring Team Behind
            </span>{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">PAQuiz</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re a passionate group of developers working together to create the safest and most engaging learning experience for kids.
          </p>
        </div>

        {/* Team Cards */}
        <div className="flex justify-center flex-wrap gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group max-w-xs"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-red-200/50 dark:border-red-400/30 hover:border-red-300/50 dark:hover:border-red-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/80 dark:hover:bg-gray-800/80 shadow-lg hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name}'s profile photo`}
                    width={800}
                    height={800}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Achievement Badge */}
                  <div className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full p-2 border border-red-200/50 dark:border-red-400/30 shadow-lg">
                    <Award className="h-4 w-4 text-yellow-600" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-red-600 dark:text-red-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <Coffee className="h-3 w-3 mr-1" />
                    {member.achievements}
                  </div>

                  <div className="flex space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      if (!url) return null

                      const Icon = { linkedin: Linkedin, twitter: Twitter, github: Github }[platform]
                      const hoverColors = {
                        linkedin: "hover:text-blue-600",
                        twitter: "hover:text-sky-500",
                        github: "hover:text-gray-800",
                      }

                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-gray-400 ${hoverColors[platform]} transition-all duration-300 hover:scale-110`}
                          aria-label={`${member.name}'s ${platform}`}
                        >
                          {Icon ? <Icon className="h-5 w-5" /> : <span>{platform}</span>}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-r from-red-100/80 via-white/80 to-red-100/80 dark:from-gray-800/80 dark:via-gray-700/80 dark:to-gray-800/80 rounded-3xl p-12 backdrop-blur-xl border border-red-200/50 dark:border-red-400/30 shadow-2xl"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Want to Join Our Mission?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We&apos;re always looking for passionate educators, developers, and child advocates who share our mission of making learning fun, safe, and accessible for every child.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => router.push("/careers")}
                  className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  View Open Positions
                </button>
                <button
                  onClick={() => router.push("/mission")}
                  className="border-2 border-red-400/50 text-red-600 hover:bg-red-50 hover:border-red-500 px-8 py-4 rounded-xl font-medium transition-all duration-300"
                >
                  Learn About Our Mission
                </button>
              </div>

              <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-2 text-red-500" />
                  Child-focused
                </div>
                <div className="flex items-center">
                  <Coffee className="h-4 w-4 mr-2 text-yellow-600" />
                  Great benefits
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-green-600" />
                  Make a difference
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
