import React, { useEffect } from 'react'
import { useSearchParams, createSearchParams } from 'react-router-dom';

export default function ConceptSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    console.log(searchParams.get("search"))
    console.log(searchParams.get("abcd"))

    useEffect(()=>{
        setTimeout(()=>{
            setSearchParams(createSearchParams({test: '1', test2: '2'}))
        },2000)
    },[])
  return (
    <div>
      ConceptSearch
    </div>
  )
}
