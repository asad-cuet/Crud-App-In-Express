const axios=require('axios');
const {User}=require('../model/user');

exports.index=(req,res)=>{
    axios.get('http://127.0.0.1:3000/api/users')
    .then(function(response) {
        console.log(response);
        res.render('users/index',{users:response.data});
    }).
    catch(err=>{
        res.send(err);
    })
}


exports.create=(req,res)=>{
    res.render('users/create');
}

exports.store=(req,res)=>{
    // return res.send(req.body);
    if(req.body.isActive && req.body.isActive==1)
    {
        req.body.isActive=true;
    }
    else
    {
        req.body.isActive=false;
    }

    axios.post('http://127.0.0.1:3000/api/users',req.body)
    .then(function(response){
        res.redirect('/users');
    })
    .catch(err=>{
        return res.send(err.message);
        // res.redirect('/users/create');
    })
}

exports.edit=async(req,res)=>{
    const user=await User.findById(req.params.id).select('-password');
    if(user)
    {
        res.render('users/edit',{user:user});
    }
    else
    {
        return res.status(404).send("User not found");
    }
}

exports.update=async(req,res)=>{
    
    const user=await User.findById(req.params.id);
    if(req.body.isActive && req.body.isActive==1)
    {
        req.body.isActive=true;
    }
    else
    {
        req.body.isActive=false;
    }

    // return res.send(req.body);
    // return res.send(user);

    axios.post('http://127.0.0.1:3000/api/users/update/'+req.params.id,req.body)
    .then(function(response){
        res.redirect('/users');
    })
    .catch(err=>{
        return res.send(err);
    })
}

exports.delete=(req,res)=>{
    axios.get('http://127.0.0.1:3000/api/users/delete/'+req.params.id)
    .then(function(response){
        res.redirect('/users');
    })
    .catch(err=>{
        return res.send(err);
    })
}

