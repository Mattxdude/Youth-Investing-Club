import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import AuthHeader from "@/components/auth-header"

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/signin")
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("user_id", data.user.id).single()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <AuthHeader />

      <div className="flex items-center justify-center p-6 min-h-[calc(100vh-4rem)]">
        <div className="max-w-2xl w-full">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {profile?.profile_image_url ? (
                    <img
                      src={profile.profile_image_url || "/placeholder.svg"}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-white">
                      {profile?.full_name?.charAt(0) || data.user.email?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}!
                </h1>
                <p className="text-blue-200">Member of Youth Investing Network</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-blue-200">Email:</p>
                    <p className="font-medium text-white">{data.user.email}</p>
                  </div>
                  {profile?.location && (
                    <div>
                      <p className="text-sm text-blue-200">Location:</p>
                      <p className="font-medium text-white">{profile.location}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-blue-200">Member since:</p>
                    <p className="font-medium text-white">{new Date(data.user.created_at).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {profile?.interests && profile.interests.length > 0 && (
                    <div>
                      <p className="text-sm text-blue-200">Interests:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {profile.interests.map((interest: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-blue-200">Profile Status:</p>
                    <p className="font-medium text-white">{profile ? "Complete" : "Incomplete"}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Link href="/network">View Network</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/profile-setup">{profile ? "Edit Profile" : "Complete Profile"}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/mentors">Find Mentors</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
