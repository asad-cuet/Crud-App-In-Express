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
        maxlength: 255
    },
    password: {
        type: String,
        minlength: 5, 
        maxlength:1024
    },
    city:{
        type:String, 
        required:true
    },
    country_id:{
        type:Number, 
        required:true,
    },
    isActive:{
        type:Boolean, 
        required:true
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
        password: Joi.string().min(5).max(255),
        city: Joi.string().required(),
        country_id: Joi.number().required(),
        isActive: Joi.boolean().required(),
    });

    return schema.validate(user);
}

exports.User=User
exports.validateUser=validateUser