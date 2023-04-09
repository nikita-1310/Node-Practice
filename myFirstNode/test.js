var express = require("express");
var app = express();

app.listen(5050,()=>{
    console.log("Server is running");
})

app.get('/contact',(request,response)=>{
response.sendFile(__dirname+'/test.html')

})
app.get('/about',(request,response)=>{
response.send("Welcome to About page")

})