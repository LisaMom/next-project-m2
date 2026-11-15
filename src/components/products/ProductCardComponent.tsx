import { cn } from "cn";
import { Price, PriceValue } from "../shadcnblocks/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export interface ProductResponse {
  num: number;
  id?: number;
  images: string[];
  title: string;
  description: string;
  price: number;
  category?: string;
}

const ProductCardComponent = ({
  num,
  id,
  images,
  title,
  description,
  price,
  category
}: ProductResponse) => {
  return (
    <Link
      href={category
        ? `/products/${id}?category=${encodeURIComponent(category)}`
        : `/products/${id}`}
      className={cn("block max-w-md transition-opacity hover:opacity-80")}
    >
      <Card className="h-full overflow-hidden p-0">
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            {images?.[0] ? (
              <Image
                src={images[0]}
                alt={title}
                width={500}
                height={500}
                className="block size-full object-cover object-center"
              />
            ) : (
              <div className="flex size-full items-center justify-center bg-gray-100 text-gray-500">
                No image available
              </div>
            )}
          </AspectRatio>
        </CardHeader>

        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">
            {title}
          </CardTitle>

          <CardDescription className="font-medium text-muted-foreground">
            {description}
          </CardDescription>

          <div className="mt-auto">
            <Price className="text-lg font-semibold">
              <PriceValue
                price={price}
                currency="USD"
                variant="regular"
              />
            </Price>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export { ProductCardComponent };
