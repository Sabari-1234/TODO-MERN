const mongoose=require('mongoose')

const checker=new mongoose.Schema({
    checked:Boolean
})

const Check=mongoose.model('Check',checker)

module.exports=Check