"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, UserCheck, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"

interface Connection {
  id: string
  requester_id: string
  addressee_id: string
  status: "pending" | "accepted" | "rejected"
  created_at: string
  requester_profile?: {
    id: string
    full_name: string | null
    email: string
    profile_image_url: string | null
    location: string | null
  }
  addressee_profile?: {
    id: string
    full_name: string | null
    email: string
    profile_image_url: string | null
    location: string | null
  }
}

export default function ConnectionsManager() {
  const [connections, setConnections] = useState<Connection[]>([])
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchConnections() {
      const supabase = createClient()

      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return

      setCurrentUser(user)

      // Fetch connections with profile data
      const { data, error } = await supabase
        .from("connections")
        .select(
          `
          *,
          requester_profile:profiles!connections_requester_id_fkey(id, full_name, email, profile_image_url, location),
          addressee_profile:profiles!connections_addressee_id_fkey(id, full_name, email, profile_image_url, location)
        `,
        )
        .or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching connections:", error)
      } else {
        setConnections(data || [])
      }
      setLoading(false)
    }

    fetchConnections()
  }, [])

  const handleConnectionAction = async (connectionId: string, action: "accept" | "reject") => {
    const supabase = createClient()

    const { error } = await supabase
      .from("connections")
      .update({ status: action === "accept" ? "accepted" : "rejected" })
      .eq("id", connectionId)

    if (!error) {
      setConnections((prev) =>
        prev.map((conn) =>
          conn.id === connectionId ? { ...conn, status: action === "accept" ? "accepted" : "rejected" } : conn,
        ),
      )
    }
  }

  const getOtherProfile = (connection: Connection) => {
    if (!currentUser) return null
    return connection.requester_id === currentUser.id ? connection.addressee_profile : connection.requester_profile
  }

  const getDisplayName = (profile: any) => {
    return profile?.full_name || profile?.email?.split("@")[0] || "User"
  }

  const getFirstLetter = (profile: any) => {
    const name = getDisplayName(profile)
    return name.charAt(0).toUpperCase()
  }

  const pendingRequests = connections.filter(
    (conn) => conn.status === "pending" && conn.addressee_id === currentUser?.id,
  )
  const sentRequests = connections.filter((conn) => conn.status === "pending" && conn.requester_id === currentUser?.id)
  const acceptedConnections = connections.filter((conn) => conn.status === "accepted")

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading connections...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="w-5 h-5" />
          My Connections
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="received" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="received" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Requests ({pendingRequests.length})
            </TabsTrigger>
            <TabsTrigger value="sent" className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Sent ({sentRequests.length})
            </TabsTrigger>
            <TabsTrigger value="connected" className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              Connected ({acceptedConnections.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="received" className="space-y-4">
            {pendingRequests.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Clock className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No pending connection requests</p>
              </div>
            ) : (
              pendingRequests.map((connection) => {
                const profile = getOtherProfile(connection)
                return (
                  <div key={connection.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                        {profile?.profile_image_url ? (
                          <img
                            src={profile.profile_image_url || "/placeholder.svg"}
                            alt={getDisplayName(profile)}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">{getFirstLetter(profile)}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <Link href={`/profile/${profile?.id}`} className="font-medium hover:text-blue-600">
                          {getDisplayName(profile)}
                        </Link>
                        {profile?.location && <p className="text-sm text-gray-500">{profile.location}</p>}
                        <p className="text-xs text-gray-400">
                          Sent {new Date(connection.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleConnectionAction(connection.id, "accept")}>
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleConnectionAction(connection.id, "reject")}
                      >
                        Decline
                      </Button>
                    </div>
                  </div>
                )
              })
            )}
          </TabsContent>

          <TabsContent value="sent" className="space-y-4">
            {sentRequests.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <UserPlus className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No sent connection requests</p>
              </div>
            ) : (
              sentRequests.map((connection) => {
                const profile = getOtherProfile(connection)
                return (
                  <div key={connection.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                        {profile?.profile_image_url ? (
                          <img
                            src={profile.profile_image_url || "/placeholder.svg"}
                            alt={getDisplayName(profile)}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">{getFirstLetter(profile)}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <Link href={`/profile/${profile?.id}`} className="font-medium hover:text-blue-600">
                          {getDisplayName(profile)}
                        </Link>
                        {profile?.location && <p className="text-sm text-gray-500">{profile.location}</p>}
                        <p className="text-xs text-gray-400">
                          Sent {new Date(connection.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      <Clock className="w-3 h-3 mr-1" />
                      Pending
                    </Badge>
                  </div>
                )
              })
            )}
          </TabsContent>

          <TabsContent value="connected" className="space-y-4">
            {acceptedConnections.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <UserCheck className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No connections yet</p>
                <Button asChild className="mt-4">
                  <Link href="/network">Browse Network</Link>
                </Button>
              </div>
            ) : (
              acceptedConnections.map((connection) => {
                const profile = getOtherProfile(connection)
                return (
                  <div key={connection.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                        {profile?.profile_image_url ? (
                          <img
                            src={profile.profile_image_url || "/placeholder.svg"}
                            alt={getDisplayName(profile)}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-semibold">{getFirstLetter(profile)}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <Link href={`/profile/${profile?.id}`} className="font-medium hover:text-blue-600">
                          {getDisplayName(profile)}
                        </Link>
                        {profile?.location && <p className="text-sm text-gray-500">{profile.location}</p>}
                        <p className="text-xs text-gray-400">
                          Connected {new Date(connection.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      <UserCheck className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                  </div>
                )
              })
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
