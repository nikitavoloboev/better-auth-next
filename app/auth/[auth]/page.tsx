import { authViews } from "@daveyplate/better-auth-ui"
import AuthView from "./auth-view"

export function generateStaticParams() {
  return authViews.map((auth) => ({ auth }))
}

export default function AuthPage() {
  return <AuthView />
}
