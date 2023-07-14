const express=require('express');
const path=require('path');


module.exports=function(app)
{
    //set assets file
    app.use('/css',express.static(path.resolve(path.dirname('assets/css'))));
    app.use('/img',express.static(path.resolve(path.dirname('assets/img'))));
    app.use('/js',express.static(path.resolve(path.dirname('assets/js'))));   
    
    //set view engine
    app.set('view engine','ejs');
    // app.set('views',path.resolve(__dirname,'views2'));  //if you want to customize views path


}