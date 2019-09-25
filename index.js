const express=require('express');
const http=require('http');
const hostname='localhost';
const port=3000;

const app=express();

app.use((req,res,next)=>{
    console.log(req.header);
    res.getHeader("Content-Type","text/html");
    res.end("<html><body><h1>hello Express</h1></body><html>");
}) 

const server=http.createServer(app).listen(port,hostname,()=>{
    console.log("Server Start");
})