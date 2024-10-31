const mongoose=require('mongoose');
const Userschema=new mongoose.Schema({
    name:{
       type: String,
       required:true
    },
    content:{
        type: String,
        required:true
     },
    imageurl:{
        type: String,
        required:true
     },
     imageID:{
       type:Number,  
      required:true,
}
})
module.exports=mongoose.model("UserModel",Userschema);
