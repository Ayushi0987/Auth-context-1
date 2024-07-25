import React from 'react'
import TodoItem from './TodoItem'


export default function TodoDisplay({todoList, toggleCompleted, deteleTodo}) {

  return (
    <>
      {
         todoList.map((todo)=>{
            return <TodoItem key = {todo.id} todo = {todo} toggleCompleted = {toggleCompleted} deteleTodo={deteleTodo}/>
         })

      }
      
    </>
  )
}
