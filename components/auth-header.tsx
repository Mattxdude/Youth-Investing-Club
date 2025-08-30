"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import MobileMenu from "@/components/mobile-menu"

export default function AuthHeader() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      setUser(user)

      if (user) {
        // Get profile data for profile picture
        const { data: profileData } = await supabase
          .from("profiles")
          .select("profile_image_url, full_name")
          .eq("user_id", user.id)
          .single()

        if (profileData) {
          setProfile(profileData)
        }
      }

      setIsLoading(false)
    }

    getUser()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        setUser(session.user)
        // Get profile data
        const { data: profileData } = await supabase
          .from("profiles")
          .select("profile_image_url, full_name")
          .eq("user_id", session.user.id)
          .single()

        if (profileData) {
          setProfile(profileData)
        }
      } else if (event === "SIGNED_OUT") {
        setUser(null)
        setProfile(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  return (
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
          <span className="text-base md:text-xl font-bold text-foreground tracking-tight">Youth Investing Network</span>
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

        <div className="hidden md:flex items-center gap-1 md:gap-4">
          {!isLoading && user ? (
            <Link href="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                {profile?.profile_image_url ? (
                  <img
                    src={profile.profile_image_url || "/placeholder.svg"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-5 h-5 text-gray-600" />
                )}
              </div>
              <span className="text-sm font-medium text-foreground">
                {profile?.full_name || user.email?.split("@")[0] || "Profile"}
              </span>
            </Link>
          ) : (
            <>
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
            </>
          )}
        </div>

        <MobileMenu user={user} profile={profile} isLoading={isLoading} />
      </div>
    </header>
  )
}
