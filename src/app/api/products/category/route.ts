
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // 1. Get Query Parameters from URL
    const searchParams = req.nextUrl.searchParams;

    // 2. Get category value
    const category = searchParams.get("category");

    // 3. Validate category
    if (!category) {
      return NextResponse.json(
        { message: "Category is required" },
        { status: 400 }
      );
    }

    // 4. Fetch products by category
    const response = await fetch(
      `${process.env.DUMMY_BASE_URL}/products/category/${encodeURIComponent(category)}`
    );

    // 5. Check API response
    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to fetch products by category" },
        { status: response.status }
      );
    }

    // 6. Convert response into JSON
    const product = await response.json();

    // 7. Display product data in terminal
    console.log("Product category:", product);

    // 8. Return products to client
    return NextResponse.json(product.products);

  } catch (error) {
    console.error("Category API Error:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
