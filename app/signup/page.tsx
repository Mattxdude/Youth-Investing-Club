"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import AuthHeader from "@/components/auth-header"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
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
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            full_name: fullName,
          },
        },
      })

      if (signUpError) throw signUpError

      if (signUpData.user) {
        router.push("/dashboard")
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AuthHeader />

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
