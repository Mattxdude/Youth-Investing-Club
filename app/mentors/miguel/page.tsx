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

export default function MiguelPage() {
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
                src="/images/miguel-gutierrez.png"
                alt="Miguel Gutierrez"
                width={300}
                height={300}
                className="rounded-2xl mx-auto shadow-2xl ring-4 ring-blue-500/20 object-cover"
              />
            </div>

            <div>
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                Investment Professional & Career Coach
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">Miguel Gutierrez</h1>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                8+ years in investment industry, $700M invested
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4" />
                <span>Dallas, Texas</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                I have over eight years of experience in the investment industry, where I've invested $700M across
                private equity, venture capital, hedge funds, and public equity. I've had the privilege of interviewing
                and investing with some of the world's most successful investors.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-xl transition-colors duration-300"
                >
                  <a
                    href="https://calendly.com/miguel-youthinvestingnetwork/30min"
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
                    href="https://www.linkedin.com/in/miguelgutierrezal/"
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
          <button
            type="button"
            onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
            className={`flex flex-col items-center mt-12 transition-opacity duration-500 cursor-pointer hover:scale-110 ${
              showScrollIndicator ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="text-black text-sm font-semibold mb-2">Scroll to learn more</span>
            <div className="animate-bounce">
              <ChevronDown className="w-10 h-10 text-black" />
            </div>
          </button>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why I Mentor</h2>
          <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                In all my roles, I've loved working with college students and those early in their careers, helping them
                learn about investing. I find it deeply rewarding to see the impact that mentoring can have on their
                personal lives and their families, especially when it comes to personal finance. I've also coached
                through programs like Girls Who Invest and Sponsors for Educational Opportunity, helping students build
                authentic stories, take on leadership roles, and create thoughtful action plans.
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
                    src="/images/companies/seo-logo.png"
                    alt="SEO"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Career Coach</h3>
                    <p className="text-blue-600 font-semibold mb-2">SEO (Sponsors for Educational Opportunity)</p>
                    <p className="text-muted-foreground mb-4">Feb 2022 – Present • New York, New York</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Coaching students through career development programs, helping them build authentic stories and
                      create thoughtful action plans.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">P</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Founder</h3>
                    <p className="text-blue-600 font-semibold mb-2">Plum House Investment Management LLC</p>
                    <p className="text-muted-foreground mb-4">Mar 2022 – Present • New York, New York</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded and managing investment management firm focused on strategic investment opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/gkff-logo.png"
                    alt="George Kaiser Family Foundation"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Investment Principal</h3>
                    <p className="text-blue-600 font-semibold mb-2">George Kaiser Family Foundation</p>
                    <p className="text-muted-foreground mb-4">May 2023 – March 2025 • Tulsa, Oklahoma</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Led investment strategies and portfolio management for one of the largest private foundations in
                      the United States.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/fremont-logo.png"
                    alt="Fremont Group"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Investment Associate</h3>
                    <p className="text-blue-600 font-semibold mb-2">Fremont Group</p>
                    <p className="text-muted-foreground mb-4">Feb 2021 – Mar 2023 • San Francisco, California</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Conducted investment analysis and due diligence across multiple asset classes for family office
                      investments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/mellon-logo.png"
                    alt="Mellon Foundation"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Investment Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-2">The Andrew W. Mellon Foundation</p>
                    <p className="text-muted-foreground mb-4">Feb 2019 – Feb 2021 • New York, New York</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Analyzed investment opportunities and supported portfolio management for the foundation's
                      endowment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/stellant-logo.png"
                    alt="Salient Partners"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Investment Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-2">Salient Partners</p>
                    <p className="text-muted-foreground mb-4">Jun 2017 – Jan 2019 • Houston, Texas</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Performed investment research and analysis for alternative investment strategies.
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
                    src="/images/universities/smu-logo.png"
                    alt="Southern Methodist University"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Southern Methodist University</h3>
                    <p className="text-blue-600 font-semibold mb-2">BBA, Finance</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Advanced degree in Finance with focus on investment management and financial analysis.
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
            Book a free 30-minute consultation with Miguel to get personalized guidance on investing, career
            development, and building your finance knowledge.
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl transition-colors duration-300"
          >
            <a href="https://calendly.com/miguel-youthinvestingnetwork/30min" target="_blank" rel="noopener noreferrer">
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
