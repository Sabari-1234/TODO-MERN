import React, { useContext } from 'react'
import { todoContext } from '../App'


function TextBox() {
 const {settodo,todo} = useContext(todoContext)
  return (
    <>
        <input type="text" className=' form-control w-25 ms-5 rounded-pill' value={todo} onChange={e=>settodo(e.target.value)} autoFocus />

    </>
  )
}

export default TextBox