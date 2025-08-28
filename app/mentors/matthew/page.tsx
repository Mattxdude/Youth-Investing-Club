"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function MatthewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <header className="bg-background/95 backdrop-blur-md border-b border-border px-4 md:px-6 py-4 md:py-5 sticky top-0 z-50 shadow-sm">
        <div className="container-max flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-all duration-300 interactive-element"
          >
            <Image
              src="/images/graduation-cap-logo.png"
              alt="Youth Investing Network"
              width={32}
              height={32}
              className="md:w-10 md:h-10 rounded-lg shadow-sm"
            />
            <span className="text-base md:text-xl font-bold text-foreground tracking-tight">
              Youth Investing Network
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 interactive-element text-base"
            >
              Home
            </Link>
            <Link
              href="/mentors"
              className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 interactive-element text-base"
            >
              Mentors
            </Link>
            <Link
              href="/network"
              className="text-muted-foreground hover:text-foreground font-medium transition-all duration-300 interactive-element text-base"
            >
              Network
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

      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <div className="mb-10">
              <Image
                src="/images/matthew-hansaab.png"
                alt="Matthew Hanasab"
                width={250}
                height={250}
                className="rounded-3xl mx-auto border-4 border-blue-400 object-cover shadow-2xl ring-8 ring-blue-500/20"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Matthew Hanasab
            </h1>
            <p className="text-blue-300 text-2xl font-semibold mb-4">Founder & Young Investor</p>
            <p className="text-slate-300 text-xl">
              3+ years in the stock market, consistently outperforming the market
            </p>
          </div>

          <div className="space-y-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                  About
                </h2>
                <p className="text-slate-200 leading-relaxed text-lg">
                  I am a passionate investor who has spent the past three years immersed in the stock market. In high
                  school, I founded the Youth Investing Club, which became the inspiration for the website you are on
                  right now. Through careful research and individual stock picking, I have consistently outperformed the
                  market. Now, at 17 years old and in my first year of college, I remain dedicated to helping others
                  learn and succeed in investing.
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
                  My second greatest passion is teaching, which I learned from starting a club in high school. I also
                  realized that most of my peers had a very small understanding of basic investing principles. My
                  mission is to make sure that my generation is able to maximize their wealth potential.
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
                          src="/images/companies/youth-investing-network-logo.png"
                          alt="Youth Investing Network"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">President and Founder</h3>
                        <p className="text-blue-400 font-semibold">Youth Investing Network</p>
                        <p className="text-gray-400">Aug 2021 - Present • Los Angeles, California</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/companies/z-logo.png"
                          alt="Z Company"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Investor Relations Intern</h3>
                        <p className="text-blue-400 font-semibold">{"Zyra"}</p>
                        <p className="text-gray-400">May 2025 - Present • Los Angeles, California</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                        <Image
                          src="/images/companies/sagient-logo.png"
                          alt="Sagient"
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Summer Intern</h3>
                        <p className="text-blue-400 font-semibold">Sagient</p>
                        <p className="text-gray-400">Jun 2023 - Aug 2023 • Beverly Hills, California</p>
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
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src="/images/universities/ucsb-logo.png"
                        alt="UC Santa Barbara"
                        width={48}
                        height={48}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">UC Santa Barbara</h3>
                      <p className="text-blue-400 font-semibold">Economics and Accounting</p>
                      <p className="text-gray-400">2025 - 2029</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                      <Image
                        src="/images/universities/beverly-hills-hs-logo.png"
                        alt="Beverly Hills High School"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Beverly Hills High School</h3>
                      <p className="text-blue-400 font-semibold">Grades: W 4.3/ UW 3.8</p>
                      <p className="text-gray-400">Aug 2021 - May 2025</p>
                      <p className="text-gray-400 text-sm mt-2">
                        Founded the Youth Investing Club, Varsity Golf, Cross Country, National Honors Society, Skills
                        USA, CSF member
                      </p>
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
                  href="https://calendly.com/matthew-youthinvestingnetwork/30min"
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
