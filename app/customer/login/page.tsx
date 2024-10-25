"use client"

import { SunMedium } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LoginForm } from "@/components/auth/login-form"
import { SupportSection } from "@/components/auth/support-section"

export default function CustomerLoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-gray-900 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1 flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
            <SunMedium className="h-8 w-8 text-blue-500" />
          </div>
          <CardTitle className="text-3xl font-bold">Welcome to SolarPay</CardTitle>
          <CardDescription>
            Access your solar system account and payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <div className="mt-6">
            <SupportSection />
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-4 text-center space-y-1">
        <p className="text-sm text-muted-foreground">
          Don't have an account?
        </p>
        <Button 
          variant="link"
          onClick={() => toast.info("Please visit our local office or contact a sales agent")}
        >
          Contact a sales agent to get started
        </Button>
      </div>
    </div>
  )
}