
'use client'

import { ProductCardDetailComponent } from "./ProductDetailComponent";
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(res => res.json())

type ProductIdType = {
  proId: number
}

export default function ProductDetailUseSWRComponent({proId}:ProductIdType) {

  console.log(`===> ProductId in detail: `, proId)
 
  const { data, error, isLoading } = 
  useSWR(`/api/products/${proId}`, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <ProductCardDetailComponent
      num={1}
      images={data.images}
      title={data.title}
      description={data.description}
      price={data.price} />
  )
}
