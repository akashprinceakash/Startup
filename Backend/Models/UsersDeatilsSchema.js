const mongoose=require('mongoose');
const UsersDetailsSchema = new mongoose.Schema({
    imagesid: {
        type : Number,
        ref:'UserModel',
        required:true
    },
    item1 : {
        type : String,
        required : true
    },
    item2 : {
        type : String,
        required : true
    },
    item3 : {
        type : String,
        required : true
    },
    item4 : {
        type : String,
        required : true
    },
    item5 : {
        type : String,
        required : true
    },
    item6 : {
        type : String,
        required : true
    },
    item7 : {
        type : String,
        required : true
    },
    item8 : {
        type : String,
        required : true
    },
    item9 : {
        type : String,
        required : true
    },
    item10 : {
        type : String,
        required : true
    },
    item11 : {
        type : String,
        required : true
    },
    item12 : {
        type : String,
        required : true
    },
})
module.exports = mongoose.model('UserDetails' , UsersDetailsSchema);