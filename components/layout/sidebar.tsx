"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  LayoutDashboard, 
  Users, 
  UserCheck,
  FileText,
  Settings,
  LogOut,
  Sun,
  Moon,
  Receipt,
  Package
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { logoutAdmin } from "@/lib/auth"

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Customers',
    icon: Users,
    href: '/customers',
  },
  {
    label: 'Inventory',
    icon: Package,
    href: '/inventory',
  },
  {
    label: 'Payments',
    icon: Receipt,
    href: '/agents/payments',
  },
  {
    label: 'Sales Agents',
    icon: UserCheck,
    href: '/agents',
  },
  {
    label: 'Reports',
    icon: FileText,
    href: '/reports',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const router = useRouter()

  const handleLogout = () => {
    logoutAdmin()
    router.push("/admin/login")
  }

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-secondary/50">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold">
          SolarPay Admin
        </h2>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "text-primary bg-primary/10" : "text-muted-foreground",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-auto px-3 py-2">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 mr-3" />
          ) : (
            <Sun className="h-5 w-5 mr-3" />
          )}
          Toggle Theme
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-500/10"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  )
}</content>