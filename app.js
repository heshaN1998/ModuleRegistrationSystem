const express = require("express")
const app= express()
const PORT = 3500
const contextPathWithAPIVersion="/courseregis/api/v1"

//
app.get('${contextPathWithAPIVersion}/heartbeat',(req,res)=>{
    res.send("Course Regis Pro running")
});

app.listen(POR,()=>{
    console.log("sERVER sTARTED IN PORT : ",PORT)

})

