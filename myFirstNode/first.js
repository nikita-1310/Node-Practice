var express = require("express");
var app = express();

app.get('/about',(request,response)=>{
response.write("Welcome About page");
response.end();
}).listen(5050,()=>{
    console.log("Server is running");
})