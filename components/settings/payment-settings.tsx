"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PaymentSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Payment Configuration</h3>
        <p className="text-sm text-muted-foreground">
          Configure payment methods and processing settings.
        </p>
      </div>
      <Separator />
      <div className="grid gap-6 max-w-2xl">
        <div className="grid gap-2">
          <Label htmlFor="momo-api">Mobile Money API Key</Label>
          <Input id="momo-api" type="password" defaultValue="••••••••••••••••" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="default-currency">Default Currency</Label>
          <Select defaultValue="UGX">
            <SelectTrigger id="default-currency">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UGX">Ugandan Shilling (UGX)</SelectItem>
              <SelectItem value="USD">US Dollar (USD)</SelectItem>
              <SelectItem value="EUR">Euro (EUR)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Enable Cash Payments</Label>
            <p className="text-sm text-muted-foreground">
              Allow agents to collect cash payments
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Enable Mobile Money</Label>
            <p className="text-sm text-muted-foreground">
              Accept payments via mobile money services
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <Button 
          onClick={() => toast.success("Payment settings updated")}
          className="w-fit"
        >
          Save Changes
        </Button>
      </div>
    </div>
  )
}