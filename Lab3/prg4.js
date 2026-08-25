import http from "http";

const server=http.createServer((req,res)=>{
    if(req.url=='/product'){
        res.end('<h1>Product Page');
    }
    else if(req.url=='/cart'){
        res.end('<h1>Cart Page');
    }
    else if(req.url=='/checkout'){
        res.end('<h1>Checkout Page');
    }
    else{
        res.end('<h1>Error:404, Not found;;;')
    }

});

server.listen(3000,()=>console.log('server running...'));