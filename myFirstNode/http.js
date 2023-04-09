var http = require('http');
http.createServer((req,res)=>{
res.write("HTTP server is created");
res.end();
}).listen(5050,()=>{
    console.log("HTTP Server is started")
})