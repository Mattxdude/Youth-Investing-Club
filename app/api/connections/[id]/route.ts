import { createServerClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createServerClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { status } = await request.json()
    const connectionId = params.id

    if (!["accepted", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }

    // Verify user is the addressee of this connection
    const { data: connection, error: fetchError } = await supabase
      .from("connections")
      .select("*")
      .eq("id", connectionId)
      .eq("addressee_id", user.id)
      .single()

    if (fetchError || !connection) {
      return NextResponse.json({ error: "Connection not found" }, { status: 404 })
    }

    const { data: updatedConnection, error } = await supabase
      .from("connections")
      .update({ status })
      .eq("id", connectionId)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ connection: updatedConnection })
  } catch (error) {
    console.error("Error updating connection:", error)
    return NextResponse.json({ error: "Failed to update connection" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createServerClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const connectionId = params.id

    // Verify user is the requester of this connection
    const { data: connection, error: fetchError } = await supabase
      .from("connections")
      .select("*")
      .eq("id", connectionId)
      .eq("requester_id", user.id)
      .single()

    if (fetchError || !connection) {
      return NextResponse.json({ error: "Connection not found" }, { status: 404 })
    }

    const { error } = await supabase.from("connections").delete().eq("id", connectionId)

    if (error) throw error

    return NextResponse.json({ message: "Connection deleted successfully" })
  } catch (error) {
    console.error("Error deleting connection:", error)
    return NextResponse.json({ error: "Failed to delete connection" }, { status: 500 })
  }
}
