"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function ValentinoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/graduation-cap-logo.png"
              alt="Youth Investing Network"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="text-xl font-bold text-gray-900">Youth Investing Network</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/network" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Network
            </Link>
            <Link href="/mentors" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Mentors
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold" asChild>
              <Link href="/signup">Join YIN</Link>
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 font-semibold bg-transparent"
              asChild
            >
              <a href="https://form.jotform.com/251635444743055" target="_blank" rel="noopener noreferrer">
                Apply to become a mentor
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="bg-black text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="mb-8">
              <Image
                src="/images/valentino-curtis.png"
                alt="Valentino Curtis"
                width={200}
                height={200}
                className="rounded-2xl mx-auto border-4 border-blue-500 object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Valentino Curtis</h1>
            <p className="text-blue-400 text-xl font-semibold mb-2">Student Investor & Finance Enthusiast</p>
            <p className="text-gray-300 text-lg">Several years of hands-on investing experience</p>
          </div>

          <div className="space-y-12">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">About:</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a college student with several years of hands-on investing experience, beginning in high school
                  where I first developed a passion for financial markets. Since then, I've dedicated myself to
                  researching individual companies, building portfolios, and continuously learning about how economic
                  trends shape investment opportunities. My goal is to share this knowledge with others while growing
                  alongside the next generation of investors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why do I mentor:</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I mentor because I believe financial literacy is a skill that can change lives. When I first started
                  investing, I realized how many young people lacked guidance or confidence in approaching investing and
                  money as a whole. I hope to break those barriers, provide knowledge, and help others build the
                  confidence to make financial decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Work Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/companies/golden-wealth-capital-logo.png"
                          alt="Golden Wealth Capital"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Wealth Management Intern</h3>
                        <p className="text-blue-400 font-semibold">Golden Wealth Capital</p>
                        <p className="text-gray-400">May 2025 - Sept 2025 • New York, United States</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/companies/ucsb-finance-connection-logo.png"
                          alt="UCSB Finance Connection"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Active Member</h3>
                        <p className="text-blue-400 font-semibold">UCSB Finance Connection</p>
                        <p className="text-gray-400">Sept 2024 - Present • Investment Banking Workshop</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/companies/ucsb-investment-connection-logo.png"
                          alt="UCSB Investment Connection"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Active Member</h3>
                        <p className="text-blue-400 font-semibold">UCSB Investment Connection</p>
                        <p className="text-gray-400">Sept 2024 - Present • PMP</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/companies/washington-unified-logo.png"
                          alt="Washington Unified School District"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Information Technology Intern</h3>
                        <p className="text-blue-400 font-semibold">Washington Unified School District</p>
                        <p className="text-gray-400">Jun 2022/2023 - Aug 2022/2023 • Washington, United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                      <Image
                        src="/images/universities/ucsb-logo.png"
                        alt="UC Santa Barbara"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">UC Santa Barbara</h3>
                      <p className="text-blue-400 font-semibold">Undergraduate, Economics & Accounting</p>
                      <p className="text-gray-400">Aug 2024 - Jun 2028</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-8">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-xl"
                asChild
              >
                <a
                  href="https://calendly.com/d/cv3x-v94-4bk/30-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book with Calendly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
