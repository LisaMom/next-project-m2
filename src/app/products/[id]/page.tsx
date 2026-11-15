
import { notFound } from "next/navigation";
import { ProductCardDetailComponent } from "@/components/products/detail/ProductCardDetailComponent";
import RecommandationCategoriesComponent from "@/components/products/RecommandationCategoriesComponent";
import { Suspense } from "react";

interface ProductResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  availabilityStatus: string;
  brand?: string;
  category: string;
  images: string[];
  reviews: {
    rating: number;
    reviewerName: string;
    comment: string;
  }[];
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 1. Get Dynamic ID from URL
  const { id } = await params;

  // 2. Fetch product by ID
  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  // 3. Check API response
  if (!response.ok) {
    notFound();
  }

  // 4. Convert response into JSON
  const product: ProductResponse = await response.json();

  // 5. Get category from product data
  const category = product.category;

  return (
    <div>
      <h1>Category of Product: {category}</h1>

      <Suspense
        fallback={
          <p className="p-4 text-center">
            Loading product details...
          </p>
        }
      >
        <ProductCardDetailComponent product={product} />
      </Suspense>

      <Suspense
        fallback={
          <p className="p-4 text-center">
            Loading recommendations...
          </p>
        }
      >
        <RecommandationCategoriesComponent
          category={category}
          currentProductId={product.id}
        />
      </Suspense>
    </div>
  );
}
