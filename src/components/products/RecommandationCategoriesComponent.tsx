import { ProductCardComponent } from "@/components/products/ProductCardComponent";

interface RecommendationProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
}

interface ProductsResponse {
  products: RecommendationProduct[];
}

interface RecommendationProps {
  category: string;
  currentProductId: number;
}

export default async function RecommandationCategoriesComponent({
  category,
  currentProductId,
}: RecommendationProps) {
  if (!category) return null;

  const response = await fetch(
    `https://dummyjson.com/products/category/${encodeURIComponent(category)}`,
    { next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    return null;
  }

  const { products }: ProductsResponse = await response.json();
  const recommendations = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 pb-16">
      <h2 className="mb-6 text-2xl font-semibold">Recommended products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recommendations.map((product) => (
          <ProductCardComponent key={product.id} num={1} {...product} />
        ))}
      </div>
    </section>
  );
}
