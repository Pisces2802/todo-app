import React from 'react'
import Todo from '../todo/Todo'
import "./todolist.css"

export default function TodoList({todos, setTodos}) {
  
  return (
    <div>
      <ol>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos}/>
        })}
      </ol>
    </div>
  )
}
