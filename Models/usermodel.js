const mongoose= require('mongoose')

const userschem= new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },

})

const user= mongoose.model('users',userschem)

module.exports=user