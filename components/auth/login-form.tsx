"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      setIsLoading(false)
      toast.success("Welcome back!")
      router.push("/customer/dashboard")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+256 701 234567"
          required
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="pin">PIN Code</Label>
          <Button 
            variant="link" 
            className="px-0 font-normal text-xs"
            onClick={(e) => {
              e.preventDefault()
              toast.info("Contact your sales agent for PIN reset")
            }}
          >
            Forgot PIN?
          </Button>
        </div>
        <Input
          id="pin"
          type="password"
          placeholder="Enter your 4-digit PIN"
          required
          className="h-12"
          maxLength={4}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="remember"
          className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
        />
        <Label htmlFor="remember" className="text-sm font-normal">
          Remember this device
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-base bg-blue-500 hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In to Your Account"
        )}
      </Button>
    </form>
  )
}