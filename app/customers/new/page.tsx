"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NewCustomerPage() {
  const router = useRouter()

  return (
    <div className="p-8">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">New Customer</h2>
      </div>

      <form className="mt-8 space-y-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+256 701 234567" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="national-id">National ID</Label>
            <Input id="national-id" placeholder="Enter National ID number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="agent">Sales Agent</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Sales Agent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sarah">Sarah Wilson</SelectItem>
                <SelectItem value="mike">Mike Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Customer address" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="system-type">System Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select System Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic Home System</SelectItem>
                <SelectItem value="premium">Premium Home System</SelectItem>
                <SelectItem value="business">Business System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">
            Create Customer
          </Button>
        </div>
      </form>
    </div>
  )
}