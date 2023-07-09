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

    res.status(200).send(lodash.pick(user,['_id','name','email']));
}

exports.show=(req,res)=>{
    res.send('showing');
}
exports.update=(req,res)=>{
    res.send('updating');
}
exports.destroy=(req,res)=>{
    res.send('destroying');
}