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
import { Button } from "@/components/ui/button"
import { 
  MoreHorizontal, 
  Edit,
  History,
  AlertTriangle
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

interface InventoryTableProps {
  categoryFilter: string
  statusFilter: string
}

// Mock data - replace with actual API call
const products = [
  {
    id: "1",
    name: "Basic Home Solar Kit",
    sku: "BHS-001",
    category: "BASIC_HOME",
    price: 299.99,
    stockLevel: 45,
    minStockLevel: 10,
    status: "ACTIVE",
  },
  {
    id: "2",
    name: "Premium Solar Panel 200W",
    sku: "PSP-200",
    category: "PREMIUM_HOME",
    price: 499.99,
    stockLevel: 8,
    minStockLevel: 15,
    status: "LOW_STOCK",
  },
]

export function InventoryTable({ categoryFilter, statusFilter }: InventoryTableProps) {
  const router = useRouter()

  const getStatusBadge = (status: string, stockLevel: number, minStockLevel: number) => {
    if (stockLevel === 0) {
      return <Badge variant="destructive">Out of Stock</Badge>
    }
    if (stockLevel <= minStockLevel) {
      return (
        <Badge variant="destructive" className="bg-yellow-500">
          <AlertTriangle className="h-3 w-3 mr-1" />
          Low Stock
        </Badge>
      )
    }
    return <Badge variant="default">In Stock</Badge>
  }

  const filteredProducts = products.filter(product => {
    if (categoryFilter !== "all" && product.category !== categoryFilter) return false
    if (statusFilter !== "all") {
      if (statusFilter === "LOW_STOCK" && product.stockLevel > product.minStockLevel) return false
      if (statusFilter === "OUT_OF_STOCK" && product.stockLevel > 0) return false
      if (statusFilter === "IN_STOCK" && (product.stockLevel === 0 || product.stockLevel <= product.minStockLevel)) return false
    }
    return true
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock Level</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>
                {product.category.replace("_", " ")}
              </TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.stockLevel} units</TableCell>
              <TableCell>
                {getStatusBadge(product.status, product.stockLevel, product.minStockLevel)}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => router.push(`/inventory/${product.id}/edit`)}
                      className="cursor-pointer"
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Product
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push(`/inventory/${product.id}/history`)}
                      className="cursor-pointer"
                    >
                      <History className="mr-2 h-4 w-4" />
                      View History
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}