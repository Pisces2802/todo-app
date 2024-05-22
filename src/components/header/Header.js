import React from 'react'
import "./header.css"

export default function Header(props) {
  const {completed, total} = props
  return (
    <section className='header-section'>
      <div className='header-container'>
        <h2 className='heading'>Tasks Done</h2>
        <p>{completed}/{total}</p>
      </div>
    </section>
  )
}
