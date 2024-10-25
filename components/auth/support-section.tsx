import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import { toast } from "sonner"

export function SupportSection() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Need Help?
          </span>
        </div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          Contact your sales agent or our support team
        </p>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => toast.info("Calling support center...")}
        >
          <User className="mr-2 h-4 w-4" />
          Call Support Center
        </Button>
      </div>
    </div>
  )
}