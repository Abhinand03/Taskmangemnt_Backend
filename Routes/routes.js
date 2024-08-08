const express=require('express')
const taskcontroller=require('../Controllers/taskcontroller')
const usercontroller=require('../Controllers/Usercontroller')
const jwt= require('../jwt/jwt')




const router= express.Router()

//task routes
router.post('/addtask',jwt,taskcontroller.add)
router.get('/gettask/:userId',jwt,taskcontroller.getTask)
router.put('/update',taskcontroller.edittask)
router.delete('/delt/:task_id',taskcontroller.delttask)


//user routes
router.post('/reg',usercontroller.register)
router.post('/log',usercontroller.login)



module.exports=router