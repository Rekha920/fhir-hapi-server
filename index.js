const express=require('express');
const app=express();

require('dotenv').config();
const port=process.env.PORT || 3000;
const router=require('./route');

app.use(router);

app.listen(port,()=>{
    console.log(`server is running at port number ${port}`)
})