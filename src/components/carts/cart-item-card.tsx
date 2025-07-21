"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { CartItem } from "@/lib/cart/data"

interface CartItemCardProps {
  item: CartItem
}

// export function CartItemCard({ item }: CartItemCardProps) {
//   const [quantity, setQuantity] = useState(item.quantity)

//   const handleQuantityChange = (delta: number) => {
//     setQuantity((prev) => Math.max(1, prev + delta))
//   }

//   return (
//     <Card className="flex flex-col sm:flex-row items-center p-4 gap-4 shadow-sm rounded-xl">
//       <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
//         <Image
//           src={item.image || "/placeholder.svg"}
//           alt={item.name}
//           fill
//           style={{ objectFit: "cover" }}
//           className="rounded-lg"
//           sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//         />
//       </div>
//       <div className="flex-1 grid gap-2 text-center sm:text-left">
//         <div className="flex justify-between items-start w-full">
//           <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
//           <Button variant="ghost" size="icon" className="rounded-full w-6 h-6 text-gray-500 hover:bg-gray-100">
//             <X className="bg-black text-white rounded-full ml-60 mb-6 w-4 h-4" />
//             <span className="sr-only">Remove item</span>
//           </Button>
//         </div>
//         {item.details.map((detail, index) => (
//           <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
//             <span className="font-medium">{detail.label}:</span>
//             {detail.type === "size" && Array.isArray(detail.value) ? (
//               <div className="flex gap-1">
//                 {detail.value.map((size, i) => (
//                   <span
//                     key={i}
//                     className={`px-2 py-0.5 border border-gray-300 rounded-md text-xs ${
//                       i === 0 ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
//                     }`}
//                   >
//                     {size}
//                   </span>
//                 ))}
//               </div>
//             ) : detail.type === "color" && Array.isArray(detail.value) ? (
//               <div className="flex gap-1">
//                 {detail.value.map((color, i) => (
//                   <span
//                     key={i}
//                     className="w-4 h-4 rounded-full border border-gray-300"
//                     style={{ backgroundColor: color }}
//                   />
//                 ))}
//               </div>
//             ) : detail.type === "gemstone-color" ? (
//               <div className="flex items-center gap-1">
//                 <span
//                   className="w-4 h-4 rounded-full border border-gray-300"
//                   style={{ backgroundColor: detail.value as string }}
//                 />
//               </div>
//             ) : (
//               <span>{detail.value}</span>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center justify-center sm:justify-end gap-4 w-full sm:w-auto mt-4 sm:mt-0">
//         <span className="mb-2 sm:mb-3 text-gray-900">${(item.price * quantity).toFixed(2)}</span>
//         <div className="flex items-center gap-2">
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full w-7 h-7 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50"
//             onClick={() => handleQuantityChange(-1)}
//           >
//             <Minus className="w-4 h-4" />
//             <span className="sr-only">Decrease quantity</span>
//           </Button>
//           <span className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-800">
//             {quantity}
//           </span>
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full w-7 h-7 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50"
//             onClick={() => handleQuantityChange(1)}
//           >
//             <Plus className="w-4 h-4" />
//             <span className="sr-only">Increase quantity</span>
//           </Button>
//         </div>
//       </div>
//     </Card>
//   )
// }

export function CartItemCard({ item }: CartItemCardProps) {
  const [quantity, setQuantity] = useState(item.quantity)

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  return (
    <Card className="relative flex flex-col sm:flex-row items-center p-4 gap-4 shadow-sm rounded-xl">
      {/* X button positioned absolutely */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 rounded-full w-6 h-6 bg-black text-white hover:bg-gray-800"
      >
        <X className="w-4 h-4" />
        <span className="sr-only">Remove item</span>
      </Button>

      <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="flex-1 grid gap-2 text-center sm:text-left pr-8">
        <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
        {item.details.map((detail, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">{detail.label}:</span>
            {detail.type === "size" && Array.isArray(detail.value) ? (
              <div className="flex gap-1">
                {detail.value.map((size, i) => (
                  <span
                    key={i}
                    className={`px-2 py-0.5 border border-gray-300 rounded-md text-xs ${
                      i === 0 ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            ) : detail.type === "color" && Array.isArray(detail.value) ? (
              <div className="flex gap-1">
                {detail.value.map((color, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            ) : detail.type === "gemstone-color" ? (
              <div className="flex items-center gap-1">
                <span
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: detail.value as string }}
                />
              </div>
            ) : (
              <span>{detail.value}</span>
            )}
          </div>
        ))}
      </div>
      {/* Price and Quantity Controls */}
      <div className="flex items-center justify-center sm:justify-end gap-4 w-full sm:w-auto mt-4 sm:mt-0">
        <span className="text-lg text-gray-900">${(item.price * quantity).toFixed(2)}</span>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost" // Changed variant to ghost to remove default border
            size="icon"
            className="w-7 h-7 bg-transparent text-blue-600 hover:bg-blue-50" // Removed border classes
            onClick={() => handleQuantityChange(-1)}
          >
            <Minus className="w-4 h-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <span className="w-7 h-7 flex items-center justify-center border border-blue-300 rounded-full text-sm font-medium text-blue-800">
            {quantity}
          </span>
          <Button
            variant="ghost" // Changed variant to ghost to remove default border
            size="icon"
            className="w-7 h-7 bg-transparent text-blue-600 hover:bg-blue-50" // Removed border classes
            onClick={() => handleQuantityChange(1)}
          >
            <Plus className="w-4 h-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}

