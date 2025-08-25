"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function MentorsPage() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: { help: boolean; facts: boolean } }>({})

  const toggleExpanded = (mentorId: string, section: "help" | "facts") => {
    setExpandedCards((prev) => ({
      ...prev,
      [mentorId]: {
        ...prev[mentorId],
        [section]: !prev[mentorId]?.[section],
      },
    }))
  }

  const mentors = [
    {
      id: "miguel",
      name: "Miguel Gutierrez",
      title: "Investment Professional & Career Coach",
      specialty: "Private Equity, Venture Capital, Hedge Funds",
      experience: "8+ years in investment industry, $700M invested",
      image: "/images/miguel-gutierrez.png",
      helpWith: ["Investment strategies", "Portfolio management", "Financial planning", "Career coaching"],
      funFacts: ["Helped 100+ young investors", "Private equity background", "Speaks 3 languages"],
      location: "New York, United States",
    },
    {
      id: "matthew",
      name: "Matthew Hansaab",
      title: "Founder & Young Investor",
      specialty: "Stock Market, Individual Stock Picking",
      experience: "3+ years in stock market, consistently outperforming market",
      image: "/images/matthew-hansaab.png",
      helpWith: ["Stock market analysis", "Individual stock picking", "Investment research", "Youth investing clubs"],
      funFacts: [
        "Founded Youth Investing Club in high school",
        "Successful stock picker",
        "Finance education advocate",
      ],
      location: "New York, United States",
    },
    {
      id: "valentino",
      name: "Valentino Curtis",
      title: "Student Investor & Finance Enthusiast",
      specialty: "UCSB Finance & Investment Connection",
      experience: "Active in college investment programs and research",
      image: "/images/valentino-curtis.png",
      helpWith: ["Financial literacy", "Student investing", "Portfolio building", "Economic trends"],
      funFacts: [
        "Started investing in high school",
        "UCSB Finance Connection member",
        "Passionate about breaking investment barriers",
      ],
      location: "California, United States",
    },
    {
      id: "cole",
      name: "Cole Bechtel",
      title: "Economics Student & Investment Leader",
      specialty: "Public Markets Research, Investment Education",
      experience: "President of UCSB Investment Connection",
      image: "/images/cole-bechtel.png",
      helpWith: ["Public markets research", "Investment education", "Portfolio modeling", "Financial analysis"],
      funFacts: [
        "President of UCSB Investment Connection",
        "Dean's Investment Group member",
        "Passionate about making investing accessible",
      ],
      location: "Santa Barbara, California",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background/95 backdrop-blur-md border-b border-border px-4 md:px-6 py-4 md:py-5 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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

      <section className="gradient-hero py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">
              Meet Our Mentors
            </Badge>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-8">Find Your Perfect Mentor</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Browse our network of mentors and schedule a free 30-minute consultation to get personalized guidance for
              your investing journey.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search by name, education, or expertise..."
              className="bg-background/80 backdrop-blur-sm border-border px-4 py-3 rounded-lg w-full text-base"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {mentors.map((mentor) => (
              <Link key={mentor.id} href={`/mentors/${mentor.id}`} className="block group">
                <Card className="card-enhanced group-hover:scale-105 cursor-pointer border-0 shadow-xl hover:shadow-2xl bg-white/95 backdrop-blur-sm transition-all duration-700">
                  <CardContent className="text-center p-8 h-full flex flex-col justify-between min-h-[600px]">
                    <div>
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
                      <p className="text-slate-600 text-base mb-3 font-medium leading-relaxed">{mentor.specialty}</p>
                      <p className="text-slate-500 text-sm mb-8 font-medium">{mentor.experience}</p>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full text-lg py-4 mt-auto rounded-xl transition-colors duration-300">
                      Book a Session with {mentor.name.split(" ")[0]}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 backdrop-blur-sm section-padding border-t border-border">
        <div className="max-w-7xl mx-auto">
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
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Email
                </a>
                <a
                  href="#"
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
                <Link
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 text-xl">Support</h4>
              <div className="space-y-4">
                <Link
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Support
                </Link>
              </div>
              <p className="text-muted-foreground font-medium mt-8">
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
