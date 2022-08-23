const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const dbconnect = process.env.DB_URI;
mongoose.connect(dbconnect);
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log('connected DB successfully')
})

const userRouter = require('./routes/user')
app.use('/users',userRouter)

app.listen(8000, () =>{
    console.log('server is running...!!')
})