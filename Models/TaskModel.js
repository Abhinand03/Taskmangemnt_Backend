const mongoose=require('mongoose')

const taskSchema= new mongoose.Schema({
    heading:{
        type:String
    },
    message:{
        type:String
    },
    deadline:{
        type:String
    },
    status:{
        type:String
    },
     userId:{
            type:String
        }
    
})

const task= mongoose.model('task',taskSchema)

module.exports=task