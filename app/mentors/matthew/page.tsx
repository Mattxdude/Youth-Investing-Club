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

export default function MatthewPage() {
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
                src="/images/matthew-hansaab.png"
                alt="Matthew Hanasab"
                width={300}
                height={300}
                className="rounded-2xl mx-auto shadow-2xl ring-4 ring-blue-500/20 object-cover"
              />
            </div>

            <div>
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                Founder & Young Investor
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">Matthew Hanasab</h1>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                3+ years in the stock market, consistently outperforming the market
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4" />
                <span>Los Angeles, California</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                I am a passionate investor who has spent the past three years immersed in the stock market. In high
                school, I founded the Youth Investing Club, which became the inspiration for the website you are on
                right now. Through careful research and individual stock picking, I have consistently outperformed the
                market.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-xl transition-colors duration-300"
                >
                  <a
                    href="https://calendly.com/matthanasab/yin-interview"
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
                    href="https://www.linkedin.com/in/matthew-hanasab/"
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
                My second greatest passion is teaching, which I learned from starting a club in high school. I also
                realized that most of my peers had a very small understanding of basic investing principles. My mission
                is to make sure that my generation is able to maximize their wealth potential. Now, at 17 years old and
                in my first year of college, I remain dedicated to helping others learn and succeed in investing.
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
                    src="/images/companies/youth-investing-network-logo.png"
                    alt="Youth Investing Network"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">President and Founder</h3>
                    <p className="text-blue-600 font-semibold mb-2">Youth Investing Network</p>
                    <p className="text-muted-foreground mb-4">Aug 2021 – Present • Los Angeles, California</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded and leading the Youth Investing Network, connecting young investors with experienced
                      mentors and providing financial education resources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/z-logo.png"
                    alt="Z Company"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Investor Relations Intern</h3>
                    <p className="text-blue-600 font-semibold mb-2">Zyra</p>
                    <p className="text-muted-foreground mb-4">May 2025 – Present • Los Angeles, California</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Supporting investor relations activities and communications for the company's stakeholder
                      engagement initiatives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/companies/sagient-logo.png"
                    alt="Sagient"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Summer Intern</h3>
                    <p className="text-blue-600 font-semibold mb-2">Sagient</p>
                    <p className="text-muted-foreground mb-4">Jun 2023 – Aug 2023 • Beverly Hills, California</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Gained hands-on experience in business operations and strategic planning during summer internship
                      program.
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
                    <p className="text-blue-600 font-semibold mb-2">Economics and Accounting</p>
                    <p className="text-muted-foreground mb-4">2025 – 2029</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Currently pursuing a Bachelor's degree in Economics and Accounting with a focus on financial
                      markets and investment analysis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/universities/beverly-hills-hs-logo.png"
                    alt="Beverly Hills High School"
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Beverly Hills High School</h3>
                    <p className="text-blue-600 font-semibold mb-2">High School Diploma</p>
                    <p className="text-muted-foreground mb-4">Aug 2021 – May 2025</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded the Youth Investing Club, participated in Varsity Golf, Cross Country, National Honors
                      Society, Skills USA, and CSF. Graduated with W 4.3/ UW 3.8 GPA.
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
            Book a free 30-minute consultation with Matthew to get personalized guidance on investing, stock market
            strategies, and building your finance knowledge from a young investor's perspective.
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl transition-colors duration-300"
          >
            <a
              href="https://calendly.com/matthanasab/yin-interview"
              target="_blank"
              rel="noopener noreferrer"
            >
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
