const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const connectDB=require('./server/database/connection');


// create app
const app=express();


// log rerquest
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//config env
dotenv.config({path:"config.env"});


//set view engine
app.set('view engine','ejs');
// app.set('views',path.resolve(__dirname,'views2'));  //if you want to customize views path


// load asstes
app.use('/css',express.static(path.resolve(path.dirname('assets/css'))));
app.use('/img',express.static(path.resolve(path.dirname('assets/img'))));
app.use('/js',express.static(path.resolve(path.dirname('assets/js'))));


//parse request to body parser, use
app.use(bodyparser.urlencoded({extended:true}));
//***for post,put request
app.use(express.json());  


//routes
app.use('/users',require('./server/routes/users'));



// listen to port
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});