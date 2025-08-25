import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/signin")
  }

  // Get user profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", data.user.id).single()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Welcome to YIN Dashboard</h1>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Email:</p>
            <p className="font-medium">{data.user.email}</p>
          </div>
          {profile?.full_name && (
            <div>
              <p className="text-sm text-gray-600">Name:</p>
              <p className="font-medium">{profile.full_name}</p>
            </div>
          )}
          <div>
            <p className="text-sm text-gray-600">Member since:</p>
            <p className="font-medium">{new Date(data.user.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
