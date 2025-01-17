"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useCallback } from "react"

import { authClient } from "@/lib/auth-client"
import { AuthCard, AuthToastOptions } from "@daveyplate/better-auth-ui"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export default function AuthView() {
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  const callbackURL = "/"

  const authToast = useCallback(
    ({ variant, description, action }: AuthToastOptions) => {
      toast({
        variant,
        description,
        action: action && (
          <ToastAction altText={action.label} onClick={action.onClick}>
            {action.label}
          </ToastAction>
        ),
      })
    },
    [toast]
  )

  return (
    <main className="flex flex-col items-center my-auto p-4">
      <AuthCard
        authClient={authClient}
        pathname={pathname}
        navigate={router.push}
        providers={["github"]}
        toast={authToast}
        callbackURL={callbackURL}
        LinkComponent={Link}
        disableAnimation={true}
      />
    </main>
  )
}
