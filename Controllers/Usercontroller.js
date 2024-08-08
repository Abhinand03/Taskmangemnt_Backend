
const user=require('../Models/usermodel')
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    const {username,email,password}=req.body
    try{

        const existinguser= await user.findOne({email})
        if(existinguser){
           res.status(401).json("User Already exits")
           
        }
        else{
           const newUser= new user({
               username,email,password
           })
           await newUser.save()
           res.status(200).json(newUser)
           
        }
    }
    catch(err){
        console.log(err);
        
    }

}

exports.login=async(req,res)=>{

    const {email,passaword}=req.body
    console.log(req.body);
    
    try{
        const existingUser = await user.findOne({email,passaword})
        if(existingUser){
            console.log(existingUser);
            
            
            const token=jwt.sign({email:existingUser.email,username:existingUser.username,userId:existingUser._id},process.env.secrect_key)
            const rest={token,userId:existingUser._id,userDetails:existingUser}
            console.log(token);
            
            res.status(200).json(rest)
        }
        else{
            res.status(406).json("inavaild username/password")
        }
    }
    catch(err){
        console.log(err)
        res.status(401).json(err)
    }
}


    