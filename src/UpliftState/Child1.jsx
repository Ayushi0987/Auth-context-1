import React from 'react'
import GrandChild1 from './GrandChild1'

export default function Child1({counter}) {
  return (
    <div>
            <GrandChild1 counter={counter}></GrandChild1>
    </div>
  )
}
