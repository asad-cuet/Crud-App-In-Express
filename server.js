const express=require('express');
const morgan=require('morgan');


// create app
const app=express();
// log rerquest
app.use(morgan('tiny'));

//extracting all startup
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/template')(app);
require('./startup/config')();


// listen to port
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});