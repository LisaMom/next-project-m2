import { NextResponse } from "next/server";

interface Product {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
}

interface ProductsApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_DUMMY_BASE_URL;

  if (!baseUrl) {
    return NextResponse.json(
      { error: "Product API is not configured." },
      { status: 500 }
    );
  }

  const response = await fetch(`${baseUrl}/products`);

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch products from the upstream API." },
      { status: response.status }
    );
  }

  const data: ProductsApiResponse = await response.json();
  return NextResponse.json(data);
}
