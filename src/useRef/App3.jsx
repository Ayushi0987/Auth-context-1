import React, { useEffect, useRef, useState } from 'react'

export default function App3() {
    const [state, setState] = useState(10);
    const ref1 = useRef();
    
    useEffect(()=>{
        ref1.current.focus();
    },[])
    
    function focus(){
        ref1.current.value = 'Focus';    
    }
    function blur(){
        ref1.current.value = 'Blur';
    }
  return (
    <>
        <div>App</div>
        <label htmlFor="">Ref label</label>
        <input type="text" ref={ref1} onFocus={focus} onBlur={blur} id='ref' />
        {/* <button onClick={}>Ref value change</button> */}
      
    </>
  )
}
