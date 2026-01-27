"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Calendar, MapPin, Briefcase, GraduationCap, Award, ChevronDown } from "lucide-react"
import AuthHeader from "@/components/auth-header"

export default function EmilianoMentorPage() {
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
    <div id="top" className="min-h-screen bg-background">
      <AuthHeader />

      {/* Hero Section */}
      <section className="gradient-hero py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Link href="/mentors" className="text-primary hover:text-primary/80 font-medium transition-colors">
              ← Back to all mentors
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/emiliano-hurtado.png"
                alt="Emiliano Hurtado"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl ring-4 ring-blue-500/20 object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4 bg-blue-600 text-white">Private Equity & Fixed Income</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">Emiliano Hurtado</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Incoming Private Equity Business Development Analyst
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Santa Barbara, California</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-5 h-5" />
                  <span>Incoming PE Analyst at K1 Investment Management</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-5 h-5" />
                  <span>UC Santa Barbara - Economics & Accounting</span>
                </div>
              </div>

              <a href="https://calendly.com/emilianohurtado-ucsb/30min" target="_blank" rel="noopener noreferrer">
                <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Free Session with Emiliano
                </Button>
              </a>
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
      <section className="section-padding">
        <div className="container-max">
          <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground">About Emiliano</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Emiliano is an incoming Private Equity Business Development Analyst at K1 Investment Management and a senior at UCSB studying Economics & Accounting. A first-generation college student and former community college transfer, he has navigated the path from Solano County to institutional finance, with stops at Dimensional Fund Advisors as a Portfolio Management Intern and Solano EDC as an Assistant Project Manager along the way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Emiliano views finance as the ultimate tool for impact. He specializes in bridging technical skills with the 'soft skills' needed to navigate high-level rooms. He is here to help students demystify the industry, build a 'dangerous' skillset and turn their ambition into a career.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why I Mentor Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-foreground">Why I Mentor</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My motivation to mentor is rooted in a desire to create leverage within my community. As a first-generation student who navigated the path from community college to Private Equity, I realized early on that while talent is equally distributed, the "cheat codes" to this industry are not. I view mentorship as a necessary act of reciprocity; I am the product of people who took a bet on me when I had no track record, and I have a responsibility to pay that debt forward by shortening the learning curve for the next generation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Beyond altruism, this is also about rigor—I believe the only way to truly master a concept is to teach it, so mentoring forces me to simplify complex ideas and stay sharp as an investor. Ultimately, I don't want to be the "exception" in the room; by mentoring now, I am actively normalizing the presence of Latinos in high finance and building the network of peers I hope to work with in ten years.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Work Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* K1 Investment Management */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image
                      src="/images/k1-investment-logo.png"
                      alt="K1 Investment Management"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Incoming Private Equity Business Development Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-1">K1 Investment Management</p>
                    <p className="text-sm text-muted-foreground">Manhattan Beach, California</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dimensional Fund Advisors */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image
                      src="/images/dimensional-logo.png"
                      alt="Dimensional Fund Advisors"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Portfolio Management Intern</h3>
                    <p className="text-blue-600 font-semibold mb-1">Dimensional Fund Advisors</p>
                    <p className="text-sm text-muted-foreground">Austin, Texas • Jun 2025 - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UCSB Investment Advisory Committee */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image
                      src="/images/ucsb-iac-logo.png"
                      alt="UCSB IAC"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Fixed Income Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-1">UCSB Investment Advisory Committee (IAC)</p>
                    <p className="text-sm text-muted-foreground">Santa Barbara, CA • Apr 2025 - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TAMID Group - Co-Director */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image
                      src="/images/tamid-group-logo.png"
                      alt="TAMID Group"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Co-Director of Fund</h3>
                    <p className="text-blue-600 font-semibold mb-1">TAMID Group at UCSB</p>
                    <p className="text-sm text-muted-foreground">Santa Barbara, CA • Mar 2025 - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CJG Ventures */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image
                      src="/images/compounded-interest-logo.png"
                      alt="CJG Ventures / Compounded Interest"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Summer Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-1">CJG Ventures</p>
                    <p className="text-sm text-muted-foreground">New York, NY • Jun 2024 - Sep 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solano EDC */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image
                      src="/images/solano-edc-logo.png"
                      alt="Solano EDC"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Assistant Project Manager</h3>
                    <p className="text-blue-600 font-semibold mb-1">Solano EDC</p>
                    <p className="text-sm text-muted-foreground">Fairfield, CA • Mar 2024 - Aug 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Education</h2>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
            {/* UC Santa Barbara */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image src="/images/ucsb-logo.png" alt="UCSB" width={48} height={48} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">UC Santa Barbara</h3>
                    <p className="text-blue-600 font-semibold mb-1">Economics & Accounting</p>
                    <p className="text-sm text-muted-foreground">Senior • First-Generation College Student • Community College Transfer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 to-purple-600">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Break Into Finance?</h2>
              <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                Book a free 30-minute consultation with Emiliano to discuss your path to private equity and institutional finance.
              </p>
              <a href="https://calendly.com/emilianohurtado-ucsb/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Your Free Session
                </Button>
              </a>
            </CardContent>
          </Card>
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
            <p className="text-muted-foreground font-medium">© 2025 Youth Investing Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
