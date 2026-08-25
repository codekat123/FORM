
export interface ProductVariant {
  id: string
  name: string
  value: string
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  images: string[]
  variants: ProductVariant[]
  description: string
  stock: number
}
