import { BookOpen, Target, Zap, Award, Users, TrendingUp } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: "Educational Fun",
      description: "Discover life lessons through fun quizzes crafted especially for young minds.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Target,
      title: "Skill Building",
      description: "Track your progress and watch yourself improve with detailed performance insights.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Quick & Exciting",
      description: "Enjoy bite-sized quiz sessions that are perfect for kids' attention spans.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Comming soon.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Safe Community",
      description: "Comming soon.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Comming soon.",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-100/30 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-red-200/50 dark:border-red-400/30 mb-8 shadow-lg">
            <Target className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
            <span className="text-red-700 dark:text-red-300 text-sm font-medium">About Our Platform</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-800 dark:from-gray-100 to-gray-600 dark:to-gray-300 bg-clip-text text-transparent">
              Why Choose
            </span>
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"> PAQuiz?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
           PaQuiz is designed to help children learn about the values that matter—kindness, honesty, safety, and awareness—through fun and interactive quizzes. Whether it&apos;s understanding right from wrong or learning how to make better choices, our platform turns important life lessons into an exciting and enjoyable journey!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-red-200/50 dark:border-red-400/30 hover:border-red-300/50 dark:hover:border-red-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/80 dark:hover:bg-gray-800/80 shadow-lg hover:shadow-xl">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-red-100/80 via-white/80 to-red-100/80 dark:from-gray-800/80 dark:via-gray-700/80 dark:to-gray-800/80 rounded-3xl p-12 backdrop-blur-xl border border-red-200/50 dark:border-red-400/30 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Join the Learning Adventure
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Thousands of kids worldwide are already having fun while learning with QuizMaster!
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "25,000+", label: "Happy Kids", icon: Users },
                { number: "100+", label: "Fun Questions", icon: BookOpen },
                { number: "5+", label: "Categories", icon: Target },
                { number: "98%", label: "Fun Rating", icon: Award },
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className="text-center group"
                    style={{ animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-xl mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors">
                      <IconComponent className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
