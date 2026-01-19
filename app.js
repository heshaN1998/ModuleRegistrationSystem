const express = require("express")
const app= express()
const PORT = 3500
const contextPathWithAPIVersion="/courseregis/api/v1"
const courseMaterialRoutes =require("./routes/courseMaterialRoutes")
const mongoose = require("mongoose")

app.get('${contextPathWithAPIVersion}/heartbeat',(req,res)=>{
    res.send("Course Regis Pro running")
});


//DB Connect
mongoose.connect("mongodb://localhost:27017/courseRegis110Pro",{userNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("connected to mongoDB"))
    .catch(err=>console.error("failed to connect mongoDB",err))
app.listen(POR,()=>{
    console.log("Server Started IN PORT : ",PORT)

});

