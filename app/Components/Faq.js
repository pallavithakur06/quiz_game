"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Is PAQuiz safe for kids?",
      answer:
        "PAQuiz is designed with child safety as our top priority. We have strict moderation, no chat features with strangers, and all content is age-appropriate and educational.",
    },
    {
      question: "What age group is PAQuiz designed for?",
      answer:
        "PAQuiz is perfect for kids aged 6-16. We have different difficulty levels and categories that adapt to different age groups, ensuring everyone can enjoy learning at their own pace.",
    },
    {
      question: "How do kids get started with PAQuiz?",
      answer:
        "Getting started is super easy! Kids can click 'Start Learning' and parents can help create a safe account. No personal information is required from children, and parents maintain full control over the account.",
    },
    {
      question: "What subjects and topics are covered?",
      answer:
        "We cover a wide range of kid-friendly topics focused on values like kindness, safety, honesty, and social awareness. Each quiz is thoughtfully crafted and reviewed by educators to ensure it's age-appropriate, meaningful, and fun to explore.",
    },
    {
      question: "Is there a cost to use PAQuiz?",
      answer:
        "PAQuiz offers a generous free plan that includes access to many quizzes and basic features.",
    },
    {
      question: "Can kids play with their friends?",
      answer:
        "Coming soon.",
    },
    {
      question: "Can parents track their child's progress?",
      answer:
        "Coming soon.",
    }
  ]

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-rose-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-red-200/50 dark:border-red-400/30 mb-8 shadow-lg">
            <HelpCircle className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
            <span className="text-red-700 dark:text-red-300 text-sm font-medium">Frequently Asked Questions</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-gray-800 dark:from-gray-100 to-gray-600 dark:to-gray-300 bg-clip-text text-transparent">
              Got
            </span>
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"> Questions?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about PAQuiz. Parents and kids can learn everything they need
            to know to get started!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group" style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}>
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-red-200/50 dark:border-red-400/30 hover:border-red-300/50 dark:hover:border-red-400/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <ChevronDown
                      className={`h-5 w-5 text-red-600 dark:text-red-400 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-red-200 dark:via-red-400/50 to-transparent mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-100/80 via-white/80 to-red-100/80 dark:from-gray-800/80 dark:via-gray-700/80 dark:to-gray-800/80 rounded-2xl p-8 backdrop-blur-xl border border-red-200/50 dark:border-red-400/30 shadow-lg">
            <Sparkles className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our friendly support team is here to help parents and kids get the most out of PAQuiz.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
