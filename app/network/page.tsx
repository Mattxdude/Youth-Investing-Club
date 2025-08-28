"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "@/components/mobile-menu"
import { createClient } from "@/lib/supabase/client"
import { User, MapPin, Briefcase, GraduationCap, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

interface Profile {
  id: string
  full_name: string | null
  email: string
  profile_image_url: string | null
  location: string | null
  about_me: string | null
  experience: string | null
  education: string | null
  interests: string[] | null
  linkedin_url: string | null
  website_url: string | null
  is_public: boolean
  created_at: string
}

export default function NetworkPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProfiles() {
      const supabase = createClient()

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("is_public", true)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching profiles:", error)
      } else {
        setProfiles(data || [])
      }
      setLoading(false)
    }

    fetchProfiles()
  }, [])

  const publicProfiles = profiles

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
              className="text-foreground font-medium transition-all duration-300 interactive-element text-base"
            >
              Network
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-1 md:gap-4">
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

          <MobileMenu />
        </div>
      </header>

      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">Youth Investing Network</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-medium max-w-3xl mx-auto">
              Connect with like-minded young investors, share experiences, and grow your financial knowledge together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary px-8 py-4 text-lg rounded-xl" asChild>
                <Link href="/signup">Join the Network</Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl bg-transparent"
                asChild
              >
                <Link href="/mentors">Find a Mentor</Link>
              </Button>
            </div>
          </div>

          {/* Network Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{publicProfiles.length}</div>
                <div className="text-blue-200">Active Members</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-blue-200">Expert Mentors</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-blue-200">Learning Opportunities</div>
              </CardContent>
            </Card>
          </div>

          {/* Member Profiles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Our Community</h2>

            {loading ? (
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-12 text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-blue-300 border-t-transparent rounded-full mx-auto mb-4"></div>
                  <p className="text-blue-200">Loading community members...</p>
                </CardContent>
              </Card>
            ) : publicProfiles.length === 0 ? (
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-12 text-center">
                  <User className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No Members Yet</h3>
                  <p className="text-blue-200 mb-6">Be the first to join our growing community!</p>
                  <Button className="btn-primary" asChild>
                    <Link href="/signup">Join Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publicProfiles.map((profile) => (
                  <Card
                    key={profile.id}
                    className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      {/* Profile Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                          {profile.profile_image_url ? (
                            <img
                              src={profile.profile_image_url || "/placeholder.svg"}
                              alt={profile.full_name || "Profile"}
                              className="w-16 h-16 object-cover"
                            />
                          ) : (
                            <span className="text-xl font-bold text-white">
                              {profile.full_name?.charAt(0) || profile.email?.charAt(0).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white">
                            {profile.full_name || "Anonymous Member"}
                          </h3>
                          {profile.location && (
                            <div className="flex items-center gap-1 text-blue-200 text-sm">
                              <MapPin className="w-3 h-3" />
                              {profile.location}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* About Me */}
                      {profile.about_me && (
                        <p className="text-blue-100 text-sm mb-4 line-clamp-3">{profile.about_me}</p>
                      )}

                      {/* Experience & Education Icons */}
                      <div className="flex gap-4 mb-4">
                        {profile.experience && (
                          <div className="flex items-center gap-1 text-blue-200 text-xs">
                            <Briefcase className="w-3 h-3" />
                            <span>Experience</span>
                          </div>
                        )}
                        {profile.education && (
                          <div className="flex items-center gap-1 text-blue-200 text-xs">
                            <GraduationCap className="w-3 h-3" />
                            <span>Education</span>
                          </div>
                        )}
                      </div>

                      {/* Interests */}
                      {profile.interests && profile.interests.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {profile.interests.slice(0, 3).map((interest: string, index: number) => (
                              <Badge key={index} variant="secondary" className="text-xs bg-blue-600/50 text-blue-100">
                                {interest}
                              </Badge>
                            ))}
                            {profile.interests.length > 3 && (
                              <Badge variant="secondary" className="text-xs bg-blue-600/50 text-blue-100">
                                +{profile.interests.length - 3}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Social Links */}
                      <div className="flex gap-2">
                        {profile.linkedin_url && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                            asChild
                          >
                            <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </Button>
                        )}
                        {profile.website_url && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                            asChild
                          >
                            <a href={profile.website_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
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
