
require('dotenv').config()
require('./database/connect')



const express=require('express')
const app=express()
const Todo=require('./database/model/todo')

const Check=require('./database/model/check')

const cors=require('cors')
app.use(express.json())
app.use(cors())


app.post('/todos',async (req,res)=>{
    try {
      const todo=await Todo.create(req.body)

      res.status(200).send(todo)

    } catch (error) {
        res.status(404).send(error)
    }
})


app.get('/todos',async (req,res)=>{
  try {
    const todo=await Todo.find({})
    res.status(200).send(todo)

  } catch (error) {
      res.status(404).send(error)
  }
})

app.delete('/todos/:id',async (req,res)=>{
  try {
    const del= await Todo.findOneAndRemove({_id:req.params.id})
    res.status(200).send(del)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.patch('/todos/:id',async (req,res)=>{
  try {
    const del= await Todo.updateOne({_id:req.params.id},req.body)
    res.status(200).send(del)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.patch('/api/todos',async (req,res)=>{
  try {
    const del= await Todo.updateMany({},req.body)
    res.status(200).send(del)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.delete('/todos',async(req,res)=>{
  try {
    const del=await Todo.deleteMany({})
    res.status(200).send(del)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.get('/todos/:color',async (req,res)=>{
  try {
    const todo=await Todo.find({color:req.params.color})
    res.status(200).send(todo)

  } catch (error) {
      res.status(404).send(error)
  }
})

app.delete('/todos/del/:color',async(req,res)=>{
  try {
    const del=await Todo.deleteMany({color:req.params.color})
    res.status(200).send(del)
  } catch (error) {
    res.status(400).send(error)
  }
})


// app.post('/api/checks', async (req,res)=>{
//   try {
//     const pos=await Check.create(req.body)
//     res.status(200).send(pos)
//   } catch (error) {
//     res.status(400).send(error)
//   }

//})
  app.get('/api/checks',async (req,res)=>{
    try {
      const g=await Check.find({})
      res.status(200).send(g)
    } catch (error) {
      res.status(400).send(error)
    }
  
  
   
 
})

app.patch('/api/checks',async (req,res)=>{
  try {
    const g=await Check.updateMany({},req.body)
    res.status(200).send(g)
  } catch (error) {
    res.status(400).send(error)
  }})


app.listen(80,()=>console.log('server at 80'))