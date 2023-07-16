import React, { useEffect, useRef, useState} from 'react'
import Head from './component/Head'
import axios, { formToJSON } from 'axios'
import Body from './component/Body'
import './css/body.css'



export const todoContext=React.createContext()

function App() {
  const [todolist, settodolist] = useState()
  const [todo, settodo] = useState('')
  



  const inputRef = useRef(null)
  const [ch, setch] = useState([{checked:false}])
  const fn1=async()=>{
    try {
      const g=await axios.get('http://localhost/api/checks')
    setch(g.data)
    console.log(ch[0].checked)
    } catch (error) {
      console.log(error)
    }
    
  }

    const foc=()=>{
      const element=inputRef.current.getElementsByTagName('input')
      
      element[1].focus()
      
      
    }

    const chec= async (id,todo)=>{
      foc()
      const element=inputRef.current.getElementsByTagName('input')
      
      
      console.log(element.length)
      if (element[id+2].checked===true){
        
        
        
       
        try {
                
            
         
         const a= await axios.patch(`http://localhost/todos/${todo._id}`,{
              "checked":true,
              "color":"red",
              "decoration":"line-through"

          })

         console.log('hello')
          
          fetch1()
          foc()
    
      
      

      } catch (error) {
          console.log(error)
      }
      var count=0
      for (let index = 0; index < element.length-2; index++) {
        console.log(element[2+index])
        if(element[2+index].checked===true){
          count+=1
          console.log(count)
          console.log(element.length-2)
        }
        if(count===element.length-3){
          try {
            await axios.patch('http://localhost/api/checks',{
              "checked":true
            })
          
          console.log(ch[0].checked)
          } catch (error) {
            console.log(error)
          }
          fn1()
        }
        
      }

      }
      else{
        
        
        // element1[id].style.color='green'
        // element1[id].style.textDecoration='none'
        try {
                
            
         
          const a= await axios.patch(`http://localhost/todos/${todo._id}`,{
              "checked":false,
              "color":"green",
              "decoration":"none"
          })
          
          console.log('hi')
          
          fetch1()
          foc()
    
      
      

      } catch (error) {
          console.log(error)
      }

      try {
        await axios.patch('http://localhost/api/checks',{
          "checked":false
        })
      
      console.log(ch[0].checked)
      } catch (error) {
        console.log(error)
      }
      fn1()
      }
    }
    
    


    const fetch1= async ()=>{
      try {
        const get=await axios.get('http://localhost/todos')
        
        
        
        settodolist(get.data)
      } catch (error) {
        console.log(error)
      }
      
    }
    useEffect(() => {
      fetch1()
      
    }, [])
  
    
  return (
    <div className=' ' ref={inputRef}>
     
     <todoContext.Provider value={{fetch1,foc,settodolist,settodo,todo,fn1,ch}}>
          <Head todo={todo} settodo={settodo}/>
          <Body todolist={todolist}  chec={chec} />
     </todoContext.Provider>

     
      
    
     
      
      
    </div>
  )
}

export default App