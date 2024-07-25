import React, {useState, useEffect} from 'react'

export default function App() {
    useEffect(()=> {
        const getTodoData = async () =>{
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if(!response.ok){
                    throw new Error("Something went wrong")
                }
                console.log(response)
                console.log(response.json)
                const todo = await response.json();
                console.log(todo)
                
            } catch (error) {
                console.error("Error fetching the api", error)
            }
        }
        getTodoData();
    })
  return (
    <div>
      
    </div>
  )
}
