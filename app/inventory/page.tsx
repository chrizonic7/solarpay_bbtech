"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { InventoryTable } from "@/components/inventory/inventory-table"
import { InventoryFilters } from "@/components/inventory/inventory-filters"
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation"

export default function InventoryPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
        <Button 
          onClick={() => router.push("/inventory/new")}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>
      
      <InventoryFilters 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      
      <div className="mt-4">
        <InventoryTable 
          categoryFilter={selectedCategory}
          statusFilter={selectedStatus}
        />
      </div>
    </div>
  )
}