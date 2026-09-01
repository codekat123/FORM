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

const ELECTRONICS_CATEGORIES = [
  'mobile-accessories',
  'smartphones',
  'laptops',
  'tablets', 
]

export async function getProducts(): Promise<ProductListResponse> {
  const responses = await Promise.all(
    ELECTRONICS_CATEGORIES.map((category) =>
      fetch(`${API_URL}/products/category/${category}`)
    )
  )

  for (const response of responses) {
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`)
    }
  }

  const data: DummyJsonProductsResponse[] = await Promise.all(
    responses.map((response) => response.json())
  )

  const products = data.flatMap((category) =>
    category.products.map(mapProduct)
  )

  return {
    products,
    total: products.length,
    skip: 0,
    limit: products.length,
  }
}
export async function getProduct(id: string, signal?:AbortSignal): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`,{
    signal,
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`)
  }

  const data: DummyJsonProduct = await response.json()

  return mapProduct(data)
}


export async function getProductsByCategory(
  category: string
): Promise<ProductListResponse> {
  const response = await fetch(
    `${API_URL}/products/category/${category}`
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`)
  }

  const data: DummyJsonProductsResponse = await response.json()

  return {
    products: data.products.map(mapProduct),
    total: data.total,
    skip: data.skip,
    limit: data.limit,
  }
}
export async function getCategoryPreview(
  category: string
): Promise<Product> {
  const response = await fetch(
    `${API_URL}/products/category/${category}?limit=1`
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch ${category} preview`)
  }

  const data: DummyJsonProductsResponse = await response.json()

  if (data.products.length === 0) {
    throw new Error(`No products found for ${category}`)
  }

  return mapProduct(data.products[0])
}
