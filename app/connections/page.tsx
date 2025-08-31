"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { createBrowserClient } from "@/lib/supabase/client"
import AuthHeader from "@/components/auth-header"

interface Connection {
  id: string
  status: "pending" | "accepted" | "rejected"
  created_at: string
  requester: {
    id: string
    full_name: string
    profile_photo?: string
  }
  addressee: {
    id: string
    full_name: string
    profile_photo?: string
  }
}

export default function ConnectionsPage() {
  const [connections, setConnections] = useState<Connection[]>([])
  const [pendingRequests, setPendingRequests] = useState<Connection[]>([])
  const [loading, setLoading] = useState(true)
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)
  const supabase = createBrowserClient()

  useEffect(() => {
    fetchConnections()
    getCurrentUser()
  }, [])

  const getCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setCurrentUserId(user?.id || null)
  }

  const fetchConnections = async () => {
    try {
      // Fetch accepted connections
      const acceptedResponse = await fetch("/api/connections?type=accepted")
      const acceptedData = await acceptedResponse.json()

      // Fetch pending requests (where current user is addressee)
      const pendingResponse = await fetch("/api/connections?type=pending")
      const pendingData = await pendingResponse.json()

      setConnections(acceptedData.connections || [])
      setPendingRequests(pendingData.connections || [])
    } catch (error) {
      console.error("Error fetching connections:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleConnectionResponse = async (connectionId: string, status: "accepted" | "rejected") => {
    try {
      const response = await fetch(`/api/connections/${connectionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        fetchConnections() // Refresh the lists
      }
    } catch (error) {
      console.error("Error responding to connection:", error)
    }
  }

  const getOtherUser = (connection: Connection) => {
    return connection.requester.id === currentUserId ? connection.addressee : connection.requester
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AuthHeader />

        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading connections...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">My Connections</h1>
            <p className="text-gray-600">Manage your network and connection requests</p>
          </div>

          <Tabs defaultValue="connections" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="connections">My Connections ({connections.length})</TabsTrigger>
              <TabsTrigger value="requests">
                Pending Requests ({pendingRequests.filter((req) => req.addressee.id === currentUserId).length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="connections" className="mt-6">
              {connections.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <p className="text-gray-500 mb-4">You haven't connected with anyone yet.</p>
                    <Button asChild>
                      <Link href="/network">Browse Network</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {connections.map((connection) => {
                    const otherUser = getOtherUser(connection)
                    return (
                      <Card key={connection.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                              {otherUser.profile_photo ? (
                                <Image
                                  src={otherUser.profile_photo || "/placeholder.svg"}
                                  alt={otherUser.full_name}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-gray-600 font-medium">{otherUser.full_name.charAt(0)}</span>
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">{otherUser.full_name}</h3>
                              <Badge variant="secondary" className="mt-1">
                                Connected
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}
            </TabsContent>

            <TabsContent value="requests" className="mt-6">
              {pendingRequests.filter((req) => req.addressee.id === currentUserId).length === 0 ? (
                <Card>
                  <CardContent className="text-center py-12">
                    <p className="text-gray-500">No pending connection requests.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {pendingRequests
                    .filter((req) => req.addressee.id === currentUserId)
                    .map((request) => (
                      <Card key={request.id}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                                {request.requester.profile_photo ? (
                                  <Image
                                    src={request.requester.profile_photo || "/placeholder.svg"}
                                    alt={request.requester.full_name}
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <span className="text-gray-600 font-medium">
                                    {request.requester.full_name.charAt(0)}
                                  </span>
                                )}
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">{request.requester.full_name}</h3>
                                <p className="text-sm text-gray-500">wants to connect with you</p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" onClick={() => handleConnectionResponse(request.id, "accepted")}>
                                Accept
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleConnectionResponse(request.id, "rejected")}
                              >
                                Decline
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
