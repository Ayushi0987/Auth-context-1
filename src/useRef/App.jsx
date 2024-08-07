import React, { useRef, useState } from 'react'

export default function App() {
    const [state, setState] = useState(10);
    const ref1 = useRef();
    const ref2 = useRef();
    console.log(ref1.current);
    console.log(ref2.current);
    ref1.current = 10;
    ref2.current = 20;

    function updateRefs(){
        ref1.current = 'I am changed';
        ref2.current = "Even I am changed";
    }
  return (
    <>
        <div>App</div>
        <button onClick={()=>setState(state+1)}>Update state</button>
        <button onClick={updateRefs}>Update Refs</button>
      
    </>
  )
}
