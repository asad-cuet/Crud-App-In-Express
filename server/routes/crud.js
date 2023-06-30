const express=require('express');
const route=express.Router();
const CrudService=require('../services/crudService');

route.get('/',CrudService.index);

route.get('/create',CrudService.create);

module.exports=route
