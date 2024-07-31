import React, { useState } from 'react'
import Child from './Child'

export default function App() {
    const [sampleState, setSampleState] = useState(0);
  return (
    <>  
        {sampleState}
        <button onClick={()=>setSampleState(sampleState+1)}>Update the value</button>
        <Child sampleState={sampleState}/>
      
    </>
  )
}
