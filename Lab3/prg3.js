import http from "http";

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('<h1>Homepage');
    }
    else if(req.url=='/about'){
        res.end('<h1>About us');
    }
    else if(req.url=='/product'){
        res.end(`<h1>Mobile</h1>
                <h2>Price:25000</h2>
                <a href='#'> Buy now</a>
                `);
    }
    else{
        res.statusCode=404;
        res.end(`
            <h1>404, Not found</h1>
            <p>page not found</p>
            <a href='/'>Home</a>
            `);
    }

});

const PORT=4447;
server.listen(PORT,()=>{
    console.log("port 4447 ongooing...");
    
    
});