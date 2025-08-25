"use client"

import { useState, useEffect } from "react"

interface Review {
  id: number
  text: string
  author: string
}

export default function FloatingReviews() {
  const [visibleReviews, setVisibleReviews] = useState<Review[]>([])

  const reviews: Review[] = [
    { id: 1, text: "Although I had no idea how to invest, I was able to pick it up quickly", author: "Paxton C" },
    {
      id: 2,
      text: "I appreciated learning from Miguel as he was very straight forward and didn't waste my time",
      author: "Maya G",
    },
    { id: 3, text: "I love how easy it is to use the website", author: "Joshua B" },
  ]

  useEffect(() => {
    let reviewIndex = 0
    const interval = setInterval(() => {
      const review = reviews[reviewIndex % reviews.length]
      const newReview = { ...review, id: Date.now() + reviewIndex }

      setVisibleReviews((prev) => [...prev, newReview])

      // Remove review after animation completes
      setTimeout(() => {
        setVisibleReviews((prev) => prev.filter((r) => r.id !== newReview.id))
      }, 8000) // Increased duration for slower movement

      reviewIndex++
    }, 3000) // Increased interval for slower, staggered appearance

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[500px] overflow-hidden">
      {visibleReviews.map((review, index) => (
        <div
          key={review.id}
          className="absolute animate-float-up"
          style={{
            left: `${15 + Math.random() * 70}%`,
            bottom: "-100px", // Start from much lower position
            animationDuration: "8s", // Slower animation
            animationDelay: `${index * 0.5}s`, // Staggered timing
          }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-200 max-w-sm">
            <p className="text-slate-700 text-sm mb-3 italic">"{review.text}"</p>
            <p className="text-blue-600 font-semibold text-sm">- {review.author}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
