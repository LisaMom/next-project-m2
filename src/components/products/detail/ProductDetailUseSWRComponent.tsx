
import useSWR from 'swr'
import { ProductCardDetailComponent } from './ProductCardDetailComponent'
import { Suspense } from 'react'

const fetcher = (url:string) => fetch(url).then(res => res.json())
   
function Profile ({ userId }: { userId: string }) {
    
  const { data, error, isLoading } = useSWR(`/api/products/${userId}`, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  // render data
  return <div>
     <Suspense fallback={<p className="p-4 text-center">Loading product details...</p>}>
            <ProductCardDetailComponent product={data} />
      </Suspense>
  </div>
}
