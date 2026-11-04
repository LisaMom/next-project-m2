export const instant = false;

import { notFound } from "next/navigation";
import { ProductCardDetailComponent } from "@/components/products/detail/ProductCardDetailComponent";
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

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  "use cache";
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    notFound();
  }

  const product: ProductResponse = await response.json();

  return (
    <div>
      <Suspense fallback={<p className="p-4 text-center">Loading product details...</p>}>
            <ProductCardDetailComponent product={product} />
      </Suspense>
      
    </div>
  );
}
