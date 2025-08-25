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

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu} />
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-semibold text-foreground">Menu</h2>
              <button
                onClick={closeMenu}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="p-6 space-y-6">
              <Link
                href="/"
                onClick={closeMenu}
                className="block text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/network"
                onClick={closeMenu}
                className="block text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Network
              </Link>
              <Link
                href="/mentors"
                onClick={closeMenu}
                className="block text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Mentors
              </Link>

              <div className="pt-6 border-t">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg" asChild>
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
      )}
    </>
  )
}
