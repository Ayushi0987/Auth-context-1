import React, {useEffect, useState} from 'react'

// function AnotherComponent(){
//     return(
//         <div>
//             I am present on the UI.
//         </div>
//     )    
// }
// export default function App() {
//     const [sample, setSample] = useState(true)
//   return (
//     <div>
//          {sample ? <AnotherComponent /> : null}
//          <button onClick={() => setSample(!sample)}>Alter state</button>
//     </div>
//   )
// }

function AnotherComponent(){

    const [name, setName] = useState('a');
    const [count, setCount] = useState(0);
    // UseEffect to solely handle the mount
    useEffect(() => {
        console.log('the another component got mounted');
    }, [])       // --> this [] second arguments is called dependency

    // UseEffect to solely handle the unmount 
    useEffect(() => {
        return () => {console.log('the another component got unmounted')}
    }, [])
    
    useEffect(() => {
        console.log('I am danger, dont use me')
    })

    useEffect(() => {
        console.log('I am a useEffect, which will get triggered only when name updates, FYI name even updates on mounted')
    }, [name])

    return(
        <div>
            I am present on the UI.
            the state itself <span>{name}</span>
            the state itself <span>{count}</span>
            <button 
              onClick={() => setName(name+ 'a')}>
                Increase name
            </button>
            <button 
              onClick={() => setCount(count+1)}>
                Increase count
            </button>
        </div>
    )    
}
export default function App() {
    const [sample, setSample] = useState(true);
  return (
    <div>
         {sample ? <AnotherComponent /> : null}
         <button onClick={() => setSample(!sample)}>Alter state</button>
    </div>
  )
}
