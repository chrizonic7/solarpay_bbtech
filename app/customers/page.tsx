"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CustomerTable } from "@/components/customers/customer-table"
import { CustomerFilters } from "@/components/customers/customer-filters"
import { PlusCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CustomersPage() {
  const router = useRouter()
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [selectedAgent, setSelectedAgent] = useState<string>("all")

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <Button 
          onClick={() => router.push("/customers/new")}
          className="flex items-center gap-2"
        >
          <PlusCircle className="h-4 w-4" />
          Add Customer
        </Button>
      </div>
      
      <CustomerFilters 
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedAgent={selectedAgent}
        setSelectedAgent={setSelectedAgent}
      />
      
      <div className="mt-4">
        <CustomerTable 
          statusFilter={selectedStatus}
          agentFilter={selectedAgent}
        />
      </div>
    </div>
  )
}