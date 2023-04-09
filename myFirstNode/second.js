var express = require("express");
var app = express();
app.listen(5050,()=>{
    console.log("Server is running");
})

app.get('/about',(request,response)=>{
response.write("Welcome About");
response.end();
})

app.get('/',(request,response)=>{
    response.send("Welcome About");
    response.end();
    })