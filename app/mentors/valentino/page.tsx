"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import AuthHeader from "@/components/auth-header"

export default function ValentinoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <AuthHeader />

      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <div className="mb-10">
              <Image
                src="/images/valentino-curtis.png"
                alt="Valentino Curtis"
                width={250}
                height={250}
                className="rounded-3xl mx-auto border-4 border-blue-400 object-cover shadow-2xl ring-8 ring-blue-500/20"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Valentino Curtis
            </h1>
            <p className="text-blue-300 text-2xl font-semibold mb-4">Student Investor & Finance Enthusiast</p>
            <p className="text-slate-300 text-xl">Several years of hands-on investing experience</p>
          </div>

          <div className="space-y-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                  About
                </h2>
                <p className="text-slate-200 leading-relaxed text-lg">
                  I'm a college student with several years of hands-on investing experience, beginning in high school
                  where I first developed a passion for financial markets. Since then, I've dedicated myself to
                  researching individual companies, building portfolios, and continuously learning about how economic
                  trends shape investment opportunities. My goal is to share this knowledge with others while growing
                  alongside the next generation of investors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                  Why do I mentor
                </h2>
                <p className="text-slate-200 leading-relaxed text-lg">
                  I mentor because I believe financial literacy is a skill that can change lives. When I first started
                  investing, I realized how many young people lacked guidance or confidence in approaching investing and
                  money as a whole. I hope to break those barriers, provide knowledge, and help others build the
                  confidence to make financial decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                  Work Experience
                </h2>
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
                        <p className="text-gray-400">Jun 2023- Aug 2023 • Washington, United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                  Education
                </h2>
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
