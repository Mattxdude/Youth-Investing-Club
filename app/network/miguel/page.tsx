"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { MapPin, GraduationCap, Briefcase, Globe, Linkedin } from "lucide-react"

export default function MiguelProfile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image
                src="/images/graduation-cap-logo.png"
                alt="Youth Investing Network"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-semibold text-gray-900">Youth Investing Network</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/network" className="text-gray-700 hover:text-blue-600 transition-colors">
                Network
              </Link>
              <Link href="/mentors" className="text-gray-700 hover:text-blue-600 transition-colors">
                Mentors
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/signup">Join YIN</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <a href="https://form.jotform.com/251635444743055" target="_blank" rel="noopener noreferrer">
                  Apply to become a mentor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-16 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/network" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              ← Back to Network
            </Link>
          </div>

          <Card className="mb-8 bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/images/miguel-gutierrez.png"
                    alt="Miguel Gutierrez"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Miguel Gutierrez</h1>
                  <p className="text-xl text-blue-600 mb-3">Investment Professional & Career Coach</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>8+ years experience</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>New York, NY</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* About Me */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">About Me</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Experienced investment professional with expertise in private equity, venture capital, hedge funds,
                    and public equity. Passionate about mentoring young people in personal finance and investment
                    strategies. I have over eight years of experience in the investment industry, where I've invested
                    $700M across private equity, venture capital, hedge funds, and public equity.
                  </p>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Experience
                  </h2>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-200 pl-4">
                      <h3 className="font-semibold text-gray-900">Career Coach</h3>
                      <p className="text-blue-600 text-sm">
                        SEO (Sponsors for Educational Opportunity) • Feb 2022 - Present
                      </p>
                      <p className="text-gray-700 mt-2">New York, New York</p>
                    </div>
                    <div className="border-l-2 border-blue-200 pl-4">
                      <h3 className="font-semibold text-gray-900">Founder</h3>
                      <p className="text-blue-600 text-sm">Plum House Investment Management LLC • Mar 2022 - Present</p>
                      <p className="text-gray-700 mt-2">New York, New York</p>
                    </div>
                    <div className="border-l-2 border-blue-200 pl-4">
                      <h3 className="font-semibold text-gray-900">Investment Principal</h3>
                      <p className="text-blue-600 text-sm">Mellon Family Foundation • May 2023 - Present</p>
                      <p className="text-gray-700 mt-2">Dallas, Texas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Education
                  </h2>
                  <div className="border-l-2 border-blue-200 pl-4">
                    <h3 className="font-semibold text-gray-900">MBA, Finance</h3>
                    <p className="text-blue-600 text-sm">Southern Methodist University</p>
                    <p className="text-gray-700 mt-2">Specialized in investment management and financial analysis</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Social Links */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Connect</h2>
                  <div className="space-y-3">
                    <a
                      href="https://linkedin.com/in/miguelgutierrez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">LinkedIn</span>
                    </a>
                    <a
                      href="https://calendly.com/miguel-youthinvestingnetwork/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Globe className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Book a Session</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience</span>
                      <span className="font-semibold">8+ years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Investments</span>
                      <span className="font-semibold">$700M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Specialization</span>
                      <span className="font-semibold">Private Equity</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/graduation-cap-logo.png"
                alt="Youth Investing Network"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-gray-600 mb-4">Helping young people start their investing journey</p>
            <div className="flex justify-center space-x-8 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-700">
                Home
              </Link>
              <Link href="/network" className="text-blue-600 hover:text-blue-700">
                Network
              </Link>
              <Link href="/mentors" className="text-blue-600 hover:text-blue-700">
                Mentors
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">© 2024 Youth Investing Network. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
