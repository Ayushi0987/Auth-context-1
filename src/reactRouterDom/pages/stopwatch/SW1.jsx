import React, { useEffect, useState } from 'react'
let timer;
export default function SW1() {
  const [count, setCount] = useState(10);
  // useEffect(()=>{
  //   if(count !== 0){
  //     setTimeout(() =>{
  //       setCount((prev) => prev-1)
  //     }, 1000)
  //   }
  // }, [count])
  useEffect(()=>{
     timer = setInterval(()=>{
      setCount((prev)=> prev-1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  useEffect(()=>{
     if(count === 0){
      clearInterval(timer)
     }
  }, [count])
  return (
    <div>
        {count}
    </div>
  )
}
