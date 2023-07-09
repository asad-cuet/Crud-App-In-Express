const express=require('express');
const route=express.Router();
const UserService=require('../services/userService');
const UserController=require('../controller/userController');


//tamplate engine
route.get('/',UserService.index);
route.get('/create',UserService.create);
route.get('/edit',UserService.create);


//api
route.post('/',UserController.store);
route.get('/:id',UserController.show);
route.post('/update/:id',UserController.update);
route.get('/delete/:id',UserController.destroy);




module.exports=route
