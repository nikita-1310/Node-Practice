var express = require("express");
var app = express();

app.listen(5050,()=>{
    console.log("Server is running on 5050 port");
})

app.get('/contact',(request,response)=>{
response.sendFile(__dirname+'/contact.html')

})
app.post('/contact',(request,response)=>{
response.send("Details are submitted")

})