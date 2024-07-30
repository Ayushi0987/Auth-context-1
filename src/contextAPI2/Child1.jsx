import React from 'react'
import MyContextStore from './Context'

export default function Child1() {
  return (  // In this we want to consume our store so that wrapped in that part
    <MyContextStore.Consumer> 
        {
            (myContextStoreState) =>(
                <>
                    {console.log(myContextStoreState)}
                    {console.log(myContextStoreState.counter)}
                    <div>{myContextStoreState.counter}</div>  {/*  display the counter state over here*/}
                </>
            )
        }
    </MyContextStore.Consumer>
  )
}

{/* This consumer takes a sort of component, a sort of JSX... passing callback */}