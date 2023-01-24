const express=require('express');
const mongoose=require('mongoose');
// const dotenv=require('dotenv');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/user');
const postRoute=require('./routes/post');
const catRoute=require('./routes/category');
const messageRoute=require('./routes/message');
// const multer=require('multer');
const app=express();
// dotenv.config();6
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://remy:remier@cluster0.dis6pun.mongodb.net/?retryWrites=true&w=majority')
.then(console.log('Connected to MongoDb'))
.catch((error)=>console.log(error))

app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/categories',catRoute)
app.use('/api/messages',messageRoute)

app.listen("3000",()=>{
    console.log('port is on');
})