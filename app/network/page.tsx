"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { User } from "lucide-react"
import { useEffect, useState } from "react"
import AuthHeader from "@/components/auth-header"

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

      const { data, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false })

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AuthHeader />

        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading connections...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AuthHeader />

      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">The Network</h1>
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
                <div className="text-3xl font-bold text-white mb-2">{profiles.length}</div>
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

            {profiles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {profiles.map((profile) => {
                  const displayName = profile.full_name || profile.email?.split("@")[0] || "User"
                  const firstLetter = displayName.charAt(0).toUpperCase()

                  return (
                    <Link key={profile.id} href={`/profile/${profile.id}`}>
                      <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 group">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center overflow-hidden">
                            {profile.profile_image_url ? (
                              <img
                                src={profile.profile_image_url || "/placeholder.svg"}
                                alt={displayName}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-xl font-semibold">{firstLetter}</span>
                              </div>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-200 transition-colors">
                            {displayName}
                          </h3>
                          {profile.location && <p className="text-blue-200 text-sm mb-2">{profile.location}</p>}
                          {profile.about_me && (
                            <p className="text-blue-200 text-sm mb-4 line-clamp-2">{profile.about_me}</p>
                          )}
                          {profile.interests && profile.interests.length > 0 && (
                            <div className="flex flex-wrap gap-1 justify-center">
                              {profile.interests.slice(0, 3).map((interest, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full"
                                >
                                  {interest}
                                </span>
                              ))}
                              {profile.interests.length > 3 && (
                                <span className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full">
                                  +{profile.interests.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-blue-300 text-sm font-medium">Click to view profile →</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            ) : (
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
