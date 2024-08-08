const jwt = require('jsonwebtoken')

const jwtFunction = (req, res, next) => {
     console.log("inside jwt");

    try {
    const token = req.headers.authorization.split(' ')[1]
        if (token) {
            
            const result = jwt.verify(token, process.env.secrect_key)
            req.payload=result.userId
            req.userId=result.userId
            next()
        }
        else{
            res.status(406).json("Please login ") 
            console.log("sds");
        }
    }
    catch(err){
        res.status(406).json("Please login" )
    }

   

}

module.exports=jwtFunction