"use client"

import { useState, useEffect } from "react"

interface Review {
  id: number
  text: string
  author: string
  color: string
}

export default function FloatingReviews() {
  const [visibleReviews, setVisibleReviews] = useState<Review[]>([])

  const reviews: Review[] = [
    {
      id: 1,
      text: "Although I had no idea how to invest, I was able to pick it up quickly",
      author: "Paxton C",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      text: "I appreciated learning from Miguel as he was very straight forward and didn't waste my time",
      author: "Maya G",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      text: "I love how easy it is to use the website",
      author: "Joshua B",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      text: "The mentors really know their stuff and explain things clearly",
      author: "Sarah M",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      text: "Best investment education platform for young people",
      author: "Alex R",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      text: "Matthew's guidance helped me make my first profitable trade",
      author: "Emma L",
      color: "from-rose-500 to-pink-500",
    },
    {
      id: 7,
      text: "The free consultation was incredibly valuable",
      author: "David K",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 8,
      text: "Finally, investing advice that makes sense to me",
      author: "Sophia T",
      color: "from-violet-500 to-purple-500",
    },
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
      }, 12000) // Longer duration for slower movement

      reviewIndex++
    }, 2500) // Faster spawning for more dynamic effect

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[600px] overflow-hidden">
      {visibleReviews.map((review, index) => (
        <div
          key={review.id}
          className="absolute animate-float-up"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: "-150px", // Start from even lower
            animationDuration: "12s", // Much slower animation
            animationDelay: `${index * 0.3}s`, // Closer staggered timing
          }}
        >
          <div
            className={`bg-gradient-to-br ${review.color} p-[2px] rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300`}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-sm hover:bg-white transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${review.color} mt-2 flex-shrink-0`}></div>
                <div>
                  <p className="text-slate-700 text-sm mb-3 italic leading-relaxed">"{review.text}"</p>
                  <p className={`bg-gradient-to-r ${review.color} bg-clip-text text-transparent font-bold text-sm`}>
                    — {review.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
