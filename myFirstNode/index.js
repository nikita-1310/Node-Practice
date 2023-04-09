var express = require("express");
var app = express();
var student = require('./student')

app.listen(5050,()=>{
    console.log("Server is running");
})

app.get('/',(request,response)=>{
response.write("Welcome to the page ");
response.write(student[1].sname);
response.write(student[0].sid.toString());
response.end();
})