"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, ExternalLink, User, UserPlus, UserCheck, Clock } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import AuthHeader from "@/components/auth-header"

interface Profile {
  id: string
  user_id: string
  full_name: string | null
  email: string
  profile_image_url: string | null
  location: string | null
  about_me: string | null
  experience: string | null
  education: string | null
  interests: string[] | null
  linkedin_url: string | null
  twitter_url: string | null
  instagram_url: string | null
  website_url: string | null
  is_public: boolean
  created_at: string
}

interface Connection {
  id: string
  requester_id: string
  addressee_id: string
  status: "pending" | "accepted" | "rejected"
  created_at: string
}

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [connection, setConnection] = useState<Connection | null>(null)
  const [loading, setLoading] = useState(true)
  const [connectionLoading, setConnectionLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const supabase = createClient()

      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setCurrentUser(user)

      // Fetch profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", params.id)
        .single()

      if (profileError) {
        console.error("Error fetching profile:", profileError)
        router.push("/network")
        return
      }

      setProfile(profileData)

      // Check for existing connection if user is logged in
      if (user && profileData) {
        const { data: connectionData } = await supabase
          .from("connections")
          .select("*")
          .or(
            `and(requester_id.eq.${user.id},addressee_id.eq.${profileData.user_id}),and(requester_id.eq.${profileData.user_id},addressee_id.eq.${user.id})`,
          )
          .single()

        setConnection(connectionData)
      }

      setLoading(false)
    }

    fetchData()
  }, [params.id, router])

  const handleConnectionRequest = async () => {
    if (!currentUser || !profile) return

    setConnectionLoading(true)
    const supabase = createClient()

    if (connection) {
      if (connection.status === "pending" && connection.addressee_id === currentUser.id) {
        // Accept connection request
        const { error } = await supabase.from("connections").update({ status: "accepted" }).eq("id", connection.id)

        if (!error) {
          setConnection({ ...connection, status: "accepted" })
        }
      }
    } else {
      // Send connection request
      const { data, error } = await supabase
        .from("connections")
        .insert({
          requester_id: currentUser.id,
          addressee_id: profile.user_id,
          status: "pending",
        })
        .select()
        .single()

      if (!error && data) {
        setConnection(data)
      }
    }

    setConnectionLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <AuthHeader />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <AuthHeader />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
            <Button asChild>
              <Link href="/network">Back to Network</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const displayName = profile.full_name || profile.email?.split("@")[0] || "User"
  const firstLetter = displayName.charAt(0).toUpperCase()
  const isOwnProfile = currentUser?.id === profile.user_id

  const getConnectionButtonContent = () => {
    if (!currentUser) return { text: "Sign In to Connect", icon: User, disabled: true }
    if (isOwnProfile) return { text: "Your Profile", icon: User, disabled: true }

    if (connection) {
      switch (connection.status) {
        case "accepted":
          return { text: "Connected", icon: UserCheck, disabled: true }
        case "pending":
          if (connection.requester_id === currentUser.id) {
            return { text: "Request Sent", icon: Clock, disabled: true }
          } else {
            return { text: "Accept Request", icon: UserPlus, disabled: false }
          }
        case "rejected":
          return { text: "Request Declined", icon: User, disabled: true }
      }
    }

    return { text: "Send Connection", icon: UserPlus, disabled: false }
  }

  const buttonContent = getConnectionButtonContent()

  return (
    <div className="min-h-screen bg-background">
      <AuthHeader />

      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-6" asChild>
              <Link href="/network">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Network
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                {profile.profile_image_url ? (
                  <img
                    src={profile.profile_image_url || "/placeholder.svg"}
                    alt={displayName}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-semibold">{firstLetter}</span>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{displayName}</h1>
                {profile.location && (
                  <div className="flex items-center text-blue-200 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    {profile.location}
                  </div>
                )}
                <div className="flex items-center text-blue-200 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  Joined {new Date(profile.created_at).toLocaleDateString()}
                </div>

                {!isOwnProfile && (
                  <Button
                    onClick={handleConnectionRequest}
                    disabled={buttonContent.disabled || connectionLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <buttonContent.icon className="w-4 h-4 mr-2" />
                    {connectionLoading ? "Loading..." : buttonContent.text}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              {profile.about_me && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">About</h2>
                    <p className="text-gray-600 leading-relaxed">{profile.about_me}</p>
                  </CardContent>
                </Card>
              )}

              {/* Experience */}
              {profile.experience && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Experience</h2>
                    <p className="text-gray-600 leading-relaxed">{profile.experience}</p>
                  </CardContent>
                </Card>
              )}

              {/* Education */}
              {profile.education && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Education</h2>
                    <p className="text-gray-600 leading-relaxed">{profile.education}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Interests */}
              {profile.interests && profile.interests.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Social Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Connect</h3>
                  <div className="space-y-3">
                    {profile.linkedin_url && (
                      <a
                        href={profile.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    )}
                    {profile.twitter_url && (
                      <a
                        href={profile.twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Twitter
                      </a>
                    )}
                    {profile.instagram_url && (
                      <a
                        href={profile.instagram_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Instagram
                      </a>
                    )}
                    {profile.website_url && (
                      <a
                        href={profile.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Website
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
