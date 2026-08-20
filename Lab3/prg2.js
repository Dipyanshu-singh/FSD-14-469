import http from "http";

const server=http.createServer((req,res)=>{
    res.writeHead(404,{
        "content-type":"text/plain",
    });
    res.end("<h1>done this:::</h1>");

});

const PORT=4446;
server.listen(PORT,()=>{
    console.log("port 4446 on way...");
    
    
});