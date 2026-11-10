

import { cn } from "cn";
import { Price, PriceValue } from "@/components/products/price";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ProductResponse } from "../ProductCardComponent";


const ProductCardDetailComponent = ({images,title, description, price,num}:ProductResponse) => {
  const PLACEHOLDER = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHQ2QS9U-YKh9fPiHsVWMcXMFKbZXlPQ_BpGCWYDTbjkaaakSgu-PZIJU&s=10"
  const imageSrc = images && images.length > 0 && images[0] ? images[0] : PLACEHOLDER;

  return (
      <Card className={`container grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-${num} mx-auto`}>
        {/* images */}
        <CardHeader className="relative block p-0">
          <AspectRatio ratio={1.268115942} className="overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              width={500}
              height={500}
              className="block size-full object-cover object-center"
            />
          </AspectRatio>
        </CardHeader>

        {/* title, description, price */}
        <CardContent className="flex h-full flex-col gap-4 pb-6">
          <CardTitle className="text-xl font-semibold">
            {title}
          </CardTitle>
          <CardDescription className="font-medium text-muted-foreground">
            {description}
          </CardDescription>
          <div>
            <Price onSale={price != null} className="text-lg font-semibold">
              <PriceValue
                price={price}
                currency={'USD'}
                variant="regular"
              />
              <PriceValue price={price} currency={'USD'} variant="sale" />
            </Price>
          </div>
        </CardContent>
      </Card>
  );
};

export { ProductCardDetailComponent };