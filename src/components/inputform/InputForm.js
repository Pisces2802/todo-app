import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import "./inputform.css"

export default function InputForm() {
  return (
    <div>
      <form action="" className='form'>
        <label htmlFor="text"></label>
        
        <div className='input-container'>
        <input type="text" id="text" class="input" placeholder="enter yout task"/>
        <IoIosAddCircleOutline className='icon'/>
        </div>
 
      </form>
    </div>
  )
}
