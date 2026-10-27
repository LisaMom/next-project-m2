"use client";

import { useEffect, useState } from "react";
import { ProductCardComponent } from "./ProductCardComponent";

interface ProductResponse {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
}

interface ProductsApiResponse {
  products: ProductResponse[];
  total: number;
  skip: number;
  limit: number;
}

export default function ProductCardListComponents() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data: ProductsApiResponse = await res.json();

        setProducts(data.products);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="p-4 text-center">Loading products...</p>;
  }

  if (error) {
    return <p className="p-4 text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map(({ id, images, title, description, price }) => (
        <ProductCardComponent
          key={id}
          images={images}
          title={title}
          description={description}
          price={price}
        />
      ))}
    </div>
  );
}