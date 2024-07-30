import React, {useState} from 'react'
import MyContextStore from './Context'

export default function Provider1(children) {
    const [counter, setCounter] = useState(0);

  return (
    <MyContextStore.Provider value={{
        counter: counter,
        increment: (val) => setCounter(counter+val)
    }}> 
        {children}
    </MyContextStore.Provider>  
  )
}
