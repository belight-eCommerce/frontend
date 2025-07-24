export interface CartItem {
  id: string
  name: string
  image: string // This is the string path to the image
  price: number
  quantity: number
  details: {
    label: string
    value: string | string[]
    type?: "size" | "color" | "text" | "gemstone-color"
  }[]
}

export const mockCartItems: CartItem[] = [
  {
    id: "1",
    name: "Sterling Silver Pearl Drop Earrings",
    image: "/images/cart/Earring.png", // Correctly referenced as a string path
    price: 120.0,
    quantity: 1,
    details: [
      { label: "Size", value: "6, 7", type: "text" },
      { label: "Material", value: "14K Gold, Sterling Silver", type: "text" },
      { label: "Gemstone Color", value: "#3B82F6", type: "gemstone-color" },
    ],
  },
  {
    id: "2",
    name: "Slim Fit Linen Shirt",
    image: "/images/cart/Shirt.png", // Correctly referenced as a string path
    price: 120.0,
    quantity: 1,
    details: [
      { label: "Size", value: ["XS", "S", "M", "L"], type: "size" },
      { label: "Color", value: ["#3B82F6", "#F59E0B", "#C026D3", "#A16207", "#65A30D"], type: "color" },
    ],
  },
]
