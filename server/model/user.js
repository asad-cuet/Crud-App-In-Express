const mongoose=require('mongoose');
const Joi=require('joi');
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


//model
const User=mongoose.model('User',userSchema);


//Validate Input User Data
function validateUser(user)
{
    const schema= Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(5).max(255).required(),
        city: Joi.string().required(),
        country_id: Joi.string().required(),
        isActive: Joi.boolean().required(),
    });

    return schema.validate(user);
}

exports.User=User
exports.validateUser=validateUser