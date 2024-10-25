"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Configure how you receive notifications and alerts.
        </p>
      </div>
      <Separator />
      <div className="grid gap-6 max-w-2xl">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Payment Confirmations</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications for successful payments
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Low Balance Alerts</Label>
            <p className="text-sm text-muted-foreground">
              Get notified when customer balance is low
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>System Updates</Label>
            <p className="text-sm text-muted-foreground">
              Notifications about system maintenance and updates
            </p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Marketing Communications</Label>
            <p className="text-sm text-muted-foreground">
              Receive news and promotional materials
            </p>
          </div>
          <Switch />
        </div>
        <Button 
          onClick={() => toast.success("Notification preferences saved")}
          className="w-fit"
        >
          Save Changes
        </Button>
      </div>
    </div>
  )
}