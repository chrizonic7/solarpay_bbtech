"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Mock data - replace with actual API data
const payments = [
  {
    id: "1",
    date: "2024-03-20",
    customer: "John Doe",
    amount: 150.00,
    method: "cash",
    status: "completed",
    reference: "PAY-001",
  },
  {
    id: "2",
    date: "2024-03-19",
    customer: "Jane Smith",
    amount: 200.00,
    method: "momo",
    status: "completed",
    reference: "PAY-002",
  },
]

export function PaymentHistory() {
  const getMethodBadge = (method: string) => {
    switch (method) {
      case "cash":
        return <Badge variant="outline">Cash</Badge>
      case "momo":
        return <Badge className="bg-purple-500">Mobile Money</Badge>
      default:
        return <Badge variant="secondary">{method}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search payments..."
            className="pl-9 h-12"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Reference</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.customer}</TableCell>
                <TableCell>${payment.amount.toFixed(2)}</TableCell>
                <TableCell>{getMethodBadge(payment.method)}</TableCell>
                <TableCell>{payment.reference}</TableCell>
                <TableCell>
                  <Badge className="bg-green-500">
                    {payment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}