const express=require('express');
const route=express.Router();
const UserService=require('../services/userService');


//tamplate engine
route.get('/',UserService.index);
route.get('/create',UserService.create);
route.post('/',UserService.store);
route.get('/edit/:id',UserService.edit);
route.post('/update/:id',UserService.update);
route.get('/delete/:id',UserService.delete);

module.exports=route
