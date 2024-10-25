"use client"

import { StatsCard } from "@/components/dashboard/stats-card"
import { 
  Users, 
  DollarSign, 
  Package, 
  UserCheck,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          description="Monthly revenue"
          trend={{ value: 12, isPositive: true }}
          icon={<DollarSign className="h-4 w-4" />}
        />
        <StatsCard
          title="Active Customers"
          value="2,350"
          description="Total customers"
          trend={{ value: 5, isPositive: true }}
          icon={<Users className="h-4 w-4" />}
        />
        <StatsCard
          title="Inventory Level"
          value="182"
          description="Units in stock"
          trend={{ value: 3, isPositive: false }}
          icon={<Package className="h-4 w-4" />}
        />
        <StatsCard
          title="Sales Agents"
          value="24"
          description="Active agents"
          trend={{ value: 8, isPositive: true }}
          icon={<UserCheck className="h-4 w-4" />}
        />
      </div>
    </div>
  )
}