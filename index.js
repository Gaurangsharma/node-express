const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const hostname='localhost';
const port=3000;

const app=express();

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());

app.all('/dish',(req,res,next)=>{
    res.statusCode=200;
    res.getHeader("Content-Type","text/plain");
    next(); 
})

app.get('/dish',(req,res,next)=>{ 
    res.end("<html><body><h1>All Dishes are send</h1></body></html>");
})

app.post('/dish',(req,res,next)=>{ 
    res.end("<html><body><h1>All Dishes are send"+req.body.name+" "+req.body.description+"</h1></body></html>");
})

app.put('/dish',(req,res,next)=>{ 
    res.statusCode=403;
    res.end("<html><body><h1>Put not supportable.</h1></body></html>");
})


app.delete('/dish',(req,res,next)=>{ 
    res.end("<html><body><h1>All Dishes are deleted.</h1></body></html>");
})

app.get('/dish/:dishId',(req,res,next)=>{ 
    res.end("<html><body><h1>All Dishes of "+req.params.dishId +" are send</h1></body></html>");
})

app.post('/dish/:dishId',(req,res,next)=>{ 
    res.statusCode=403;
    res.end("<html><body><h1>Post operation not supported  Dishes of"+req.params.dishId +"</h1></body></html>");
})

app.put('/dish/:dishId',(req,res,next)=>{  
    res.write("updated sucessfully"+req.params.dishId );
    res.end('Name:'+req.body.name+"Description:"+req.body.description);
})


app.delete('/dish/:dishId',(req,res,next)=>{ 
    res.end("<html><body><h1>All Dishes are deleted"+req.params.dishId+"</h1></body></html>");
})




app.use((req,res,next)=>{ 
    res.getHeader("Content-Type","text/html");
    res.end("<html><body><h1>hello Express</h1></body><html>");
}) 

const server=http.createServer(app).listen(port,hostname,()=>{
    console.log("Server Start");
})