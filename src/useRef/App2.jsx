import React, { useRef, useState } from 'react'

export default function App2() {
    const [state, setState] = useState(10);
    const ref1 = useRef();
    const ref2 = useRef();

    function refValueDisplay(){
        ref1.current.value = 'I am changed'
        ref2.current.value = 'Even i am changed'
    }
    
  return (
    <>
        <div>App</div>
        <label htmlFor="">Ref 1 label</label>
        <input type="text" ref={ref1} id='one' />

        <label htmlFor="">Ref 2 label</label>
        <input type="text" ref={ref2} id='two' />

        <button onClick={refValueDisplay}>Ref value display </button>      
    </>
  )
}
