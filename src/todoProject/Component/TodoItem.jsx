import React from 'react'
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

export default function TodoItem({todo, toggleCompleted, deteleTodo}) {
  return (
    <div style={{display: "flex", justifyContent: 'space-between'}}>
      <div style={todo.isCompleted ? {textDecoration: "line-through"} : {}}> {todo.value}</div>
         <div 
             className='todoActions'
             style={{display: "flex", gap: "20px"}}>
             <span onClick={()=>toggleCompleted(todo.id)} className='cursorPointer'><FaCheck /></span>
             <span onClick={()=>deteleTodo(todo.id)} className='cursorPointer'><ImCross /></span>
         </div>
      
    </div>
    
  )
}
