import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function PromoCodeSection() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Promo Code</h2>
      <Card className="flex items-center p-2 gap-2 shadow-sm rounded-xl">
        <Input
          type="text"
          placeholder="Enter promo code"
          className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-gray-50 text-gray-800 placeholder:text-gray-400"
        />
        <Button className="bg-[#1A438F] hover:bg-[#1A438F]/90 text-white px-6 py-2 rounded-full font-medium ml-auto mr-5 mb-8">
          Apply
        </Button>
      </Card>
    </div>
  )
}
