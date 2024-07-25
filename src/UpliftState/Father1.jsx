import React from 'react'
import Child1 from './Child1'

export default function Father1({counter}) {
  return (
    <div>
            <Child1 counter={counter}></Child1>
    </div>
  )
}
