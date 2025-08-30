"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { User, Settings, LogOut, ChevronDown } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface ProfileDropdownProps {
  user: any
  profile: any
}

export default function ProfileDropdown({ user, profile }: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const supabase = createClient()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setIsOpen(false)
    window.location.href = "/"
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity p-1 rounded-lg hover:bg-gray-100"
      >
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
        <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {/* Profile info section */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                {profile?.profile_image_url ? (
                  <img
                    src={profile.profile_image_url || "/placeholder.svg"}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-6 h-6 text-gray-600" />
                )}
              </div>
              <div>
                <p className="font-medium text-gray-900">{profile?.full_name || "User"}</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="py-1">
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-4 h-4" />
              View Profile
            </Link>
            <Link
              href="/profile-setup"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4" />
              Edit Profile
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4" />
              Dashboard
            </Link>
          </div>

          {/* Sign out */}
          <div className="border-t border-gray-100 pt-1">
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
