"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import MobileMenu from "@/components/mobile-menu"
import ProfileDropdown from "@/components/profile-dropdown"

export default function AuthHeader() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  const fetchProfile = async (userId: string, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      const { data: profileData } = await supabase
        .from("profiles")
        .select("profile_image_url, full_name")
        .eq("user_id", userId)
        .single()

      if (profileData) {
        setProfile(profileData)
        return profileData
      }

      // Wait a bit before retrying (profile might not be created yet)
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    }

    // If no profile found, create a basic one for display purposes
    setProfile({ full_name: user?.email?.split("@")[0] || "User", profile_image_url: null })
    return null
  }

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      setUser(user)

      if (user) {
        await fetchProfile(user.id)
      }

      setIsLoading(false)
    }

    getUser()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("[v0] Auth state change:", event, session?.user?.id)

      if (event === "SIGNED_IN" && session?.user) {
        setUser(session.user)
        setIsLoading(false)
        await fetchProfile(session.user.id)
      } else if (event === "SIGNED_OUT") {
        setUser(null)
        setProfile(null)
        setIsLoading(false)
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
          {user && !isLoading ? (
            <ProfileDropdown user={user} profile={profile} />
          ) : !user && !isLoading ? (
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
          ) : null}
        </div>

        <MobileMenu user={user} profile={profile} isLoading={isLoading} />
      </div>
    </header>
  )
}
