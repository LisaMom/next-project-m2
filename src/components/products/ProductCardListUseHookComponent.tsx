
import React, { use } from 'react'
import { ProductCardComponent } from './ProductCardComponent'
interface ProductResponse {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
}
export default function ProductCardListUseHookComponent({
    product
}
: {
    product: Promise<ProductResponse[]> 
}) {
     // use hook (logic will work on server component and it will return props as promise in client component) That's mean fetch in server component and return props to client component
     const products = use(product);
  return (
       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map(({ id, images, title, description, price }) => (
        <ProductCardComponent
          key={id}
          id={id}
          images={images}
          title={title}
          description={description}
          price={price}
        />
      ))}
    </div>
  )
}
