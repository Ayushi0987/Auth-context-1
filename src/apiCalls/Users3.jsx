import React from 'react'

export default function Users3({isLoading, items}) {
    if(isLoading) return <div id='loading'>Loading...</div>
  return (
    <>
     {
        items.map((name, index)=> {
            return <div key= {index} className='user'>{name}</div>
        })
     } 
    </>
  )
}
