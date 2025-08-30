"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, MapPin, ExternalLink, Edit } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !user) {
        router.push("/signin")
        return
      }

      setUser(user)

      // Get profile data
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .single()

      if (profileData) {
        setProfile(profileData)
      }

      setIsLoading(false)
    }

    getProfile()
  }, [router, supabase])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-white shadow-sm border-b border-gray-200">
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
              <Button onClick={handleSignOut} variant="outline">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    {profile?.profile_image_url ? (
                      <img
                        src={profile.profile_image_url || "/placeholder.svg"}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-16 h-16 text-gray-400" />
                    )}
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/profile-setup">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Link>
                  </Button>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {profile?.full_name || user?.email || "Anonymous User"}
                  </h1>
                  <p className="text-gray-600 mb-4">{user?.email}</p>

                  {profile?.location && (
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {profile.location}
                    </div>
                  )}

                  {profile?.about_me && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">About Me</h3>
                      <p className="text-gray-700">{profile.about_me}</p>
                    </div>
                  )}

                  {profile?.interests && profile.interests.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {profile.interests.map((interest: string, index: number) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    {profile?.linkedin_url && (
                      <a
                        href={profile.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        LinkedIn <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                    {profile?.website_url && (
                      <a
                        href={profile.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        Website <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
