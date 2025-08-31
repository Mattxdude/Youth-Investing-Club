"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Menu, User, LogOut, Settings, HomeIcon, Users, Network } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface MobileMenuProps {
  user?: any
  profile?: any
  isLoading?: boolean
}

export default function MobileMenu({ user, profile, isLoading }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    closeMenu()
    router.push("/")
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="fixed inset-0 bg-black/60" onClick={closeMenu} />
        <div
          className={`fixed right-0 top-0 h-full w-72 bg-white shadow-2xl border-l border-gray-100 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between p-6 border-b-2 border-gray-100 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-all duration-200"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="p-6 space-y-6 bg-white">
            {!isLoading && user && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                    {profile?.profile_image_url ? (
                      <img
                        src={profile.profile_image_url || "/placeholder.svg"}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {getInitials(profile?.full_name || user.email?.split("@")[0] || "User")}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {profile?.full_name || user.email?.split("@")[0] || "User"}
                    </p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Link
                    href="/profile"
                    onClick={closeMenu}
                    className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <User size={20} />
                    <span>View Profile</span>
                  </Link>
                  <Link
                    href="/dashboard"
                    onClick={closeMenu}
                    className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Settings size={20} />
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full text-left"
                  >
                    <LogOut size={20} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}

            {!isLoading && !user && (
              <div className="space-y-4">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  asChild
                >
                  <Link href="/signup" onClick={closeMenu}>
                    Join YIN
                  </Link>
                </Button>
              </div>
            )}

            <div className="space-y-2 pt-4 border-t border-gray-200">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <HomeIcon size={20} />
                <span className="text-lg font-medium">Home</span>
              </Link>
              <Link
                href="/mentors"
                onClick={closeMenu}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Users size={20} />
                <span className="text-lg font-medium">Mentors</span>
              </Link>
              <Link
                href="/network"
                onClick={closeMenu}
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Network size={20} />
                <span className="text-lg font-medium">Network</span>
              </Link>
            </div>

            {!isLoading && user && (
              <div className="pt-4 border-t border-gray-200">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  asChild
                >
                  <a
                    href="https://form.jotform.com/251635444743055"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Apply to become a mentor
                  </a>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  )
}
