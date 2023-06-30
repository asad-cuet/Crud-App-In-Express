const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:"config.env"});

const connectDB=async()=>{
    try {
        const mongoURL=process.env.MONGO_URL || 'mongodb://localhost/crud_app'
        const con= await mongoose.connect(mongoURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log(`Mongo Connected:${con.connection.host}`);
    }
    catch(err)
    {
         console.log(err);
         process.exit(1);
    }
}

module.exports=connectDB