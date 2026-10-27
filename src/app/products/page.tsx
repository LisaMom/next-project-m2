import ProductCardListComponents from "@/components/products/ProductCardListComponents";

export default function ProductPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Our Products</h1>

      <ProductCardListComponents />
    </main>
  );
}