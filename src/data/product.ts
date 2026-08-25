import type { Product } from '../types/product'
import formChargeImage from '../assets/products/form-charge.png'

export const products: Product[] = [
  {
    id: 'form-charge',
    name: 'FORM Charge',
    category: 'Charging',
    price: 149,
    images: [formChargeImage],
    variants: [],
    description: 'A refined wireless charging dock designed for everyday use.',
    stock: 20,
  },
]
