"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface CustomerFiltersProps {
  selectedStatus: string
  setSelectedStatus: (value: string) => void
  selectedAgent: string
  setSelectedAgent: (value: string) => void
}

// Mock data - replace with actual API data
const agents = [
  { id: "1", name: "Sarah Wilson" },
  { id: "2", name: "Mike Johnson" },
]

export function CustomerFilters({
  selectedStatus,
  setSelectedStatus,
  selectedAgent,
  setSelectedAgent,
}: CustomerFiltersProps) {
  return (
    <div className="mt-8 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search customers..."
            className="pl-9"
          />
        </div>
        <Select
          value={selectedStatus}
          onValueChange={setSelectedStatus}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectedAgent}
          onValueChange={setSelectedAgent}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sales Agent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Agents</SelectItem>
            {agents.map((agent) => (
              <SelectItem key={agent.id} value={agent.name}>
                {agent.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}