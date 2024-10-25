"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PaymentForm } from "@/components/payments/payment-form"
import { PaymentHistory } from "@/components/payments/payment-history"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState("collect")

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Payment Collection</h2>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="collect">Collect Payment</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="collect" className="space-y-4">
          <Card className="p-6">
            <PaymentForm />
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <PaymentHistory />
        </TabsContent>
      </Tabs>
    </div>
  )
}