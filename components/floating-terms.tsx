"use client"

import { useEffect, useState } from "react"

const investingTerms = [
  "Asset",
  "Portfolio",
  "Diversification",
  "Risk Tolerance",
  "Return",
  "Liquidity",
  "Share",
  "Dividend",
  "Market Capitalization",
  "Blue Chip Stock",
  "Growth Stock",
  "Value Stock",
  "Bond",
  "Yield",
  "Coupon",
  "Maturity",
  "Mutual Fund",
  "ETF",
  "Index Fund",
  "Bull Market",
  "Bear Market",
  "Volatility",
  "P/E Ratio",
  "IPO",
  "Buy and Hold",
  "Day Trading",
  "Short Selling",
  "Leverage",
  "Hedging",
  "Alpha",
  "Beta",
  "Capital Gain",
  "Capital Loss",
  "Compound Interest",
  "Inflation",
  "Deflation",
  "Recession",
  "Depression",
  "Asset Allocation",
  "Rebalancing",
  "Market Index",
  "Benchmark",
  "Market Order",
  "Limit Order",
  "Stop-Loss Order",
  "Margin",
  "Margin Call",
  "Arbitrage",
  "Liquidity Risk",
  "Systematic Risk",
  "Unsystematic Risk",
  "Correlation",
  "Hedge Fund",
  "Private Equity",
  "Venture Capital",
  "Angel Investor",
  "Derivative",
  "Option",
  "Call Option",
  "Put Option",
  "Futures Contract",
  "Forward Contract",
  "Swap",
  "Underlying Asset",
  "Strike Price",
  "Expiration Date",
  "Premium",
  "Covered Call",
  "Naked Put",
  "Dollar-Cost Averaging",
]

interface FloatingTerm {
  id: number
  text: string
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  color: string
}

export default function FloatingTerms() {
  const [terms, setTerms] = useState<FloatingTerm[]>([])

  useEffect(() => {
    const colors = [
      "text-blue-400/60",
      "text-cyan-400/50",
      "text-slate-400/40",
      "text-blue-300/70",
      "text-indigo-400/50",
      "text-sky-400/60",
    ]

    const initialTerms = investingTerms.map((term, index) => ({
      id: index,
      text: term,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 12, // 12px to 32px
      opacity: Math.random() * 0.4 + 0.3, // 0.3 to 0.7
      speed: Math.random() * 20 + 10, // 10s to 30s
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setTerms(initialTerms)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {terms.map((term) => (
        <div
          key={term.id}
          className={`absolute whitespace-nowrap font-semibold ${term.color} animate-float-slow`}
          style={{
            left: `${term.x}%`,
            top: `${term.y}%`,
            fontSize: `${term.size}px`,
            opacity: term.opacity,
            animationDuration: `${term.speed}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {term.text}
        </div>
      ))}
    </div>
  )
}
