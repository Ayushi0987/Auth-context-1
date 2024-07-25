import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({addTodo}) {
    const [todoString, setTodoString] = useState('');
    function handleAddTodo(e){
        e.preventDefault();
        if(todoString === ""){
            return alert("Todo cannot be empty")
        }

        const todo = {
          value: todoString,
          isCompleted: false,
          id: uuidv4()
      }
       addTodo(todo)
       setTodoString("");
    }
    

  return (
    <div>
      <form action="">
        <input type="text"
         value={todoString} 
         onChange={(e) => setTodoString(e.target.value)}
         placeholder='Add a new todo'
        />
        <button onClick={handleAddTodo} type='submit'>Add Todo</button>
      </form>
    </div>
  )
}
