import { createServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const supabase = createServerClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type") || "all" // 'all', 'pending', 'accepted'

  try {
    let query = supabase
      .from("connections")
      .select(`
        *,
        requester:profiles!connections_requester_id_fkey(id, full_name, profile_photo),
        addressee:profiles!connections_addressee_id_fkey(id, full_name, profile_photo)
      `)
      .or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`)

    if (type === "pending") {
      query = query.eq("status", "pending")
    } else if (type === "accepted") {
      query = query.eq("status", "accepted")
    }

    const { data: connections, error } = await query.order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ connections })
  } catch (error) {
    console.error("Error fetching connections:", error)
    return NextResponse.json({ error: "Failed to fetch connections" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const supabase = createServerClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { addressee_id } = await request.json()

    if (!addressee_id) {
      return NextResponse.json({ error: "Addressee ID is required" }, { status: 400 })
    }

    if (addressee_id === user.id) {
      return NextResponse.json({ error: "Cannot connect to yourself" }, { status: 400 })
    }

    // Check if connection already exists
    const { data: existing } = await supabase
      .from("connections")
      .select("*")
      .or(
        `and(requester_id.eq.${user.id},addressee_id.eq.${addressee_id}),and(requester_id.eq.${addressee_id},addressee_id.eq.${user.id})`,
      )
      .single()

    if (existing) {
      return NextResponse.json({ error: "Connection already exists" }, { status: 400 })
    }

    const { data: connection, error } = await supabase
      .from("connections")
      .insert({
        requester_id: user.id,
        addressee_id,
        status: "pending",
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ connection })
  } catch (error) {
    console.error("Error creating connection:", error)
    return NextResponse.json({ error: "Failed to create connection" }, { status: 500 })
  }
}
