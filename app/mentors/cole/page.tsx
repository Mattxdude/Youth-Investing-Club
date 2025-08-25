"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ColePage() {
  const workExperience = [
    {
      title: "President",
      company: "UCSB Investment Connection",
      period: "Feb 2025 - Present",
      location: "Santa Barbara, CA",
      logo: "/ucsb-investment-logo.png",
    },
    {
      title: "Portfolio Manager & Equity Research",
      company: "UCSB Dean's Investment Group",
      period: "Mar 2025 - Present",
      location: "Santa Barbara, CA",
      logo: "/ucsb-logo.png",
    },
    {
      title: "Asset Management & Research Intern",
      company: "MKT Advisors LLC",
      period: "Jan 2025 - Present",
      location: "",
      logo: "/placeholder.svg",
    },
    {
      title: "Investment Analyst",
      company: "Bullprint LLC",
      period: "May 2023 - Present",
      location: "",
      logo: "/placeholder.svg",
    },
    {
      title: "Co-Founder & President",
      company: "Stock Investment & Market Analysis Club",
      period: "Dec 2023 - Sep 2024",
      location: "",
      logo: "/placeholder.svg",
    },
    {
      title: "Barista",
      company: "Alfred",
      period: "Apr 2023 - Sep 2024",
      location: "",
      logo: "/placeholder.svg",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/images/graduation-cap-logo.png"
                alt="Youth Investing Network"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-gray-900">Youth Investing Network</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/network" className="text-gray-600 hover:text-gray-900 transition-colors">
                Network
              </Link>
              <Link href="/mentors" className="text-gray-600 hover:text-gray-900 transition-colors">
                Mentors
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
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

      <div className="pt-16 bg-black text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-6">Cole Bechtel</h1>

            <div className="mb-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50"></div>
                <Image
                  src="/images/cole-bechtel.png"
                  alt="Cole Bechtel"
                  width={200}
                  height={200}
                  className="relative rounded-full border-4 border-blue-500"
                />
              </div>
            </div>

            <p className="text-blue-400 font-semibold mb-2">Economics Student & Investment Connection President</p>
            <p className="text-gray-300 mb-6">UC Santa Barbara • Markets & Investing Specialist</p>

            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Economics student at UC Santa Barbara and president of UCSB's Investment Connection. Passionate about
              markets and investing, with extensive experience in public markets research, investor communication, and
              hands-on finance experiences for students.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About:</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm Cole Bechtel, an economics student at UC Santa Barbara and president of UCSB's Investment Connection.
              I'm passionate about markets and investing, and I spend a lot of my time working on public markets
              research, investor communication, and building hands-on finance experiences for students. I'm also
              involved with the Dean's Investment Group at UCSB, where I get to dive deeper into real companies, build
              models, and track catalysts.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why do I mentor:</h2>
            <p className="text-gray-300 leading-relaxed">
              I know how intimidating it can feel to start learning about investing and personal finances. For a lot of
              people, even asking the first question takes courage because the stock market seems so dense or reserved
              for experts. The truth is, in the right environment with the right guidance, anyone can learn how to
              navigate it. I mentor to create that space, where questions are encouraged, concepts are broken down
              clearly, and students can see that the stock market really is for everyone.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Work Experience:</h2>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{job.title}</h3>
                    <p className="text-gray-300">{job.company}</p>
                    <p className="text-gray-400 text-sm">{job.period}</p>
                    {job.location && <p className="text-gray-400 text-sm">{job.location}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Education:</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/ucsb-logo.png" alt="UC Santa Barbara logo" width={40} height={40} className="rounded" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">University of California, Santa Barbara</h3>
                  <p className="text-gray-300">B.A. Economics (in progress)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg"
                    alt="Santa Monica College logo"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Santa Monica College</h3>
                  <p className="text-gray-300">Coursework prior to transfer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg">
              <a href="https://calendly.com/cole-youthinvestingnetwork/30min" target="_blank" rel="noopener noreferrer">
                Book with Calendly
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
