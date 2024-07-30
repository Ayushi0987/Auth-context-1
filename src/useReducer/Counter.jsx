import React, {useReducer, useState} from 'react'
import reducer from './reducers/counterReducer';
import { INCREMENT, DECREMENT, RESET } from './reducers/counterReducer';

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);
return (
    <>
        Counter: {state}
        <div>
            <button onClick={()=>dispatch({type: INCREMENT, payload: 1})}>+</button>
            <button onClick={()=>dispatch({type: DECREMENT, payload: 1})}>-</button>
            <button onClick={()=>dispatch({type: RESET})}>reset</button>
        </div>
      
    </>
  )
}
