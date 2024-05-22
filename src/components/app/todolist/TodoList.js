import React from 'react'
import Todo from '../../todo/Todo'
import "./todolist.css"

export default function TodoList({todos, fName}) {
    console.log(todos)
  return (
    <div>
      <ol>
        {todos.map((todo, id) => {
          return <Todo key={id} todo={todo} />
        })}
      </ol>
    </div>
  )
}
