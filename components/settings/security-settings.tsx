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

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Security Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your security preferences and access controls.
        </p>
      </div>
      <Separator />
      <div className="grid gap-6 max-w-2xl">
        <div className="grid gap-2">
          <Label htmlFor="session">Session Timeout</Label>
          <Select defaultValue="30">
            <SelectTrigger id="session">
              <SelectValue placeholder="Select timeout duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15 minutes</SelectItem>
              <SelectItem value="30">30 minutes</SelectItem>
              <SelectItem value="60">1 hour</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Two-Factor Authentication</Label>
            <p className="text-sm text-muted-foreground">
              Require 2FA for all admin accounts
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>IP Whitelisting</Label>
            <p className="text-sm text-muted-foreground">
              Restrict access to specific IP addresses
            </p>
          </div>
          <Switch />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password-policy">Password Policy</Label>
          <Select defaultValue="strong">
            <SelectTrigger id="password-policy">
              <SelectValue placeholder="Select password policy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic (8+ characters)</SelectItem>
              <SelectItem value="strong">Strong (12+ chars, special)</SelectItem>
              <SelectItem value="complex">Complex (14+ chars, numbers)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button 
          onClick={() => toast.success("Security settings updated")}
          className="w-fit"
        >
          Save Changes
        </Button>
      </div>
    </div>
  )
}