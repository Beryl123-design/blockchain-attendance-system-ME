import { redirect } from "next/navigation"
import SignInForm from "@/components/sign-in-form"

export default function Home() {
  // In a real app, we would check if the user is already authenticated
  // and redirect them to their dashboard
  const isAuthenticated = false

  if (isAuthenticated) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray">
      <SignInForm />
    </div>
  )
}
