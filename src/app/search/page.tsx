"use client"

import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Suspense, use } from 'react'

export default function SearchBar() {

  const searchParams = useSearchParams()
  const router = useRouter();
  const pathName = usePathname();
  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return (
    <>
    {/* button  */}
   
     <button className="border p-4 rounded"
  onClick={() => router.push("/")}
>
  Home Page
</button>
  {/* button forward route using router */}
<button className="border p-4 rounded"
  onClick={() => router.forward()}
>
  Next Page
</button>

{/* button backward route using router */}
<button className="border p-4 rounded"
  onClick={() => router.back()}
>
  Back From Previous Page
</button>
  <Suspense fallback={<h1>Loading ... </h1>}>
        {/* searchparams */}
        Search Params : {searchParams.get('category')}
   </Suspense>
</>
  )
}