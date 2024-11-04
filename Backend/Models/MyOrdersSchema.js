const mongoose = require('mongoose');

const Handlemyorders = new mongoose.Schema({
    orderedId:{
        type:Number,
        required :true
    },
    productId:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
}) 
module.exports=mongoose.model('ManageMyorders', Handlemyorders);