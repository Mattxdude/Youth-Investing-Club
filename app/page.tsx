"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
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
    {
      id: "melanie",
      name: "Melanie Silva",
      title: "Economics Student & Investment Analyst",
      specialty: "Wealth Management, Strategic Investments",
      experience: "UCSB Investment Connection Treasurer",
      image: "/images/melanie-silva.jpeg",
    },
    {
      id: "diya",
      name: "Diya Deshpande",
      title: "Economics & Statistical Science Student",
      specialty: "Investment Banking, Marketing Technology",
      experience: "Investment Banking Analyst at New York Bay Capital, UCSB Investment Advisory Committee",
      image: "/images/diya-deshpande.jpg",
    },
    {
      id: "emiliano",
      name: "Emiliano Hurtado",
      title: "Incoming PE Analyst",
      specialty: "Private Equity, Fixed Income",
      experience: "Incoming PE Analyst at K1 Investment Management, Dimensional Fund Advisors",
      image: "/images/emiliano-hurtado.png",
    },
  ]

  const duplicatedMentors = [...mentors, ...mentors]

  return (
    <div className="min-h-screen bg-background">
      <AuthHeader />

      {/* Hero Section - Fits within viewport minus header */}
      <section
        className="hero-section-forced bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex flex-col"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e293b 100%) !important",
          backgroundColor: "#0f172a !important",
          height: "calc(100dvh - 73px)",
          minHeight: "500px",
        }}
      >
        <div className="flex-1 flex flex-col justify-start items-center px-4 pt-8 md:pt-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-2 md:mb-3">
              <Image
                src="/images/graduation-cap-logo.png"
                alt="Youth Investing Network"
                width={50}
                height={50}
                className="mx-auto drop-shadow-lg rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer md:w-[60px] md:h-[60px]"
              />
            </div>

            <h1
              className="hero-heading-forced text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-2 text-white leading-tight"
              style={{ color: "#ffffff !important" }}
            >
              Empowering the Youth with Financial
              <br />
              <span
                className="text-cyan-400"
                style={{
                  color: "#22d3ee !important",
                }}
              >
                Knowledge
              </span>
            </h1>

            <p
              className="hero-paragraph-forced text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto mb-3 md:mb-4 leading-relaxed font-medium px-2"
              style={{ color: "#cbd5e1 !important" }}
            >
              Youth Investing Network provides free, personalized financial tutoring to help young people build confidence and financial literacy
            </p>

            <div>
              <Link href="/mentors">
                <Button
                  className="hero-button-forced bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-dramatic-shake transform hover:scale-105"
                  style={{
                    background: "linear-gradient(90deg, #2563eb 0%, #9333ea 50%, #1d4ed8 100%) !important",
                    color: "#ffffff !important",
                  }}
                >
                  Book a Free Meeting
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="pb-6 md:pb-10 flex justify-center">
          <button
            type="button"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="text-white/50 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1} />
          </button>
        </div>
      </section>

      {/* Meet Our Mentors Section */}
      <section
        className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 md:py-24"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e293b 100%) !important",
          backgroundColor: "#0f172a !important",
        }}
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-white" style={{ color: "#ffffff !important" }}>
            Meet Our Mentors
          </h2>
        </div>

        {/* Full-width carousel section - breaks out of container */}
        <div className="relative overflow-hidden py-4 w-screen -ml-[50vw] left-1/2">
          <div className="flex animate-slide-continuous gap-4 md:gap-6" style={{ width: "max-content" }}>
            {duplicatedMentors.map((mentor, index) => (
              <Link
                key={`${mentor.id}-${index}`}
                href={`/mentors/${mentor.id}#top`}
                className="block group flex-shrink-0 w-72 md:w-80"
              >
                <Card
                  className="card-enhanced group-hover:scale-105 cursor-pointer border-0 shadow-xl hover:shadow-2xl bg-white backdrop-blur-sm transition-all duration-700 mx-1 md:mx-2 h-[480px] md:h-[540px]"
                  style={{ backgroundColor: "#ffffff !important", opacity: "1 !important" }}
                >
                  <CardContent
                    className="text-center p-5 md:p-6 h-full flex flex-col"
                    style={{ backgroundColor: "#ffffff !important", opacity: "1 !important" }}
                  >
                    <div className="mb-4 md:mb-5">
                      <Image
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        width={200}
                        height={200}
                        className="rounded-xl mx-auto group-hover:scale-105 transition-transform duration-500 shadow-lg ring-2 ring-blue-500/20 object-cover aspect-square w-36 h-36 md:w-44 md:h-44"
                      />
                    </div>

                    <h3
                      className="text-lg md:text-xl font-bold mb-2 mentor-name-forced"
                      style={{
                        color: "#000000 !important",
                        backgroundColor: "#ffffff !important",
                        opacity: "1 !important",
                      }}
                    >
                      {mentor.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2 text-sm md:text-base">{mentor.title}</p>
                    <p
                      className="text-slate-600 text-sm mb-2 font-medium leading-relaxed"
                      style={{ color: "#475569 !important" }}
                    >
                      {mentor.specialty}
                    </p>
                    <p className="text-slate-500 text-sm font-medium text-center leading-relaxed mb-4 flex-1">
                      {mentor.experience}
                    </p>

                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full text-sm md:text-base py-3 rounded-lg transition-colors duration-300 mt-auto"
                      style={{
                        backgroundColor: "#2563eb !important",
                        color: "#ffffff !important",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#1d4ed8 !important"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#2563eb !important"
                      }}
                    >
                      Book a session
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="mt-8">
            <Link
              href="/mentors"
              className="text-blue-400 hover:text-blue-300 font-bold text-xl transition-all duration-300 interactive-element"
            >
              View all mentors →
            </Link>
          </div>
        </div>
      </section>

      {/* What Our Students Say Section */}
      <section
        className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 md:py-24"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e293b 100%) !important",
          backgroundColor: "#0f172a !important",
        }}
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-white" style={{ color: "#ffffff !important" }}>
            What Our Students Say
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
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Leave a Review
              </Button>
            </a>
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
              Helping young people start their investing journey
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
                This website is for informational purposes only.
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
