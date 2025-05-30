"use client"

import { Brain, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ArrowUp, Sparkles, Shield } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Safety", href: "#" },
      { name: "Categories", href: "#" },
      { name: "For Parents", href: "#" },
      { name: "Mobile App", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Child Safety", href: "#" },
    ],
    community: [
      { name: "Parent Forum", href: "#" },
      { name: "Teacher Resources", href: "#" },
      { name: "Safety Guidelines", href: "#" },
      { name: "Events", href: "#" },
      { name: "Newsletter", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100/30 via-transparent to-transparent"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Brain className="h-10 w-10 text-red-600" />
                  <Sparkles className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  PAQuiz
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md leading-relaxed">
                Making understanding and learning safe for kids worldwide. Join thousands of families who trust
                PAQuiz for their children&apos;s safety journey!
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  )
                })}
              </div>

              {/* Safety Badge */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="h-4 w-4 text-green-600" />
                <span>COPPA Compliant & Child-Safe</span>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6 capitalize">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-red-200/50 mt-16 pt-12">
            <div className="bg-gradient-to-r from-red-100/80 via-white/80 to-red-100/80 dark:from-gray-800/80 dark:via-gray-700/80 dark:to-gray-800/80 rounded-3xl p-8 backdrop-blur-xl border border-red-200/50 dark:border-red-400/30 shadow-lg">
              <div className="flex flex-col w-full gap-2 sm:flex-row lg:flex-row justify-between items-center">
                <div className="mb-6 lg:mb-0 text-center lg:text-left">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 flex items-center justify-center lg:justify-start">
                    <Mail className="h-6 w-6 mr-2 text-red-600 dark:text-red-400" />
                    Parent Newsletter
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md">
                    Get updates on new features, educational tips, and child safety information delivered to your inbox.
                  </p>
                </div>
                {/* Newsletter Form */}
                <form
                  action="https://formspree.io/f/mkgbwrga"
                  method="POST"
                  className="flex flex-col w-full gap-2 sm:flex-row lg:w-auto"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 px-6 py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none border border-red-200/50 dark:border-red-400/30 focus:outline-none focus:border-red-400 dark:focus:border-red-400 focus:ring-2 focus:ring-red-400/20 flex-1 lg:w-80 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 px-8 py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25 text-white font-medium w-full sm:w-auto"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-red-200/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-300">© {currentYear} PAQuiz. All rights reserved.</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Made with ❤️ for kids and families worldwide
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Safe & Secure
                </div>

                <button
                  onClick={scrollToTop}
                  className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 border border-red-200/50 dark:border-red-400/30 hover:border-red-300 dark:hover:border-red-400 text-red-600 dark:text-red-400 p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
