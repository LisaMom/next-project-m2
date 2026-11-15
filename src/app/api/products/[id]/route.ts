import { NextResponse } from "next/server";

const BASE_URL = process.env.DUMMY_BASE_URL;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Get dynamic ID from URL
    const { id } = await params;

    // 2. Fetch product from external API
    const response = await fetch(
      `${BASE_URL}/products/${id}`
    );

    // 3. Check whether product exists
    if (!response.ok) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: response.status }
      );
    }

    // 4. Convert response into JSON
    const product = await response.json();

    // 5. Display data in server console
    console.log("Product:", product);

    // 6. Return product to client
    return NextResponse.json(product);

  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}