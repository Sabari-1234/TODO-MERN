const mongoose=require('mongoose')

const todoapp= new mongoose.Schema({
    todo:String,
    checked:Boolean,
    color:String,
    decoration:String
})

const Todo=mongoose.model('Todo',todoapp)

module.exports=Todo