// import { CartItemCard } from "@/app/cart-page/components/cart-item-card"
// import { OrderSummaryCard } from "@/app/cart-page/components/order-summary-card"
// import { PromoCodeSection } from "@/app/cart-page/components/promo-code-section"
// import { mockCartItems } from "@/app/cart-page/lib/data"

import { CartItemCard } from "../../../../components/carts/cart-item-card"
import {OrderSummaryCard} from "../../../../components/carts/order-summary-card"
import { PromoCodeSection } from "../../../../components/carts/promo-code-section"
import {mockCartItems} from "../../../../lib/cart/data"

export default function ShoppingCartPage() {
  // Calculate subtotal from mock items
  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = "Free" // As per image
  const total = subtotal // Assuming total is subtotal if shipping is free

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Shopping Cart and Promo Code */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6 text-gray-900">Your Shopping Cart</h1>
          <div className="grid gap-6">
            {mockCartItems.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>
          <PromoCodeSection />
        </div>

        {/* Right Section: Order Summary */}
        <div className="lg:col-span-1">
          <OrderSummaryCard subtotal={subtotal} shipping={shipping} total={total} />
        </div>
      </div>
    </div>
  )
}
