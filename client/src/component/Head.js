import React, { useContext, useEffect, useRef, useState } from 'react'
import TextBox from './TextBox'
import Button from './Button'
import axios from 'axios'
import { todoContext } from '../App'


function Head() {
const checkRef = useRef(null)



const {fetch1,foc,fn1,ch} = useContext(todoContext)


useEffect(() => {
 fn1()
}, [])

const fn= async()=>{
  const element=checkRef.current
  console.log(element)

  if(element.checked===true){
    try {
      await axios.patch('http://localhost/api/checks',{
        "checked":true
      })
    
    console.log(ch[0].checked)
    } catch (error) {
      console.log(error)
    }

    try {
                
            
         
      await axios.patch(`http://localhost/api/todos`,{
          "checked":true,
          "color":"red",
          "decoration":"line-through"

      })

     
      
      fetch1()
      foc()

  
  

  } catch (error) {
      console.log(error)
  }
  }

  else{
    try {
      await axios.patch('http://localhost/api/checks',{
        "checked":false
      })
    
    console.log(ch[0].checked)
    } catch (error) {
      console.log(error)
    }

    try {
                
            
         
      await axios.patch(`http://localhost/api/todos`,{
         "checked":false,
         "color":"green",
         "decoration":"none"
     })
     
    
     
     fetch1()
     foc()

 
 

 } catch (error) {
     console.log(error)
 }
  }
  
  fn1()
}
  return (

    <div>
        <div className=' d-flex   justify-content-between mt-5 pe-5'>
          <input type="checkbox" className=' form-check-input ms-5' onChange={fn} ref={checkRef} checked={ch[0].checked}/>
        <TextBox/>
        <Button name='Add' btn={'primary'}/>
        <Button name='Delete All' btn={'warning'}/>
        <Button name='Delete Completed' btn={'warning'}/>
        <Button name='Delete Incompleted' btn={'warning'}/>
         </div>
         <div className='  container  mt-5 d-flex justify-content-between  pe-5 mb-5 '>
        <Button name='All' btn={'dark'}/>
        <Button name='Completed' btn={'dark'}/>
        <Button name='Incompleted' btn={'dark'}/>
        </div>
    </div>
    
  )
}

export default Head