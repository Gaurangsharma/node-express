const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const dishRoute=require('./routes/dishRoute');
const promoRouter=require('./routes/promoRouter');
const leaderRouter=require('./routes/leaderRouter');
const hostname='localhost';
const port=3000;

const app=express();

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());

app.use('/dishes',dishRoute);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);


app.use((req,res,next)=>{ 
    res.getHeader("Content-Type","text/html");
    res.end("<html><body><h1>hello Express</h1></body><html>");
}) 

const server=http.createServer(app).listen(port,hostname,()=>{
    console.log("Server Start");
})