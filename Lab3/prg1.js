import http from "http";

const server=http.createServer((req,res)=>{
    console.log("welcome to node JS");
    console.log(req.url);
    
    console.log("req method");
    console.log(req.method);
    console.log("req header");
    console.log(req.headers);
    console.log("socket info");
    // console.log(req.socket);
    console.log(req.headers.host);
    res.end("hello")
});

const PORT=4445;
server.listen(PORT,()=>{
    console.log("runnnin");
    
    
});