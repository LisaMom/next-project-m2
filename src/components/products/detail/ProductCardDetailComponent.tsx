
"use client";

import { CircleCheck, Star } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Product type from DummyJSON
interface ProductDetails {
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

interface ProductCardProps {
  product: ProductDetails;
}

const ProductCardDetailComponent = ({
  product,
}: ProductCardProps) => {
  const salePrice =
    product.price -
    (product.price * product.discountPercentage) / 100;

  const isInStock = product.stock > 0;

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Product Images */}
          <div>
            <ProductImages images={product.images} />
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground uppercase">
                  {product.category}
                </p>

                <h1 className="text-4xl font-bold tracking-tight">
                  {product.title}
                </h1>

                {product.brand && (
                  <p className="text-muted-foreground mt-2">
                    Brand: {product.brand}
                  </p>
                )}

                <div className="mt-3 flex items-center gap-4">
                  <Reviews
                    rating={product.rating}
                    totalReviews={product.reviews.length}
                  />

                  <Badge variant="secondary">
                    <CircleCheck className="mr-1 size-4" />
                    {isInStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </div>

              <Price
                regular={product.price}
                sale={salePrice}
                discount={product.discountPercentage}
              />

              <p className="text-muted-foreground">
                {product.description}
              </p>

              <p className="text-sm">
                Available Stock: {product.stock}
              </p>
            </div>

            {/* Product Availability */}
            <div>
              <Badge variant={isInStock ? "secondary" : "destructive"}>
                {product.availabilityStatus}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Images
const ProductImages = ({
  images,
}: {
  images: string[];
}) => {
  return (
    <Carousel>
      <CarouselContent className="gap-4">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <AspectRatio ratio={1}>
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className="size-full rounded-lg object-cover"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

// Product Reviews
const Reviews = ({
  rating,
  totalReviews,
}: {
  rating: number;
  totalReviews: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`size-4 ${
              index < Math.round(rating)
                ? "fill-yellow-500 stroke-yellow-500"
                : "fill-muted stroke-muted"
            }`}
          />
        ))}
      </div>

      <span className="text-sm text-muted-foreground">
        {rating} ({totalReviews} reviews)
      </span>
    </div>
  );
};

// Product Price
const Price = ({
  regular,
  sale,
  discount,
}: {
  regular: number;
  sale: number;
  discount: number;
}) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl font-bold text-primary">
        ${sale.toFixed(2)}
      </span>

      {discount > 0 && (
        <>
          <span className="text-lg line-through text-muted-foreground">
            ${regular.toFixed(2)}
          </span>

          <Badge variant="destructive">
            -{discount.toFixed(0)}%
          </Badge>
        </>
      )}
    </div>
  );
};

export { ProductCardDetailComponent };
