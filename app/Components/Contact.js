"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Shield } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Formspree endpoint for aniketsahaworkspace@gmail.com (replace with your own if needed)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkgbwrga"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // No need for handleSubmit if using Formspree, but you can use it for custom validation or feedback
  // Here, we'll just reset the form after submission
  const handleSubmit = (e) => {
    // Let the browser handle the POST to Formspree
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aniketsahaworkspace@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 123456789",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Learning Lane",
      description: "Education City, EC 12345",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "Average response time",
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-100/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-red-200/50 dark:border-red-400/30 mb-8 shadow-lg">
            <MessageCircle className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
            <span className="text-red-700 dark:text-red-300 text-sm font-medium">Get in Touch</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-800 dark:from-gray-100 to-gray-600 dark:to-gray-300 bg-clip-text text-transparent">
              Let&apos;s
            </span>
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"> Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about PAQuiz? Want to share feedback? We&apos;d love to hear from parents and kids! Our team
            is here to help make learning fun and safe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Contact Information</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div
                      key={index}
                      className="group"
                      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                    >
                      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border border-red-200/50 dark:border-red-400/30 hover:border-red-300/50 dark:hover:border-red-400/50 transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-800/80 shadow-lg hover:shadow-xl">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">{info.title}</p>
                            <p className="text-red-600 dark:text-red-400 font-medium mb-1 break-words">{info.value}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-red-100/80 via-white/80 to-red-100/80 dark:from-gray-800/80 dark:via-gray-700/80 dark:to-gray-800/80 rounded-2xl p-8 backdrop-blur-xl border border-red-200/50 dark:border-red-400/30 shadow-lg">
              <Shield className="h-8 w-8 text-red-600 dark:text-red-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Safe & Secure Support</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our support team is trained in child safety and privacy. We&apos;re committed to providing a secure
                environment for kids to learn and grow while giving parents peace of mind.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Child-Safe", "COPPA Compliant", "Parent Controlled"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/60 dark:bg-gray-700/60 rounded-full text-sm text-red-700 dark:text-red-300 border border-red-200/50 dark:border-red-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 border border-red-200/50 dark:border-red-400/30 shadow-2xl"
            style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Send us a Message</h3>
            <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                  Full Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-white/80 dark:bg-gray-700/80 border-red-200/50 dark:border-red-400/30 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400/20 rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-white/80 dark:bg-gray-700/80 border-red-200/50 dark:border-red-400/30 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400/20 rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="w-full bg-white/80 dark:bg-gray-700/80 border-red-200/50 dark:border-red-400/30 text-gray-800 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400/20 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25 border-0"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
