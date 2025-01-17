"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { AuthCard } from "@daveyplate/better-auth-ui"
import { authClient } from "@/lib/auth-client"

export default function AuthView() {
  const router = useRouter()
  const pathname = usePathname()
  const callbackURL = "/"

  return (
    <main className="flex flex-col items-center my-auto p-4">
      <AuthCard
        authClient={authClient}
        pathname={pathname}
        navigate={router.push}
        providers={["github"]}
        callbackURL={callbackURL}
        LinkComponent={Link}
        disableAnimation={true}
      />
    </main>
  )
}
