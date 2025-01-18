"use client"

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export default function Home() {
  const { data: userData } = authClient.useSession()
  const router = useRouter()
  return (
    <div>
      {userData && (
        <button onClick={() => authClient.signOut()}>Log Out</button>
      )}
      {!userData && (
        <button
          onClick={() => {
            router.push("/auth/signup")
          }}
        >
          Login
        </button>
      )}
    </div>
  )
}
