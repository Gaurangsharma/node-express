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
    res.end("<html><body><h1>All Promotion are send</h1></body></html>");
})

.post((req,res,next)=>{ 
    res.end("<html><body><h1>All Promotion are send"+req.body.name+" "+req.body.description+"</h1></body></html>");
})

.put((req,res,next)=>{ 
    res.statusCode=403;
    res.end("<html><body><h1>Put not supportable.</h1></body></html>");
})


.delete((req,res,next)=>{ 
    res.end("<html><body><h1>All Promotion are deleted.</h1></body></html>");
});
dishRoute.route('/:promoId')
.get((req,res,next)=>{ 
    res.end("<html><body><h1>All Promotion of "+req.params.promoId +" are send</h1></body></html>");
})

.post((req,res,next)=>{ 
    res.statusCode=403;
    res.end("<html><body><h1>Post operation not supported  Promotion of"+req.params.promoId +"</h1></body></html>");
})

.put((req,res,next)=>{  
    res.write("updated sucessfully"+req.params.promoId );
    res.end('Name:'+req.body.name+"Description:"+req.body.description);
})


.delete((req,res,next)=>{ 
    res.end("<html><body><h1>All Promotion are deleted"+req.params.promoId+"</h1></body></html>");
});

module.exports=dishRoute;