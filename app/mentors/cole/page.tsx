"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, Calendar, MapPin, GraduationCap, Briefcase, ExternalLink, ChevronDown } from "lucide-react"
import AuthHeader from "@/components/auth-header"
import MobileMenu from "@/components/mobile-menu"

export default function ColePage() {
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
          {/* Back Button */}
          <Link
            href="/mentors"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Mentors
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <div className="text-center">
              <Image
                src="/images/cole-bechtel.png"
                alt="Cole Bechtel"
                width={300}
                height={300}
                className="rounded-2xl mx-auto shadow-2xl ring-4 ring-blue-500/20 object-cover"
              />
            </div>

            {/* Profile Info */}
            <div>
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                Economics Student & Investment Leader
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">Cole Bechtel</h1>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                Public Markets Research, Student Finance Education
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4" />
                <span>Santa Barbara, California</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm Cole Bechtel, an economics student at UC Santa Barbara and president of UCSB's Investment
                Connection. I'm passionate about markets and investing, and I spend a lot of my time working on public
                markets research, investor communication, and building hands-on finance experiences for students.
              </p>

              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-xl transition-colors duration-300"
              >
                <a
                  href="https://calendly.com/cole-youthinvestingnetwork/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Free 30-min Session
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div
            className={`flex flex-col items-center mt-12 transition-opacity duration-500 ${
              showScrollIndicator ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="text-white/80 text-sm font-medium mb-2">Scroll to learn more</span>
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why I Mentor</h2>
          <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I know how intimidating it can feel to start learning about investing and personal finances. For a lot
                of people, even asking the first question takes courage because the stock market seems so dense or
                reserved for experts. The truth is, in the right environment with the right guidance, anyone can learn
                how to navigate it. I mentor to create that space, where questions are encouraged, concepts are broken
                down clearly, and students can see that the stock market really is for everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Work Experience */}
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
                    src="/images/ucsb-investment-connection-logo.png"
                    alt="UCSB Investment Connection"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">President</h3>
                    <p className="text-blue-600 font-semibold mb-2">UCSB Investment Connection</p>
                    <p className="text-muted-foreground mb-4">Feb 2025 – Present • Santa Barbara, CA</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Leading UCSB's premier investment organization, organizing educational events and building
                      hands-on finance experiences for students.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/ucsb-dig-logo.png"
                    alt="UCSB Dean's Investment Group"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Portfolio Manager & Equity Research</h3>
                    <p className="text-blue-600 font-semibold mb-2">UCSB Dean's Investment Group</p>
                    <p className="text-muted-foreground mb-4">Mar 2025 – Present • Santa Barbara, CA</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Managing portfolios and conducting equity research, building models and tracking catalysts for
                      real companies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/mkt-advisors-logo.png"
                    alt="MKT Advisors LLC"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Asset Management & Research Intern</h3>
                    <p className="text-blue-600 font-semibold mb-2">MKT Advisors LLC</p>
                    <p className="text-muted-foreground mb-4">Jan 2025 – Present</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Supporting asset management operations and conducting investment research.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/blueprint-llc-logo.png"
                    alt="Blueprint LLC"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Investment Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-2">Bullprint LLC</p>
                    <p className="text-muted-foreground mb-4">May 2023 – Present</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Conducting investment analysis and research to support investment decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
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
                    src="/images/ucsb-logo.png"
                    alt="UC Santa Barbara"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">University of California, Santa Barbara</h3>
                    <p className="text-blue-600 font-semibold mb-2">B.A. Economics (in progress)</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Currently pursuing a Bachelor's degree in Economics with a focus on financial markets and
                      investment analysis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/santa-monica-college-logo.png"
                    alt="Santa Monica College"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Santa Monica College</h3>
                    <p className="text-blue-600 font-semibold mb-2">Coursework prior to transfer</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Completed foundational coursework before transferring to UC Santa Barbara.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Book a free 30-minute consultation with Cole to get personalized guidance on investing, public markets
            research, and building your finance knowledge.
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl transition-colors duration-300"
          >
            <a href="https://calendly.com/cole-youthinvestingnetwork/30min" target="_blank" rel="noopener noreferrer">
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
