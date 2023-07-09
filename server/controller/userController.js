const {User,validateUser}=require('../model/user');
const lodash=require('lodash');  
const bcrypt=require('bcrypt');  

exports.store=async(req,res)=>{
    const {error}=validateUser(req.body);
    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }

    const user= new User(lodash.pick(req.body,['name','email','password','city','country_id','isActive']));
    const salt=await bcrypt.genSalt(10);
    const hashed= await bcrypt.hash(user.password,salt);
    user.password=hashed;
    await user.save();

    return res.status(200).send(lodash.pick(user,['_id','name','email','city','country_id','isActive']));
}

exports.show=async(req,res)=>{
    const user=await User.findById(req.params.id).select('-password');
    if(user)
    {
        return res.send(user);
    }
    else
    {
        return res.status(404).send("User not found");
    }
    
}
exports.update=async(req,res)=>{
    const user=await User.findById(req.params.id);
    if(user)
    {
        if(req.body)
        {
            user.name=req.body.name;
            user.email=req.body.email;
            user.city=req.body.city;
            user.country_id=req.body.country_id;
            user.isActive=req.body.isActive;
    
            const salt=await bcrypt.genSalt(10);
            const hashed= await bcrypt.hash(user.password,salt);
            user.password=hashed;
    
            await user.save();
            return res.send(lodash.pick(user,['_id','name','email','city','country_id','isActive']));
        }
        else
        {
            return res.status(400).send("Bad request");
        }

    }
    else
    {
        return res.status(404).send("User not found");
    }
}
exports.destroy=async(req,res)=>{
    const user=await User.findById(req.params.id);

    if(user)
    {
        await User.deleteOne({_id:req.params.id});
        return res.status(202).send("User deleted successfully");
    }
    else
    {
        return res.status(404).send("User not found");
    }
}