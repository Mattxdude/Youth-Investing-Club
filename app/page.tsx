"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import StockTicker from "@/components/stock-ticker"
import FloatingTerms from "@/components/floating-terms"
import AuthHeader from "@/components/auth-header"

export default function HomePage() {
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
      name: "Matthew Hanasab",
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
      specialty: "Public Markets Research, Student Finance Education",
      experience: "President of UCSB Investment Connection, Dean's Investment Group",
      image: "/images/cole-bechtel.png",
    },
  ]

  const duplicatedMentors = [...mentors, ...mentors]

  return (
    <div className="min-h-screen bg-background">
      <AuthHeader />

      <StockTicker />

      <section
        className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 section-padding"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e293b 100%) !important",
          backgroundColor: "#0f172a !important",
        }}
      >
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

          <h1
            className="text-5xl md:text-7xl font-bold mb-12 text-white leading-tight hover:scale-105 transition-all duration-500 cursor-pointer"
            style={{ color: "#ffffff !important" }}
          >
            Empowering Youth with Financial
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Knowledge
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-16 leading-relaxed font-medium hover:scale-105 transition-all duration-500 cursor-pointer"
            style={{ color: "#cbd5e1 !important" }}
          >
            Youth Investing Network offers expert-led finance education and personalized consultations for young
            investors in the US.
          </p>

          <div className="mb-32">
            <Link href="/mentors">
              <Button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-8 py-4 md:px-16 md:py-6 text-lg md:text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-dramatic-shake transform hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #2563eb 0%, #9333ea 50%, #1d4ed8 100%) !important",
                  color: "#ffffff !important",
                }}
              >
                🚀 Book a Free Online Consultation
              </Button>
            </Link>
          </div>

          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white" style={{ color: "#ffffff !important" }}>
              Meet Our Mentors
            </h2>

            <div className="relative overflow-hidden px-8 py-4">
              <div className="flex animate-slide-continuous gap-8" style={{ width: "max-content" }}>
                {duplicatedMentors.map((mentor, index) => (
                  <Link
                    key={`${mentor.id}-${index}`}
                    href={`/mentors/${mentor.id}#top`}
                    className="block group flex-shrink-0 w-80"
                  >
                    <Card className="card-enhanced group-hover:scale-105 cursor-pointer border-0 shadow-xl hover:shadow-2xl bg-white/95 backdrop-blur-sm transition-all duration-700 h-[650px] mx-2">
                      <CardContent className="text-center p-8 h-full flex flex-col justify-between">
                        <div className="flex-1 flex flex-col">
                          <div className="mb-8">
                            <Image
                              src={mentor.image || "/placeholder.svg"}
                              alt={mentor.name}
                              width={220}
                              height={220}
                              className="rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg ring-4 ring-blue-500/20 object-cover"
                            />
                          </div>

                          <h3 className="text-2xl font-bold text-slate-900 mb-4">{mentor.name}</h3>
                          <p className="text-blue-600 font-bold mb-4 text-lg">{mentor.title}</p>
                          <p className="text-slate-600 text-base mb-3 font-medium leading-relaxed">
                            {mentor.specialty}
                          </p>
                          <div className="h-12 flex items-center justify-center mb-8">
                            <p className="text-slate-500 text-sm font-medium text-center">{mentor.experience}</p>
                          </div>
                        </div>

                        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full text-base py-4 rounded-xl transition-colors duration-300">
                          Book a session
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
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

          <div className="mt-32">
            <div
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e293b 100%) !important",
                backgroundColor: "#0f172a !important",
                padding: "2rem 0",
              }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold mb-20 text-white text-center"
                style={{
                  color: "#ffffff !important",
                  background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e293b 100%) !important",
                  backgroundColor: "#0f172a !important",
                }}
              >
                What Students Say
              </h2>

              <div className="relative max-w-5xl mx-auto px-8">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                  <div className="review-bubble animate-float-1 bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-xl border-4 border-blue-400/30 max-w-xs text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      M
                    </div>
                    <p className="text-slate-700 font-medium mb-3 leading-relaxed">
                      "I learned a lot although I did not know anything before"
                    </p>
                    <p className="text-blue-600 font-bold text-sm">- Mason B</p>
                  </div>

                  <div className="review-bubble animate-float-2 bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-xl border-4 border-purple-400/30 max-w-xs text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      A
                    </div>
                    <p className="text-slate-700 font-medium mb-3 leading-relaxed">"Very helpful!"</p>
                    <p className="text-purple-600 font-bold text-sm">- Annie N</p>
                  </div>

                  <div className="review-bubble animate-float-3 bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-xl border-4 border-cyan-400/30 max-w-xs text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      J
                    </div>
                    <p className="text-slate-700 font-medium mb-3 leading-relaxed">"This style of learning is smart"</p>
                    <p className="text-cyan-600 font-bold text-sm">- Josh F</p>
                  </div>

                  <div className="review-bubble animate-float-1 bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-xl border-4 border-green-400/30 max-w-xs text-center transform hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      J
                    </div>
                    <p className="text-slate-700 font-medium mb-3 leading-relaxed">
                      "Miguel taught me concepts in a simple way"
                    </p>
                    <p className="text-green-600 font-bold text-sm">- Justin T</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-16">
                <a
                  href="https://form.jotform.com/252580694569169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    style={{
                      background: "linear-gradient(90deg, #2563eb 0%, #9333ea 50%, #1d4ed8 100%) !important",
                      backgroundColor: "#2563eb !important",
                      color: "#ffffff !important",
                    }}
                  >
                    Leave a Review
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 py-32 md:py-48 overflow-hidden">
        <FloatingTerms />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl md:text-8xl font-bold mb-12 text-white leading-tight">Don't know where to start?</h2>
          <Link href="/mentors">
            <div className="inline-block bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 p-1 rounded-3xl hover:from-blue-600 hover:via-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <div className="bg-slate-900 px-12 py-8 rounded-3xl">
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text hover:from-blue-300 hover:via-cyan-300 hover:to-purple-300 transition-all duration-300 cursor-pointer leading-relaxed">
                  We got you covered.
                </p>
              </div>
            </div>
          </Link>
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
            <p className="text-muted-foreground font-medium">© 2025 Youth Investing Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
