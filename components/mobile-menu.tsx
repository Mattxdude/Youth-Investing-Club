"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

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

          <nav className="p-6 space-y-8 bg-white">
            <Link
              href="/"
              onClick={closeMenu}
              className="block text-xl font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/mentors"
              onClick={closeMenu}
              className="block text-xl font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200"
            >
              Mentors
            </Link>
            <Link
              href="/network"
              onClick={closeMenu}
              className="block text-xl font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200"
            >
              Network
            </Link>

            <div className="pt-8 border-t-2 border-gray-100">
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
          </nav>
        </div>
      </div>
    </>
  )
}
