"use client"

import { Suspense } from 'react'
// import SearchBar from './search-bar'
// import { SearchBarComponent } from '@/components/search/SearchBarComponent'
import { useParams } from 'next/navigation'

// This component passed as a fallback to the Suspense boundary
// will be rendered in place of the search bar in the initial HTML.
// When the value is available during React hydration the fallback
// will be replaced with the `<SearchBar>` component.
function SearchBarFallback() {
  return <>placeholder</>
}

export default function Page() {
  const search = useParams();
  return (
    <>
      <nav>
        <Suspense fallback={<SearchBarFallback />}>
          {/* <SearchBarComponent search={search} /> */}
        </Suspense>
      </nav>
      <h1>Dashboard</h1>
      
    </>
  )
}