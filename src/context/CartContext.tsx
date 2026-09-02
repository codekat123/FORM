import { createContext, useState } from 'react'
import type { CartItem } from '../types/cart'

interface CartContextValue {
  items: CartItem[]
  addItem: (item: CartItem) => void
  updateQuantity: (
    productId: string,
    selectedVariant: string | null,
    quantity: number
  ) => void
  removeItem: (productId: string, selectedVariant: string | null) => void
  total: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (currentItem) =>
          currentItem.productId === item.productId &&
          currentItem.selectedVariant === item.selectedVariant
      )

      if (existingItem) {
        return currentItems.map((currentItem) =>
          currentItem.productId === item.productId &&
          currentItem.selectedVariant === item.selectedVariant
            ? {
                ...currentItem,
                quantity: currentItem.quantity + item.quantity,
              }
            : currentItem
        )
      }

      return [...currentItems, item]
    })
  }

  const updateQuantity = (
    productId: string,
    selectedVariant: string | null,
    quantity: number
  ) => {
    setItems((currentItems) =>
      currentItems.map((currentItem) =>
        currentItem.productId === productId &&
        currentItem.selectedVariant === selectedVariant
          ? {
              ...currentItem,
              quantity,
            }
          : currentItem
      )
    )
  }

  const removeItem = (
    productId: string,
    selectedVariant: string | null
  ) => {
    setItems((currentItems) =>
      currentItems.filter(
        (currentItem) =>
          !(
            currentItem.productId === productId &&
            currentItem.selectedVariant === selectedVariant
          )
      )
    )
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
