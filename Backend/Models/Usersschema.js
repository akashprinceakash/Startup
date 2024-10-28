const mongoose=require('mongoose');
const Userschema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
module.exports=mongoose.model("UserModel",Userschema);
