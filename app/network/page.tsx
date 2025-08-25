"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-background">
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

          <div className="flex items-center gap-1 md:gap-4">
            <Button className="btn-primary px-2 md:px-8 py-2 md:py-3 text-xs md:text-base rounded-lg" asChild>
              <Link href="/signup">Join YIN</Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-2 md:px-8 py-2 md:py-3 text-xs md:text-base font-semibold transition-all duration-300 bg-transparent rounded-lg interactive-element"
              asChild
            >
              <a href="https://form.jotform.com/251635444743055" target="_blank" rel="noopener noreferrer">
                <span className="hidden md:inline">Apply to become a mentor</span>
                <span className="md:hidden">Apply</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            <Image
              src="/images/graduation-cap-logo.png"
              alt="Under Construction"
              width={120}
              height={120}
              className="mx-auto mb-8 drop-shadow-lg rounded-2xl opacity-80"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">Pardon Our Dust</h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium">
            We're building something amazing for our network feature.
            <br />
            Check back soon!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-4 text-lg rounded-xl" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl bg-transparent"
              asChild
            >
              <Link href="/mentors">Meet Our Mentors</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 backdrop-blur-sm section-padding border-t border-border">
        <div className="container-max">
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
                  href="mailto:matthew@youthinvestingnetwork.com"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/company/youth-investing-network"
                  target="_blank"
                  rel="noopener noreferrer"
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
                <a
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Terms of Service
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-6 text-xl">Support</h4>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-primary hover:text-primary/80 font-medium transition-all duration-300 interactive-element text-base"
                >
                  Support
                </a>
              </div>
              <p className="text-muted-foreground text-sm mt-8 leading-relaxed font-medium">
                This is not financial advice.
                <br />
                This website is for informational
                <br />
                purposes only.
              </p>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground font-medium">© 2024 Youth Investing Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
