const axios=require('axios');

exports.index=(req,res)=>{
    axios.get('http://127.0.0.1:3000/users')
    res.render('index');
}


exports.create=(req,res)=>{
    res.render('create');
}