var express=require('express');
var bodyParse=require('body-parser');
var dishRoute=express();

dishRoute.use(bodyParse.json());

dishRoute.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.getHeader("Content-Type","text/plain");
    next(); 
})

.get((req,res,next)=>{ 
    res.end("<html><body><h1>All leader are send</h1></body></html>");
})

.post((req,res,next)=>{ 
    res.end("<html><body><h1>All leader are send"+req.body.name+" "+req.body.description+"</h1></body></html>");
})

.put((req,res,next)=>{ 
    res.statusCode=403;
    res.end("<html><body><h1>Put not supportable.</h1></body></html>");
})


.delete((req,res,next)=>{ 
    res.end("<html><body><h1>All leader are deleted.</h1></body></html>");
});
dishRoute.route('/:leaderId')
.get((req,res,next)=>{ 
    res.end("<html><body><h1>All leader of "+req.params.leaderId +" are send</h1></body></html>");
})

.post((req,res,next)=>{ 
    res.statusCode=403;
    res.end("<html><body><h1>Post operation not supported  leader of"+req.params.leaderId +"</h1></body></html>");
})

.put((req,res,next)=>{  
    res.write("updated sucessfully"+req.params.dishId );
    res.end('Name:'+req.body.name+"Description:"+req.body.description);
})


.delete((req,res,next)=>{ 
    res.end("<html><body><h1>All Dishes are deleted"+req.params.leaderId+"</h1></body></html>");
});

module.exports=dishRoute;