import React, { useState } from 'react'
import Parent1 from './Parent1'
import Parent2 from './Parent2'

import MyContextStore from './Context'

export default function App() { 
    const [counter, setCounter] = useState(0);   {/*  We declare our state now i want to store this state inside the store(MyCOntextStore) so we asked the provider take this counter with you nd store it and it is done by compulsory prop or attribute which needs to be passed inside a provider that is called value prop. 
                                                 To the value prop giving an object {counter: counter}*/}
  return (
    // All the component you want to provide the access to the store those should be wrapped inside the provider,
    // So i want to give the access to the parent1 & parent2 component, both of them have access to my provider to my store
      
    <div>
        <MyContextStore.Provider value={{
            counter: counter,
            increment: (val) => setCounter(counter+val)
        
        }}>   
            <Parent1 />
            <Parent2 />
        </MyContextStore.Provider>
    </div>
  )
}


// {counter: counter} => In ES5 compulsory
//  {counter} => In ES6 , the Key nd value have the same name, in that case we dont need to provide key nd value same name we just put it a single name
