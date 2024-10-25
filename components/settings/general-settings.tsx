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

export function GeneralSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Company Information</h3>
        <p className="text-sm text-muted-foreground">
          Update your company details and business information.
        </p>
      </div>
      <Separator />
      <div className="grid gap-6 max-w-2xl">
        <div className="grid gap-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" defaultValue="SolarPay Uganda Ltd." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address">Business Address</Label>
          <Input id="address" defaultValue="123 Solar Street, Kampala" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact">Contact Email</Label>
          <Input id="contact" type="email" defaultValue="info@solarpay.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select defaultValue="EAT">
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EAT">East Africa Time (EAT)</SelectItem>
              <SelectItem value="CAT">Central Africa Time (CAT)</SelectItem>
              <SelectItem value="WAT">West Africa Time (WAT)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Maintenance Mode</Label>
            <p className="text-sm text-muted-foreground">
              Temporarily disable access to the platform
            </p>
          </div>
          <Switch />
        </div>
        <Button 
          onClick={() => toast.success("Settings saved successfully")}
          className="w-fit"
        >
          Save Changes
        </Button>
      </div>
    </div>
  )
}