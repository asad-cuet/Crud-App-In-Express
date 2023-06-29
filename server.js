const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');


// create app
const app=express();


// log rerquest
app.use(morgan('tiny'));


//config env
dotenv.config({path:"config.env"});

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname,'views2'));  //if you want to customize views path


// load asstes
app.use('/css',express.static(path.resolve(path.dirname('assets/css'))));
app.use('/img',express.static(path.resolve(path.dirname('assets/img'))));
app.use('/js',express.static(path.resolve(path.dirname('assets/js'))));


//routes
app.get('/',(req,res)=>{
    res.render('index');
});



// listen to port
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});