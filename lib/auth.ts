import { toast } from "sonner"

// This is a simple mock auth - in production, use proper authentication
const ADMIN_CREDENTIALS = {
  email: "admin",
  password: "12345"
}

export async function loginAdmin(email: string, password: string) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    // In production, set proper session/token
    localStorage.setItem("adminAuth", "true")
    return true
  }
  
  throw new Error("Invalid credentials")
}

export function isAdminAuthenticated() {
  if (typeof window === "undefined") return false
  return localStorage.getItem("adminAuth") === "true"
}

export function logoutAdmin() {
  localStorage.removeItem("adminAuth")
  toast.success("Logged out successfully")
}</content>