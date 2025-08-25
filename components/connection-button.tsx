"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { createBrowserClient } from "@/lib/supabase/client"

interface ConnectionButtonProps {
  targetUserId: string
  targetUserName: string
  className?: string
}

type ConnectionStatus = "none" | "pending" | "accepted" | "received"

export function ConnectionButton({ targetUserId, targetUserName, className }: ConnectionButtonProps) {
  const [status, setStatus] = useState<ConnectionStatus>("none")
  const [loading, setLoading] = useState(false)
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const supabase = createBrowserClient()

  useEffect(() => {
    getCurrentUser()
  }, [])

  useEffect(() => {
    if (isAuthenticated && currentUserId) {
      checkConnectionStatus()
    }
  }, [targetUserId, isAuthenticated, currentUserId])

  const getCurrentUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        setCurrentUserId(user.id)
        setIsAuthenticated(true)
      } else {
        setCurrentUserId(null)
        setIsAuthenticated(false)
      }
    } catch (error) {
      console.error("Error getting current user:", error)
      setIsAuthenticated(false)
    }
  }

  const checkConnectionStatus = async () => {
    if (!isAuthenticated || !currentUserId) {
      return
    }

    try {
      const response = await fetch("/api/connections")

      if (!response.ok) {
        if (response.status === 401) {
          console.log("User not authenticated for connection check")
          return
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.connections) {
        const connection = data.connections.find(
          (conn: any) => conn.requester.id === targetUserId || conn.addressee.id === targetUserId,
        )

        if (connection) {
          if (connection.status === "accepted") {
            setStatus("accepted")
          } else if (connection.status === "pending") {
            // Check if current user sent or received the request
            if (connection.requester.id === currentUserId) {
              setStatus("pending")
            } else {
              setStatus("received")
            }
          }
        }
      }
    } catch (error) {
      console.error("Error checking connection status:", error)
    }
  }

  const sendConnectionRequest = async () => {
    if (!isAuthenticated || !currentUserId) {
      console.log("User must be logged in to send connection requests")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/connections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ addressee_id: targetUserId }),
      })

      if (response.ok) {
        setStatus("pending")
      } else {
        const error = await response.json()
        console.error("Error sending connection request:", error)
      }
    } catch (error) {
      console.error("Error sending connection request:", error)
    } finally {
      setLoading(false)
    }
  }

  const getButtonContent = () => {
    if (!isAuthenticated) {
      return { text: "Sign In to Connect", variant: "outline" as const, disabled: true }
    }

    switch (status) {
      case "accepted":
        return { text: "Connected", variant: "secondary" as const, disabled: true }
      case "pending":
        return { text: "Request Sent", variant: "outline" as const, disabled: true }
      case "received":
        return { text: "Respond to Request", variant: "outline" as const, disabled: true }
      default:
        return { text: "Connect", variant: "default" as const, disabled: false }
    }
  }

  const buttonProps = getButtonContent()

  return (
    <Button
      variant={buttonProps.variant}
      disabled={buttonProps.disabled || loading}
      onClick={sendConnectionRequest}
      className={className}
    >
      {loading ? "Sending..." : buttonProps.text}
    </Button>
  )
}
