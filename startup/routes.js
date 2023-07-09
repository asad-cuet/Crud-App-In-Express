const express=require('express');
const bodyparser=require('body-parser');


module.exports=function(app)
{
    //***for post,put request
        //parse request to body parser, use
        app.use(bodyparser.urlencoded({extended:true}));
        //***for post,put request
        app.use(express.json());  

    //routes
        app.use('/users',require('../server/routes/users'));


}