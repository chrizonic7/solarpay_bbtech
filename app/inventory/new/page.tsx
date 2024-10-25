"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NewProductPage() {
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
        <h2 className="text-3xl font-bold tracking-tight">Add New Product</h2>
      </div>

      <form className="mt-8 space-y-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" placeholder="Basic Home Solar Kit" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="sku">SKU</Label>
            <Input id="sku" placeholder="BHS-001" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BASIC_HOME">Basic Home</SelectItem>
                <SelectItem value="PREMIUM_HOME">Premium Home</SelectItem>
                <SelectItem value="BUSINESS">Business</SelectItem>
                <SelectItem value="ACCESSORIES">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price (USD)</Label>
            <Input 
              id="price" 
              type="number" 
              min="0" 
              step="0.01" 
              placeholder="299.99" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stock">Initial Stock Level</Label>
            <Input 
              id="stock" 
              type="number" 
              min="0" 
              placeholder="50" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="min-stock">Minimum Stock Level</Label>
            <Input 
              id="min-stock" 
              type="number" 
              min="0" 
              placeholder="10" 
              required 
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Product Description</Label>
          <Textarea 
            id="description" 
            placeholder="Enter product description and specifications..."
            className="min-h-[100px]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">Product Image URL</Label>
          <Input id="image" type="url" placeholder="https://example.com/image.jpg" />
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">
            Create Product
          </Button>
        </div>
      </form>
    </div>
  )
}