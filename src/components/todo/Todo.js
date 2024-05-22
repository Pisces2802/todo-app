import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
import "./todo.css"

export default function Todo({key, todo}) {
  return (
        <li className='todo-list todo-list-container todo-list-container-flex' key={key}>
        {todo.title}
        <MdDeleteSweep  className='del-icon'/>
     </li>
    )
}
