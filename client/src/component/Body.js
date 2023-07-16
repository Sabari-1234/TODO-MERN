import React, { useRef } from 'react'
import Button from './Button'


function Body({todolist,chec}) {
  

 
  const buttonRef = useRef(null)
   const but=(name,id)=>{
    const button =buttonRef.current.querySelectorAll('.Edit')
    const button1 =buttonRef.current.querySelectorAll('.Save')
    if (name==='Edit')
    {
      
       button[id].style.display='none'
      button1[id].style.display='inline-block'
      
      
    }
        
    else{
      button[id].style.display='inline-block'
      button1[id].style.display='none'
    }
       
   }

   
  return (
    <div className=' container  w-75'>
        <ul ref={buttonRef}>
        {
           todolist === undefined?null: todolist.map((todo1,id)=><div className=' d-flex justify-content-between mt-3 me-5' key={todo1._id} 
           
           
           ><input type='checkbox' className=' form-check-input ' onChange={()=>chec(id,todo1)} checked={todo1.checked}/><li  className=' list-unstyled  fw-bold ' style={{color:`${todo1.color}`,fontSize:'20px',textDecoration:`${todo1.decoration}`}}>{todo1.todo}</li><div><Button todo1={todo1._id} name={'Delete'}  btn={'danger'} /> <Button todo1={todo1} name={'Edit'}  btn={'secondary'} but={but} id={id} /><Button todo1={todo1} name={'Save'}  btn={'success'} but={but} id={id} visibility={'none'} /> </div></div>)
        }
        </ul>
       
    </div>
  )
}

export default Body