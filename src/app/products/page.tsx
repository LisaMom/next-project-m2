import ProductCardListComponents from "@/components/products/ProductCardListComponents";
import { Suspense } from "react";

export default function ProductPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Our Products</h1>
      <Suspense fallback={<p className="p-4 text-center">Loading products...</p>}>
        <ProductCardListComponents />
      </Suspense>
    </main>
  );
}
