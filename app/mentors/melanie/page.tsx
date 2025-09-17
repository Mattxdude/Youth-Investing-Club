"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, GraduationCap, Briefcase, ExternalLink } from "lucide-react"
import AuthHeader from "@/components/auth-header"
import MobileMenu from "@/components/mobile-menu"

export default function MelaniePage() {
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
                src="/images/melanie-silva.jpeg"
                alt="Melanie Silva"
                width={300}
                height={300}
                className="rounded-2xl mx-auto shadow-2xl ring-4 ring-blue-500/20 object-cover"
              />
            </div>

            <div>
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                Economics Student & Strategic Investment Analyst
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">Melanie Silva</h1>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                UCSB Investment Connection Treasurer, Strategic Investments Certificate
              </p>

              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4" />
                <span>Santa Barbara, California</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm entering my junior year at the University of California, Santa Barbara. I'm a passionate investor
                and aim to guide my peers into the world of investing. I am currently completing a Strategic Investments
                certificate through UCSB PaCE and plan on pursuing a career in Wealth Management.
              </p>

              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-xl transition-colors duration-300"
              >
                <a href="https://calendly.com/melaniesilva10" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Free 30-min Session
                </a>
              </Button>
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
                I believe that investing is a necessary tool for college aged students to kickstart a successful
                financial future. Compound interest is exceptional as one starts their investing career as early as
                possible. I'm passionate about helping my peers understand the fundamentals of investing and building
                wealth from an early age.
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
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                    <Image
                      src="/images/ucsb-investment-connection-logo.png"
                      alt="UCSB Investment Connection"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Treasurer</h3>
                    <p className="text-blue-600 font-semibold mb-2">UCSB Investment Connection</p>
                    <p className="text-muted-foreground mb-4">Mar 2025 – Present • Santa Barbara, California</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Leading financial operations and treasury management for the university's premier investment
                      organization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                    <Image
                      src="/images/ucsb-investment-connection-logo.png"
                      alt="UCSB Investment Connection"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Portfolio Management Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-2">UCSB Investment Connection</p>
                    <p className="text-muted-foreground mb-4">
                      Mar 2024 – Present • 1 yr 7 mos • Santa Barbara, California
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Analyzing investment opportunities and managing portfolio strategies for the student-run
                      investment fund.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                    <Image
                      src="/images/ucsb-finance-connection-logo.png"
                      alt="UCSB Finance Connection"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Active Member</h3>
                    <p className="text-blue-600 font-semibold mb-2">UCSB Finance Connection</p>
                    <p className="text-muted-foreground mb-4">Oct 2023 – Present • 2 yrs • Santa Barbara, California</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Selected for exclusive General Finance Workshop focused on developing technical and behavioral
                      skills necessary to succeed in financial settings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                    <Image
                      src="/images/ucsb-logo.png"
                      alt="UC Santa Barbara"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Summer Academic Peer Mentor</h3>
                    <p className="text-blue-600 font-semibold mb-2">UC Santa Barbara</p>
                    <p className="text-muted-foreground mb-4">Jul 2024 – Sep 2024 • 3 mos • Hybrid</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Mentored incoming students in academic success strategies and university transition support.
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
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                    <Image
                      src="/images/ucsb-logo.png"
                      alt="UC Santa Barbara"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">UC Santa Barbara</h3>
                    <p className="text-blue-600 font-semibold mb-2">Bachelor of Arts - BA, Economics/Accounting</p>
                    <p className="text-muted-foreground mb-4">2023 – 2027</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Pursuing a comprehensive education in economics and accounting with focus on investment analysis
                      and financial management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                    <Image
                      src="/images/ucsb-logo.png"
                      alt="UC Santa Barbara"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">UC Santa Barbara</h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      Professional Certificate, Strategic Investment Program
                    </p>
                    <p className="text-muted-foreground mb-4">Jan 2025</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Advanced certificate program taken through UC Santa Barbara Professional and Continuing Education
                      extension, focusing on strategic investment principles and portfolio management.
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
            Book a free 30-minute consultation with Melanie to get personalized guidance on student investing, strategic
            investments, and building your financial future from college.
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl transition-colors duration-300"
          >
            <a href="https://calendly.com/melaniesilva10" target="_blank" rel="noopener noreferrer">
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
