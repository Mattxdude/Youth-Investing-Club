"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, CheckCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showEmailSent, setShowEmailSent] = useState(false)
  const router = useRouter()

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const supabase = createClient()

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/profile-setup`,
          data: {
            full_name: fullName,
          },
        },
      })

      if (signUpError) throw signUpError

      setShowEmailSent(true)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (showEmailSent) {
    return (
      <div className="min-h-screen bg-gray-100">
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

        <div className="pt-16 flex items-center justify-center px-4 min-h-screen">
          <Card className="w-full max-w-md bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <div className="text-center">
                <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                <h1 className="text-3xl font-bold text-white mb-4">Check Your Email!</h1>
                <p className="text-gray-300 mb-6">
                  We've sent a confirmation email to <strong className="text-white">{email}</strong>
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  Please click the link in the email to confirm your account, then return here to sign in.
                </p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/signin">Go to Sign In</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
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

      <div className="pt-16 flex items-center justify-center px-4 min-h-screen">
        <Card className="w-full max-w-md bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-white text-center mb-8">Create Account</h1>

            <form onSubmit={handleEmailSignUp} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <p className="text-gray-400 text-sm text-center">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Terms of Service
                </a>{" "}
                apply.
              </p>

              {error && <p className="text-red-400 text-sm text-center">{error}</p>}

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                <p className="text-blue-200 text-sm text-center">
                  📧 After creating your account, please check your email to confirm your address before signing in.
                </p>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>

              <p className="text-center text-gray-400">
                Already have an account?{" "}
                <Link href="/signin" className="text-blue-400 hover:text-blue-300">
                  Sign In
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
