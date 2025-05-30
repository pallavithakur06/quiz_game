"use client"

import { useEffect, useState } from "react"

export default function Level1() {
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/pallavithakur06/questions/refs/heads/main/level1.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch questions")
        return res.json()
      })
      .then((data) => setQuestions(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  // Unlock Level 2 when Level 1 is completed
  useEffect(() => {
    if (showAnswer && current === questions.length - 1) {
      localStorage.setItem("quiz-progress", "2")
    }
  }, [showAnswer, current, questions.length])

  const handleOptionClick = (option, idx) => {
    if (showAnswer) return
    setSelected(idx)
    setShowAnswer(true)
    if (option === questions[current].answer) {
      setResult("correct")
    } else {
      setResult("wrong")
    }
  }

  const handleNext = () => {
    setSelected(null)
    setShowAnswer(false)
    setResult(null)
    setCurrent((prev) => prev + 1)
  }

  if (loading) return <div className="p-8 text-center">Loading questions...</div>
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>
  if (!questions.length) return <div className="p-8 text-center">No questions found.</div>

  const q = questions[current]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
        Level 1: Beginner
      </h1>
      <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 p-8 shadow-lg w-full max-w-xl">
        <div className="mb-6 text-lg font-semibold text-gray-800 dark:text-gray-100">
          Q{current + 1}: {q.question}
        </div>
        <div className="space-y-4 mb-6 dark:text-black">
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(option, idx)}
              disabled={showAnswer}
              className={`block w-full text-left px-6 py-3 rounded-xl border transition-all duration-200
                ${
                  showAnswer
                    ? option === q.answer
                      ? "bg-green-100 border-green-400 text-green-800"
                      : idx === selected
                      ? "bg-red-100 border-red-400 text-red-800"
                      : "bg-gray-100 border-gray-200"
                    : "bg-white border-gray-200 hover:bg-green-50"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
        {showAnswer && (
          <div className={`mb-4 text-lg font-bold ${result === "correct" ? "text-green-600" : "text-red-600"}`}>
            {result === "correct" ? "Correct! 🎉" : `Wrong! The correct answer is: ${q.answer}`}
          </div>
        )}
        {showAnswer && current < questions.length - 1 && (
          <button
            onClick={handleNext}
            className="mt-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 shadow-lg transition-all duration-300 hover:from-green-400 hover:to-green-600 hover:scale-105"
          >
            Next Question
          </button>
        )}
        {showAnswer && current === questions.length - 1 && (
          <div className="mt-4 text-xl font-bold text-green-700">Quiz Complete!</div>
        )}
      </div>
    </section>
  )
}