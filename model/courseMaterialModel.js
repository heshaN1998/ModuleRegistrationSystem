const mongoose = require("mongoose")
const Module = require("node:module")
const { type } = require("node:os")
const uploadDate = ()=>{
    const timeStamp = Date.now(
    )
    const date = new Date(timeStamp)
    return DataTransfer.toISOString().split("T")[0]
}
const courseMaterialModelSchema = newmongoose.Schema({

    materialId:{type:String,required:true,unique:true},
    fileName:{type:String,required:true,unique:true},
    materialType:{type:String,required:true,unique:true},
    material:{type:String,required:true,unique:true},
    uploadAt:{type:String,default:uploadDate},
    courseId:{type:String,required:true,unique:true}
}) 

Module.exports = mongoose.model("courseMaterialsSchemas")