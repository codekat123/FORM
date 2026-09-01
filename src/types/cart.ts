export interface CartItem {
  ProductId: string
  name: string
  price: string
  image: string
  selectedVariant: string | null
  quantity: number
}

export interface CartState {
  items: CartItem[]
}
