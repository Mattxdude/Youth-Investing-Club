"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Calendar, MapPin, Briefcase, GraduationCap, Award, ChevronDown, Linkedin } from "lucide-react"
import AuthHeader from "@/components/auth-header"

export default function DiyaMentorPage() {
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
                src="/images/diya-deshpande.jpg"
                alt="Diya Deshpande"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl ring-4 ring-blue-500/20 object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4 bg-blue-600 text-white">Investment Banking & Finance</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">Diya Deshpande</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Economics & Statistical Science Student
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Santa Barbara, California</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-5 h-5" />
                  <span>Investment Banking Analyst at New York Bay Capital</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-5 h-5" />
                  <span>UC Santa Barbara - Economics & Statistical Science</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://calendly.com/diyadeshpande" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Free Session with Diya
                  </Button>
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white px-4 py-4 text-lg rounded-xl transition-colors duration-300 bg-transparent"
                >
                  <a
                    href="https://www.linkedin.com/in/diyadeshpande"
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

      {/* About Section */}
      <section className="section-padding">
        <div className="container-max">
          <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground">About Diya</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an Economics and Statistical Science student at UC Santa Barbara with a strong interest in finance
                and deep passion for investing. I've had a variety of experiences across the finance and technology
                industries, and am aspiring to pursue a career in investment banking.
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
                The idea of "paying it forward" is extremely important to me, as there have been many people in my
                personal and professional life that have given their time and effort to me and helped me become who I am
                today. I want to continue to do the same for others, and provide mentorship, education, and advice for
                those who are seeking it!
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
            {/* New York Bay Capital - Fall Analyst */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image
                      src="/images/ny-bay-capital-logo.png"
                      alt="NY Bay Capital"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Investment Banking Fall Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-1">New York Bay Capital</p>
                    <p className="text-sm text-muted-foreground">New York, NY</p>
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
                    <h3 className="text-xl font-bold text-foreground mb-1">Investment Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-1">UCSB Investment Advisory Committee</p>
                    <p className="text-sm text-muted-foreground">Santa Barbara, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      in
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Marketing Technology Operations Intern</h3>
                    <p className="text-blue-600 font-semibold mb-1">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Sunnyvale, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New York Bay Capital - Summer Analyst */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image
                      src="/images/ny-bay-capital-logo.png"
                      alt="NY Bay Capital"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">Investment Banking Summer Analyst</h3>
                    <p className="text-blue-600 font-semibold mb-1">New York Bay Capital</p>
                    <p className="text-sm text-muted-foreground">New York, NY</p>
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
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* UC Santa Barbara */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Image src="/images/ucsb-logo.png" alt="UCSB" width={48} height={48} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">UC Santa Barbara</h3>
                    <p className="text-blue-600 font-semibold mb-1">Economics & Statistical Science</p>
                    <p className="text-sm text-muted-foreground">Class of 2028</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Valley Christian High School */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Valley Christian High School</h3>
                    <p className="text-sm text-muted-foreground">High School Diploma</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Finance Journey?</h2>
              <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                Book a free 30-minute consultation with Diya to discuss your investment goals and career aspirations.
              </p>
              <a href="https://calendly.com/diyadeshpande" target="_blank" rel="noopener noreferrer">
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
