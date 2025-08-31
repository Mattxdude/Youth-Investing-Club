"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { User } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import AuthHeader from "@/components/auth-header"

export default function ProfileSetupPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [aboutMe, setAboutMe] = useState("")
  const [experience, setExperience] = useState("")
  const [education, setEducation] = useState("")
  const [linkedin, setLinkedin] = useState("")
  const [twitter, setTwitter] = useState("")
  const [instagram, setInstagram] = useState("")
  const [website, setWebsite] = useState("")
  const [location, setLocation] = useState("")
  const [interests, setInterests] = useState("")
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()
      if (error || !user) {
        router.push("/signin")
        return
      }
      setUser(user)

      // Pre-fill name from auth metadata if available
      if (user.user_metadata?.full_name) {
        const nameParts = user.user_metadata.full_name.split(" ")
        setFirstName(nameParts[0] || "")
        setLastName(nameParts.slice(1).join(" ") || "")
      }
    }

    getUser()
  }, [router, supabase.auth])

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size <= 5 * 1024 * 1024) {
      // 5MB limit
      setProfilePhoto(file)
    }
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setIsLoading(true)
    setError(null)

    try {
      let profileImageUrl = null

      // Upload profile photo if provided
      if (profilePhoto) {
        const fileExt = profilePhoto.name.split(".").pop()
        const fileName = `${user.id}-${Date.now()}.${fileExt}`

        const { error: uploadError } = await supabase.storage.from("profile-images").upload(fileName, profilePhoto)

        if (uploadError) {
          console.warn("Photo upload failed:", uploadError.message)
          // Continue without photo rather than failing completely
        } else {
          const {
            data: { publicUrl },
          } = supabase.storage.from("profile-images").getPublicUrl(fileName)
          profileImageUrl = publicUrl
        }
      }

      // Parse interests into array
      const interestsArray = interests
        .split(",")
        .map((interest) => interest.trim())
        .filter((interest) => interest.length > 0)

      const profileData = {
        user_id: user.id,
        full_name: `${firstName} ${lastName}`.trim() || null,
        email: user.email || null,
        about_me: aboutMe || null,
        experience: experience || null,
        education: education || null,
        linkedin_url: linkedin || null,
        twitter_url: twitter || null,
        instagram_url: instagram || null,
        website_url: website || null,
        location: location || null,
        interests: interestsArray.length > 0 ? interestsArray : null,
        profile_image_url: profileImageUrl,
        is_public: true,
      }

      const { error: insertError } = await supabase.from("profiles").insert(profileData)

      if (insertError) {
        // If insert fails due to existing record, try update instead
        if (insertError.code === "23505") {
          // Unique constraint violation
          const { error: updateError } = await supabase.from("profiles").update(profileData).eq("user_id", user.id)

          if (updateError) {
            throw updateError
          }
        } else {
          throw insertError
        }
      }

      router.push("/dashboard")
    } catch (error: any) {
      console.error("Profile save error:", error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    router.push("/dashboard")
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <AuthHeader />

      <div className="pt-16 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="mb-8 bg-blue-600 border-blue-500">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/graduation-cap-logo.png"
                  alt="Youth Investing Network"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h1 className="text-2xl font-bold text-white mb-3">Welcome to Youth Investing Network!</h1>
              <p className="text-blue-100 mb-2">
                We're excited to have you join our community. Please create your profile to get started and connect with
                other members.
              </p>
              <p className="text-blue-200 text-sm">Your profile will be visible to other members in the Network tab.</p>
            </CardContent>
          </Card>

          <form onSubmit={handleSaveProfile} className="space-y-6">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {profilePhoto ? (
                    <img
                      src={URL.createObjectURL(profilePhoto) || "/placeholder.svg"}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16 text-gray-400" />
                  )}
                </div>
              </div>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="photo-upload"
                />
                <Button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => document.getElementById("photo-upload")?.click()}
                >
                  Upload Photo (Optional)
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-2">Max size: 5MB</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">First Name (Optional)</label>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Last Name (Optional)</label>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
              <p className="text-blue-200 text-sm">
                All fields are optional! Fill out whatever you're comfortable sharing. You can always update your
                profile later.
              </p>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">About Me (Optional)</label>
              <Textarea
                placeholder="Tell us about yourself..."
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                rows={5}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Experience (Optional)</label>
              <Textarea
                placeholder="Share your work experience, internships, or relevant projects..."
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                rows={5}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Education (Optional)</label>
              <Textarea
                placeholder="Share your educational background, degrees, certifications..."
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                rows={5}
              />
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Social Media Links (Optional)</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">LinkedIn</label>
                  <Input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Twitter/X</label>
                  <Input
                    type="url"
                    placeholder="https://twitter.com/yourhandle"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Instagram</label>
                  <Input
                    type="url"
                    placeholder="https://instagram.com/yourhandle"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Website</label>
                  <Input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Location (Optional)</label>
              <Input
                type="text"
                placeholder="City, State/Country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Interests (Optional)</label>
              <Input
                type="text"
                placeholder="Finance, Investing, Technology, etc. (comma-separated)"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
              <p className="text-gray-400 text-sm mt-1">Separate multiple interests with commas</p>
            </div>

            <div className="flex gap-4 pt-6">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                {isLoading ? "Saving Profile..." : "Save Profile"}
              </Button>
              <Button
                type="button"
                onClick={handleCancel}
                variant="outline"
                className="px-8 bg-gray-600 hover:bg-gray-700 text-white border-gray-500 py-3"
              >
                Skip for now
              </Button>
            </div>

            {error && (
              <div className="bg-red-600 text-white p-4 rounded-lg">
                <p className="font-medium">Error saving profile:</p>
                <p className="text-sm">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
