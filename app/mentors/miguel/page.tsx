"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function MiguelPage() {
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
                src="/images/miguel-gutierrez.png"
                alt="Miguel Gutierrez"
                width={250}
                height={250}
                className="rounded-3xl mx-auto border-4 border-blue-400 object-cover shadow-2xl ring-8 ring-blue-500/20"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Miguel Gutierrez
            </h1>
            <p className="text-blue-300 text-2xl font-semibold mb-4">Investment Professional & Career Coach</p>
            <p className="text-slate-300 text-xl">8+ years in investment industry, $700M invested</p>
          </div>

          <div className="space-y-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                  About
                </h2>
                <p className="text-slate-200 leading-relaxed text-lg">
                  I have over eight years of experience in the investment industry, where I've invested $700M across
                  private equity, venture capital, hedge funds, and public equity. I've had the privilege of
                  interviewing and investing with some of the world's most successful investors. I've also coached
                  through programs like Girls Who Invest and Sponsors for Educational Opportunity, helping students
                  build authentic stories, take on leadership roles, and create thoughtful action plans. One of my
                  greatest passions is personal finance. I love investing in college and love working with young people
                  to share what I've learned and to inspire them about the power and importance of investing for their
                  future.
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
                  In all my roles, I've loved working with college students and those early in their careers, helping
                  them learn about investing. I find it deeply rewarding to see the impact that mentoring can have on
                  their personal lives and their families, especially when it comes to personal finance.
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
                          src="/images/companies/seo-logo.png"
                          alt="SEO"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Career Coach</h3>
                        <p className="text-blue-400 font-semibold">SEO (Sponsors for Educational Opportunity)</p>
                        <p className="text-gray-400">Feb 2022 - Present • New York, New York</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">P</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Founder</h3>
                        <p className="text-blue-400 font-semibold">Plum House Investment Management LLC</p>
                        <p className="text-gray-400">Mar 2022 - Present • New York, New York</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/companies/gkff-logo.png"
                          alt="George Kaiser Family Foundation"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Investment Principal</h3>
                        <p className="text-blue-400 font-semibold">George Kaiser Family Foundation</p>
                        <p className="text-gray-400">May 2023 - March 2025 • Tulsa, Oklahoma</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/companies/fremont-logo.png"
                          alt="Fremont Group"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Investment Associate</h3>
                        <p className="text-blue-400 font-semibold">Fremont Group</p>
                        <p className="text-gray-400">Feb 2021 - Mar 2023 • San Francisco, California</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/companies/mellon-logo.png"
                          alt="Mellon Foundation"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Investment Analyst</h3>
                        <p className="text-blue-400 font-semibold">The Andrew W. Mellon Foundation</p>
                        <p className="text-gray-400">Feb 2019 - Feb 2021 • New York, New York</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-1">
                        <Image
                          src="/images/companies/stellant-logo.png"
                          alt="Salient Partners"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Investment Analyst</h3>
                        <p className="text-blue-400 font-semibold">Salient Partners</p>
                        <p className="text-gray-400">Jun 2017 - Jan 2019 • Houston, Texas</p>
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
                        src="/images/universities/smu-logo.png"
                        alt="Southern Methodist University"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Southern Methodist University</h3>
                      <p className="text-blue-400 font-semibold">MBA, Finance</p>
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
                  href="https://calendly.com/miguel-youthinvestingnetwork/30min"
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
