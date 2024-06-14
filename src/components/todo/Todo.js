import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdRadioButtonOff } from "react-icons/io";
import "./todo.css"

export default function Todo({ todo, setTodos, todos}) {
  

 const handleTodoDelete = (id) => {
   const newArr = todos.filter((todo) => todo.id !== id )
    console.log(newArr)
    // console.log('deleted')
    setTodos(newArr)
 }

  return (
    <div className='todo-list todo-list-container todo-list-wrapper'>
        {todo.isCompleted === true ? <FaRegCheckCircle className='btn-icon' /> : <IoMdRadioButtonOff className='btn-icon'/>  }
        <li className='todo-list-container-flex' key={todo.id}>
        {todo.title}
        <MdDeleteSweep  className='del-icon' onClick={() => handleTodoDelete(todo.id)}/>
        </li>  
    </div>
  )
}
