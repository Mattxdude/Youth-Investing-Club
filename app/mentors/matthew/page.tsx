"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function MatthewPage() {
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
                src="/images/matthew-hansaab.png"
                alt="Matthew Hansaab"
                width={200}
                height={200}
                className="rounded-2xl mx-auto border-4 border-blue-500 object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Matthew Hansaab</h1>
            <p className="text-blue-400 text-xl font-semibold mb-2">Founder & Young Investor</p>
            <p className="text-gray-300 text-lg">3+ years in the stock market, consistently outperforming the market</p>
          </div>

          <div className="space-y-12">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">About:</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I am a passionate investor who has spent the past three years immersed in the stock market. In high
                  school, I founded the Youth Investing Club, which became the inspiration for the website you are on
                  right now. Through careful research and individual stock picking, I have consistently outperformed the
                  market. Now, at 17 years old and in my first year of college, I remain dedicated to helping others
                  learn and succeed in investing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why do I mentor:</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  My second greatest passion is teaching, which I learned from starting a club in high school. I also
                  realized that most of my peers had a very small understanding of basic investing principles. My
                  mission is to make sure that my generation is able to maximize their wealth potential.
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

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
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
                      <p className="text-gray-400">2020 - 2023</p>
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
                      <p className="text-gray-400">Aug 2017 - May 2020</p>
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
