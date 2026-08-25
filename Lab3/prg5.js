import http from "http";

const server=http.createServer((req,res)=>{
    res.write()
        res.end(JSON.stringify(product));

});

server.listen(3000,()=>console.log('server running...'));