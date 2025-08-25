"use client"

import { useState, useEffect } from "react"

interface StockData {
  symbol: string
  price: number
  change: number
  changePercent: number
}

export default function StockTicker() {
  const [stocks, setStocks] = useState<StockData[]>([])

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const mockData = {
          AAPL: { price: 189.45, change: 3.12 },
          GOOGL: { price: 145.78, change: -0.89 },
          MSFT: { price: 382.91, change: 5.67 },
          TSLA: { price: 251.33, change: -2.45 },
          AMZN: { price: 154.67, change: 1.23 },
          NVDA: { price: 892.15, change: 15.78 },
          META: { price: 487.92, change: -1.67 },
          NFLX: { price: 491.45, change: 7.23 },
        }

        const stockData: StockData[] = Object.entries(mockData).map(([symbol, data]) => ({
          symbol,
          price: data.price,
          change: data.change,
          changePercent: (data.change / data.price) * 100,
        }))

        setStocks(stockData)
      } catch (error) {
        console.error("Failed to fetch stock data:", error)
      }
    }

    fetchStockData()
  }, [])

  return (
    <div className="bg-slate-900 border-y border-slate-700 py-3 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...stocks, ...stocks].map((stock, index) => (
          <div
            key={`${stock.symbol}-${index}`}
            className="flex items-center mx-8 text-white hover:scale-110 hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer"
          >
            <span className="font-bold text-blue-400 mr-2">{stock.symbol}</span>
            <span className="mr-2">${stock.price.toFixed(2)}</span>
            <span className={`text-sm ${stock.change >= 0 ? "text-green-400" : "text-red-400"}`}>
              {stock.change >= 0 ? "+" : ""}
              {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
