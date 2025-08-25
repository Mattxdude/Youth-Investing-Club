"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { User } from "lucide-react"

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
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size <= 5 * 1024 * 1024) {
      // 5MB limit
      setProfilePhoto(file)
    }
  }

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // TODO: Implement profile saving logic with Supabase
    // For now, redirect to dashboard
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  const handleCancel = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-900">
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
        <div className="max-w-2xl mx-auto">
          {/* Welcome Card */}
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

          {/* Profile Form */}
          <form onSubmit={handleSaveProfile} className="space-y-6">
            {/* Profile Photo */}
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
                  Upload Photo
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-2">Max size: 5MB</p>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">First Name</label>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* About Me */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">About Me</label>
              <Textarea
                placeholder="Tell us about yourself..."
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                rows={5}
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Experience</label>
              <Textarea
                placeholder="Share your work experience, internships, or relevant projects..."
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                rows={5}
              />
            </div>

            {/* Education */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">Education</label>
              <Textarea
                placeholder="Share your educational background, degrees, certifications..."
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                rows={5}
              />
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Social Media Links</h3>
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

            {/* Action Buttons */}
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
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
