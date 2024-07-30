import React, { useContext } from 'react'
import MyContextStore from './Context'

export default function Child2() {
    const myContextStoreState = useContext(MyContextStore);
    console.log(myContextStoreState)
  return (
    <>
         <div>Child2</div>
         <div>{myContextStoreState.counter}</div>
         <button onClick={()=>myContextStoreState.increment(2)}>Increment by 2</button>
    
    </>
   
    
  )
}
