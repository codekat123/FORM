export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  selectedVariant: string | null;
  quantity: number;
}

export interface CartState {
  items: CartItem[]
}
