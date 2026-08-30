import type { Product } from '../types/product'

const API_URL = 'https://dummyjson.com'

interface DummyJsonProduct {
  id: number
  title: string
  category: string
  price: number
  images: string[]
  description: string
  stock: number
}

interface DummyJsonProductsResponse {
  products: DummyJsonProduct[]
  total: number
  skip: number
  limit: number
}

export interface ProductListResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

function mapProduct(product: DummyJsonProduct): Product {
  return {
    id: String(product.id),
    name: product.title,
    category: product.category,
    price: product.price,
    images: product.images,
    variants: [],
    description: product.description,
    stock: product.stock,
  }
}

export async function getProducts(): Promise<ProductListResponse> {
  const response = await fetch(`${API_URL}/products`)

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  const data: DummyJsonProductsResponse = await response.json()

  return {
    products: data.products.map(mapProduct),
    total: data.total,
    skip: data.skip,
    limit: data.limit,
  }
}
