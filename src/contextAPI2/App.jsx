import React, { useState } from 'react'
import Parent1 from './Parent1'
import Parent2 from './Parent2'

import Provider1 from './Provider1'
import Provider2  from './Context2'


export default function App() { 
       {/*  We declare our state now i want to store this state inside the store(MyCOntextStore) so we asked the provider take this counter with you nd store it and it is done by compulsory prop or attribute which needs to be passed inside a provider that is called value prop. 
                                                 To the value prop giving an object {counter: counter}*/}
  return (
    // All the component you want to provide the access to the store those should be wrapped inside the provider,
    // So i want to give the access to the parent1 & parent2 component, both of them have access to my provider to my store
      
    <div>
        <Provider1>
          <>
            <Parent1 />
            <Parent2 />
          </>
        </Provider1>
    </div>
  )
}


// {counter: counter} => In ES5 compulsory
//  {counter} => In ES6 , the Key nd value have the same name, in that case we dont need to provide key nd value same name we just put it a single name
