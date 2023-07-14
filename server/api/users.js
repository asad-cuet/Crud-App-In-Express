const express=require('express');
const route=express.Router();
const UserController=require('../controller/userController');

//api
route.get('/',UserController.index);
route.post('/',UserController.store);
route.get('/:id',UserController.show);
route.post('/update/:id',UserController.update);
route.get('/delete/:id',UserController.destroy);

module.exports=route