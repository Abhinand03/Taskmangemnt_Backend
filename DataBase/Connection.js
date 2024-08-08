const mongoose= require('mongoose')

const DB=process.env.DATA_BASE

mongoose.connect(DB,{}).then(()=>{console.log("Mongodb Connection Successfull")
}).catch((err)=>{console.log("Connection Faild",err);
})

