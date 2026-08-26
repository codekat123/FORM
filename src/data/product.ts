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
  {
    id: 'form-key-65',
    name: 'FORM Key 65',
    category: 'Keyboards',
    price: 219,
    images: [formChargeImage],
    variants: [
      {
        id: 'switch-linear',
        name: 'Switch',
        value: 'Linear (Silent)',
      },
      {
        id: 'switch-tactile',
        name: 'Switch',
        value: 'Tactile (Subtle)',
      },
      {
        id: 'layout-ansi',
        name: 'Layout',
        value: 'ANSI (US)',
      },
    ],
    description: 'A compact 65% mechanical keyboard with custom tuned switches and sound dampening.',
    stock: 14,
  },
  {
    id: 'form-mouse-01',
    name: 'FORM Mouse 01',
    category: 'Wireless Mice',
    price: 99,
    images: [formChargeImage],
    variants: [
      {
        id: 'color-matte-black',
        name: 'Color',
        value: 'Matte Black',
      },
      {
        id: 'color-silver',
        name: 'Color',
        value: 'Anodized Silver',
      },
    ],
    description: 'Ergonomic wireless precision mouse with dual-mode connectivity and silent magnetic scrolling.',
    stock: 35,
  },
  {
    id: 'form-hub-7',
    name: 'FORM Hub 7-in-1',
    category: 'USB-C Hubs',
    price: 129,
    images: [formChargeImage],
    variants: [],
    description: 'Solid aluminum USB-C hub offering dual 4K display output, 100W PD pass-through, and UHS-II card slots.',
    stock: 18,
  },
  {
    id: 'form-stand',
    name: 'FORM Laptop Stand',
    category: 'Laptop Stands',
    price: 89,
    images: [formChargeImage],
    variants: [
      {
        id: 'finish-space-gray',
        name: 'Finish',
        value: 'Space Gray',
      },
      {
        id: 'finish-silver',
        name: 'Finish',
        value: 'Silver',
      },
    ],
    description: 'Elevated laptop stand machined from single-piece aluminum with integrated cable routing channel.',
    stock: 25,
  },
]
