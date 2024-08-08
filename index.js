const cors= require('cors')
const express=require('express')
require('dotenv').config()
require('./DataBase/Connection')
const router= require('./Routes/routes')


const app=express()

const PORT=5000

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT,()=>{
    console.log("Server Is Running at ",PORT);
    

})