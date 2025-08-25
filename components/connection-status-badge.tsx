"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { createBrowserClient } from "@/lib/supabase/client"

interface ConnectionStatusBadgeProps {
  targetUserId: string
  className?: string
}

type ConnectionStatus = "none" | "pending" | "accepted" | "received"

export function ConnectionStatusBadge({ targetUserId, className }: ConnectionStatusBadgeProps) {
  const [status, setStatus] = useState<ConnectionStatus>("none")
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)
  const supabase = createBrowserClient()

  useEffect(() => {
    checkConnectionStatus()
    getCurrentUser()
  }, [targetUserId])

  const getCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setCurrentUserId(user?.id || null)
  }

  const checkConnectionStatus = async () => {
    try {
      const response = await fetch("/api/connections")
      const data = await response.json()

      if (data.connections) {
        const connection = data.connections.find(
          (conn: any) => conn.requester.id === targetUserId || conn.addressee.id === targetUserId,
        )

        if (connection) {
          if (connection.status === "accepted") {
            setStatus("accepted")
          } else if (connection.status === "pending") {
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

  if (status === "none") return null

  const getBadgeProps = () => {
    switch (status) {
      case "accepted":
        return { text: "Connected", variant: "default" as const }
      case "pending":
        return { text: "Request Sent", variant: "secondary" as const }
      case "received":
        return { text: "Pending Response", variant: "outline" as const }
      default:
        return null
    }
  }

  const badgeProps = getBadgeProps()
  if (!badgeProps) return null

  return (
    <Badge variant={badgeProps.variant} className={className}>
      {badgeProps.text}
    </Badge>
  )
}
