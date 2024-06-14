import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import "./inputform.css"

export default function InputForm({setTodos}) {
const [value, setValue] = useState("")


//change inputs value and store in local state
function handleChange(e) {
  setValue(e.target.value)
  console.log(value)
}

//submit input value
function handleSubmit(e) {
  e.preventDefault()
  if(value === "") {
    return
  }
  setTodos((previousTodos) => {
    return [...previousTodos, {
      id: Math.random + 1,
      title: value,
      isCompleted: false  
    }]
  } )
  setValue("")
}


  return (
    <div>
      <form action="" className='form'>
        <label htmlFor="text"></label>
        
        <div className='input-container'>
        <input type="text" id="text" class="input" placeholder="enter yout task" value={value} onChange={handleChange}/>
        <IoIosAddCircleOutline className='icon' style={{color: !value && "grey" }} onClick={handleSubmit}/>
        </div>
 
      </form>
    </div>
  )
}
