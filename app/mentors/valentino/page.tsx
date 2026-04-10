"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, Calendar, MapPin, GraduationCap, Briefcase, ExternalLink, ChevronDown, Linkedin } from "lucide-react"
import AuthHeader from "@/components/auth-header"
import MobileMenu from "@/components/mobile-menu"

export default function ValentinoPage() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <AuthHeader />
      <MobileMenu />

      <section className="gradient-hero py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/mentors"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Mentors
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center">
              <Image
                src="/images/valentino-curtis.png"
                alt="Valentino Curtis"
                width={300}
                height={300}
                className="rounded-2xl mx-auto shadow-2xl ring-4 ring-blue-500/20 object-cover"
              />
            </div>

            <div>
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                Student Investor & Finance Enthusiast
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">Valentino Curtis</h1>
              <p className="text-xl text-blue-600 font-semibold mb-6">Several years of hands-on investing experience</p>

              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4" />
                <span>Santa Barbara, California</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm a college student with several years of hands-on investing experience, beginning in high school
                where I first developed a passion for financial markets. Since then, I've dedicated myself to
                researching individual companies, building portfolios, and continuously learning about how economic
                trends shape investment opportunities.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-xl transition-colors duration-300"
                >
                  <a
                    href="https://calendly.com/d/cv3x-v94-4bk/30-minute-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Free 30-min Session
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white px-4 py-3 text-lg rounded-xl transition-colors duration-300 bg-transparent"
                >
                  <a
                    href="https://www.linkedin.com/in/valentinocurtis/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div
            className={`flex flex-col items-center mt-12 transition-opacity duration-500 ${
              showScrollIndicator ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="text-black text-sm font-semibold mb-2">Scroll to learn more</span>
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-black" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why I Mentor</h2>
          <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I mentor because I believe financial literacy is a skill that can change lives. When I first started
                investing, I realized how many young people lacked guidance or confidence in approaching investing and
                money as a whole. I hope to break those barriers, provide knowledge, and help others build the
                confidence to make financial decisions. My goal is to share this knowledge with others while growing
                alongside the next generation of investors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-600" />
            Work Experience
          </h2>
          <div className="space-y-8">
            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/golden-wealth-capital-logo.png"
                    alt="Golden Wealth Capital"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Wealth Management Intern</h3>
                    <p className="text-blue-600 font-semibold mb-2">Golden Wealth Capital</p>
                    <p className="text-muted-foreground mb-4">May 2025 – Sept 2025 • New York, United States</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Supporting wealth management operations and gaining hands-on experience in client portfolio
                      management and financial planning.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/ucsb-finance-connection-logo.png"
                    alt="UCSB Finance Connection"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Active Member</h3>
                    <p className="text-blue-600 font-semibold mb-2">UCSB Finance Connection</p>
                    <p className="text-muted-foreground mb-4">Sept 2024 – Present • Investment Banking Workshop</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Participating in investment banking workshops and networking events to develop finance industry
                      knowledge and skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/ucsb-investment-connection-logo.png"
                    alt="UCSB Investment Connection"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Active Member</h3>
                    <p className="text-blue-600 font-semibold mb-2">UCSB Investment Connection</p>
                    <p className="text-muted-foreground mb-4">Sept 2024 – Present • PMP</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Participating in portfolio management programs and investment analysis projects within the
                      university's premier investment organization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/washington-unified-logo.png"
                    alt="Washington Unified School District"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Information Technology Intern</h3>
                    <p className="text-blue-600 font-semibold mb-2">Washington Unified School District</p>
                    <p className="text-muted-foreground mb-4">Jun 2023 – Aug 2023 • Washington, United States</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Provided technical support and assisted with IT infrastructure projects for the school district's
                      technology initiatives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Education
          </h2>
          <div className="space-y-8">
            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/universities/ucsb-logo.png"
                    alt="UC Santa Barbara"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">University of California, Santa Barbara</h3>
                    <p className="text-blue-600 font-semibold mb-2">Undergraduate, Economics & Accounting</p>
                    <p className="text-muted-foreground mb-4">Aug 2024 – Jun 2028</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Currently pursuing a Bachelor's degree in Economics and Accounting with a focus on financial
                      markets and investment analysis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Book a free 30-minute consultation with Valentino to get personalized guidance on investing, financial
            literacy, and building confidence in your financial decisions.
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl transition-colors duration-300"
          >
            <a href="https://calendly.com/d/cv3x-v94-4bk/30-minute-meeting" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your Free Session
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
