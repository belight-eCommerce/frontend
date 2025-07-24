import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface OrderSummaryCardProps {
  subtotal: number
  shipping: string
  total: number
}

// export function OrderSummaryCard({ subtotal, shipping, total }: OrderSummaryCardProps) {
//   return (
//     <Card className="p-6 shadow-sm rounded-xl">
//       <CardHeader className="px-0 pt-0 pb-4">
//         <CardTitle className="text-xl font-semibold text-gray-900">Order Summary</CardTitle>
//       </CardHeader>
//       <CardContent className="px-0 py-0 grid gap-4">
//         <div className="flex justify-between text-base text-gray-700">
//           <span>Subtotal</span>
//           <span>${subtotal.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-base text-gray-700">
//           <span>Shipping</span>
//           <span>{shipping}</span>
//         </div>
//         <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold text-gray-900">
//           <span>Subtotal</span>
//           <span>${total.toFixed(2)}</span>
//         </div>
//         <Button className="w-full mt-4 bg-[#1A438F] hover:bg-[#1A438F]/90 text-white py-2 rounded-full text-lg font-medium">
//           Continue To Check Out
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }

export function OrderSummaryCard({ subtotal, shipping, total }: OrderSummaryCardProps) {
  return (
    <Card className="p-6 shadow-sm rounded-xl bg-white">
      {" "}
      {/* Added bg-white for explicit contrast */}
      <CardHeader className="px-0 pt-0 pb-4">
        <CardTitle className="text-xl font-semibold text-gray-900">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="px-0 py-0 grid gap-4">
        <div className="flex justify-between text-base text-gray-700">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-base text-gray-700 border-b border-gray-200 pb-4">
          {" "}
          {/* Added border-b and pb-4 */}
          <span>Shipping</span>
          <span>{shipping}</span>
        </div>
        <div className="pt-4 flex justify-between text-lg font-semibold text-gray-900">
          {" "}
          {/* Removed border-t, added font-semibold */}
          <span className="font-semibold">Subtotal</span> {/* Made this subtotal bold */}
          <span className="font-semibold">${total.toFixed(2)}</span> {/* Made value bold */}
        </div>
        <Button className="w-full mt-4 bg-[#1A438F] hover:bg-[#1A438F]/90 text-white py-2 rounded-full text-lg font-medium">
          Continue To Check Out
        </Button>
      </CardContent>
    </Card>
  )
}


