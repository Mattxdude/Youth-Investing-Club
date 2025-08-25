"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import StockTicker from "@/components/stock-ticker"
import FloatingReviews from "@/components/floating-reviews"

export default function HomePage() {
  const [currentMentorIndex, setCurrentMentorIndex] = useState(0)

  const mentors = [
    {
      id: "miguel",
      name: "Miguel Gutierrez",
      title: "Investment Professional & Career Coach",
      specialty: "Private Equity, Venture Capital, Hedge Funds",
      experience: "8+ years in investment industry, $700M invested",
      image: "/images/miguel-gutierrez.png",
    },
    {
      id: "matthew",
      name: "Matthew Hansaab",
      title: "Founder & Young Investor",
      specialty: "Stock Market, Individual Stock Picking",
      experience: "3+ years in stock market, consistently outperforming market",
      image: "/images/matthew-hansaab.png",
    },
    {
      id: "valentino",
      name: "Valentino Curtis",
      title: "Student Investor & Finance Enthusiast",
      specialty: "UCSB Finance & Investment Connection",
      experience: "Active in college investment programs and research",
      image: "/images/valentino-curtis.png",
    },
    {
      id: "cole",
      name: "Cole Bechtel",
      title: "Economics Student & Investment Leader",
      specialty: "Public Markets Research, Investment Education",
      experience: "President of UCSB Investment Connection",
      image: "/images/cole-bechtel.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMentorIndex((prev) => (prev + 1) % mentors.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [mentors.length])

  const currentMentor = mentors[currentMentorIndex]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background/95 backdrop-blur-md border-b border-border px-4 md:px-6 py-4 md:py-5 sticky top-0 z-50 shadow-sm">
        <div className="container-max flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-all duration-300 interactive-element"
          >
            <Image
              src="/images/graduation-cap-logo.png"
              alt="Youth Investing Network"
              width={32}
              height={32}
              className="md:w-10 md:h-10 rounded-lg shadow-sm"
            />
            <span className="text-base md:text-xl font-bold text-foreground tracking-tight">
              Youth Investing Network
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 interactive-element text-base"
            >
              Home
            </Link>
            <Link
              href="/mentors"
              className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 interactive-element text-base"
            >
              Mentors
            </Link>
            <Link
              href="/network"
              className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 interactive-element text-base"
            >
              Network
            </Link>
          </nav>

          <div className="flex items-center gap-1 md:gap-4">
            <Button className="btn-primary px-2 md:px-8 py-2 md:py-3 text-xs md:text-base rounded-lg" asChild>
              <Link href="/signup">Join YIN</Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-2 md:px-8 py-2 md:py-3 text-xs md:text-base font-semibold transition-all duration-300 bg-transparent rounded-lg interactive-element"
              asChild
            >
              <a href="https://form.jotform.com/251635444743055" target="_blank" rel="noopener noreferrer">
                <span className="hidden md:inline">Apply to become a mentor</span>
                <span className="md:hidden">Apply</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <StockTicker />

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <Image
              src="/images/graduation-cap-logo.png"
              alt="Youth Investing Network"
              width={120}
              height={120}
              className="mx-auto mb-12 drop-shadow-lg rounded-2xl hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-white leading-tight hover:scale-105 transition-all duration-500 cursor-pointer">
            Empowering Youth with Financial
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Knowledge
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            Youth Investing Network offers expert-led finance education and personalized consultations for young
            investors in the US.
          </p>

          <div className="mb-20">
            <Button
              className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 hover:from-emerald-600 hover:via-blue-700 hover:to-purple-700 text-white px-16 py-6 text-2xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 animate-pulse border-2 border-white/20"
              asChild
            >
              <Link href="/mentors">🚀 Book a Free Online Consultation</Link>
            </Button>
          </div>

          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white">Meet Our Mentors</h2>

            <div className="max-w-2xl mx-auto">
              <Link href={`/mentors/${currentMentor.id}#top`} className="block group">
                <Card className="card-enhanced group-hover:scale-105 cursor-pointer border-0 shadow-xl hover:shadow-2xl bg-white/95 backdrop-blur-sm transition-all duration-700">
                  <CardContent className="text-center p-8 h-full flex flex-col justify-between min-h-[600px]">
                    <div>
                      <div className="mb-8">
                        <Image
                          src={currentMentor.image || "/placeholder.svg"}
                          alt={currentMentor.name}
                          width={220}
                          height={220}
                          className="rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg ring-4 ring-blue-500/20 object-cover"
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{currentMentor.name}</h3>
                      <p className="text-blue-600 font-bold mb-4 text-lg">{currentMentor.title}</p>
                      <p className="text-slate-600 text-base mb-3 font-medium leading-relaxed">
                        {currentMentor.specialty}
                      </p>
                      <p className="text-slate-500 text-sm mb-8 font-medium">{currentMentor.experience}</p>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full text-lg py-4 mt-auto rounded-xl transition-colors duration-300">
                      Book a Session with {currentMentor.name.split(" ")[0]}
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <div className="flex justify-center gap-3 mt-8">
                {mentors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMentorIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentMentorIndex ? "bg-blue-400 scale-125" : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/mentors"
                className="text-blue-400 hover:text-blue-300 font-bold text-xl transition-all duration-300 interactive-element"
              >
                View all mentors →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-slate-900">Reviews</h2>
          <FloatingReviews />
        </div>
      </section>

      <footer className="bg-muted/50 backdrop-blur-sm section-padding border-t border-border">
        <div className="container-max">
          <div className="text-center mb-16">
            <Image
              src="/images/graduation-cap-logo.png"
              alt="Youth Investing Network"
              width={64}
              height={64}
              className="mx-auto mb-8 rounded-xl shadow-md"
            />
            <p className="text-muted-foreground text-xl font-medium leading-relaxed">
              Helping young people start their
              <br />
              investing journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            <div>
              <h4 className="font-bold text-foreground mb-6 text-xl">Navigation</h4>
              <div className="space-y-4">
                <Link
                  href="/"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Home
                </Link>
                <Link
                  href="/mentors"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Mentors
                </Link>
                <Link
                  href="/network"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Network
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 text-xl">Contact</h4>
              <div className="space-y-4">
                <a
                  href="mailto:matthew@youthinvestingnetwork.com"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/company/youth-investing-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 text-xl">Legal</h4>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Terms of Service
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 text-xl">Support</h4>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Support
                </a>
              </div>
              <p className="text-muted-foreground text-sm mt-8 leading-relaxed font-medium">
                This is not financial advice.
                <br />
                This website is for informational
                <br />
                purposes only.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground font-medium">© 2024 Youth Investing Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
