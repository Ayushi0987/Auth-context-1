import React, { useState } from 'react'

export default function GrandChild1({counter}) {
    
  return (
    <div style={{border: '3px solid black'}}>
      <div>
            Display Counter : {counter}      
      </div>
      {/* <button onClick={() => setcounter(counter+1)}>Add</button> */}
    </div>

  )
}
