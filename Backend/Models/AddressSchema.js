const mongoose = require('mongoose');

const HandleAdress = new mongoose.Schema({
    area:{
        type:String,
        required :true
    },
    city:{
        type:String,
        required:true
    },
    selectStates:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }

}) 
module.exports=mongoose.model('ManageAddress', HandleAdress);