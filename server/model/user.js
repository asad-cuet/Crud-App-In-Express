const mongoose=require('mongoose');

//schema
const userSchema=new mongoose.Schema({
    name:{
        type:String, 
        required:true, 
        minlength: 5, 
        maxlength:255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5, 
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5, 
        maxlength:1024
    },
    city:{
        type:String, 
        required:true, 
        minlength: 5, 
        maxlength:255
    },
    country_id:{
        type:String, 
        required:true, 
        minlength: 5, 
        maxlength:255
    },
    isActive:{
        type:Boolean, 
        required:true, 
        minlength: 5, 
        maxlength:255
    }

});