import http from "http";

const server = http.createServer();
server.on('request',(req,res)=>{
    res.write("welcome to server side programming");
    res.write("nodemon tracking file");
    res.end("<h2> Welcome to serverside </h2>");
});


server.listen(3000,()=>{
    console.log("server running");
});
