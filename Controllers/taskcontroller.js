const task= require('../Models/TaskModel')

exports.add=async(req,res)=>{
    const {heading,message,deadline,status,userId}=req.body
    console.log('user==',userId);
    
    try{
        const newtask= new task({
            heading,message,deadline,status,userId
        })
         await newtask.save()
         res.status(200).json(newtask)
    }
    
    catch(err){
        console.log(err);
    }

}
exports.getTask= async(req,res)=>{
    const {userId}=req.params
    const user=JSON.parse(userId)

    const query = { userId:user.userId  };

    if (user.search) {
        query.message = { $regex: user.search, $options: 'i' }; 
    }
    console.log(query)
    try{

        const result = await task.find(query)
       res.status(200).json(result)
    }
    catch(err){
        console.log(err);
        
    }
}

exports.edittask=async(req,res)=>{
    const {task_id,heading,message,status,deadline}=req.body
    try{

        const result=await task.findByIdAndUpdate({_id:task_id},{heading,message,status,deadline},{new:true})
        await result.save()
        res.status(200).json(result)
    }
    catch(err){
        console.log(err);
        
    }


}
exports.delttask=async(req,res)=>{
    const {task_id}=req.params
    
    try{
        const result= await task.findByIdAndDelete({_id:task_id})
        res.status(200).json(result)

    }
    catch(err){
        console.log(err);
        
    }

}

