"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function ColePage() {
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
                src="/images/cole-bechtel.png"
                alt="Cole Bechtel"
                width={200}
                height={200}
                className="rounded-2xl mx-auto border-4 border-blue-500 object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Cole Bechtel</h1>
            <p className="text-blue-400 text-xl font-semibold mb-2">Economics Student & Investment Leader</p>
            <p className="text-gray-300 text-lg">Public markets research, consistently building investment knowledge</p>
          </div>

          <div className="space-y-12">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">About:</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm Cole Bechtel, an economics student at UC Santa Barbara and president of UCSB's Investment
                  Connection. I'm passionate about markets and investing, and I spend a lot of my time working on public
                  markets research, investor communication, and building hands-on finance experiences for students. I'm
                  also involved with the Dean's Investment Group at UCSB, where I get to dive deeper into real
                  companies, build models, and track catalysts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why do I mentor:</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I know how intimidating it can feel to start learning about investing and personal finances. For a lot
                  of people, even asking the first question takes courage because the stock market seems so dense or
                  reserved for experts. The truth is, in the right environment with the right guidance, anyone can learn
                  how to navigate it. I mentor to create that space, where questions are encouraged, concepts are broken
                  down clearly, and students can see that the stock market really is for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Work Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">P</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">President, UCSB Investment Connection</h3>
                        <p className="text-blue-400 font-semibold">Feb 2025 – Present</p>
                        <p className="text-gray-400">Santa Barbara, CA</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">P</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Portfolio Manager & Equity Research, UCSB Dean's Investment Group
                        </h3>
                        <p className="text-blue-400 font-semibold">Mar 2025 – Present</p>
                        <p className="text-gray-400">Santa Barbara, CA</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">A</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Asset Management & Research Intern, MKT Advisors LLC
                        </h3>
                        <p className="text-blue-400 font-semibold">Jan 2025 – Present</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">I</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Investment Analyst, Bullprint LLC</h3>
                        <p className="text-blue-400 font-semibold">May 2023 – Present</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Co-Founder & President, Stock Investment & Market Analysis Club
                        </h3>
                        <p className="text-blue-400 font-semibold">Dec 2023 – Sep 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">B</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Barista, Alfred</h3>
                        <p className="text-blue-400 font-semibold">Apr 2023 – Sep 2024</p>
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
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">UC</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">University of California, Santa Barbara</h3>
                      <p className="text-blue-400 font-semibold">B.A. Economics (in progress)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">SM</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Santa Monica College</h3>
                      <p className="text-blue-400 font-semibold">Coursework prior to transfer</p>
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
                  href="https://calendly.com/cole-youthinvestingnetwork/30min"
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
