const express=require('express');
const route=express.Router();
const UserService=require('../services/userService');
const UserController=require('../controller/userController');


//tamplate engine
route.get('/all',UserService.index);
route.get('/create',UserService.create);
route.get('/edit',UserService.create);


//api
route.get('/',UserController.index);
route.post('/',UserController.store);
route.get('/:id',UserController.show);
route.put('/update/:id',UserController.update);
route.get('/delete/:id',UserController.destroy);




module.exports=route
