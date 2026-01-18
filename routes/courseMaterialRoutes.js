const courseMaterialURL ="/material"
const express = require('express')
const router =express.Router()
const courseMaterialService = require("../service/courseMaterialService")
const multer = require('multer')
const courseMaterial =require("../model/courseMaterialModel")
const {v4:uuidv4} = require("uuid")

//config multer storage tempory
const Storage = multer.memoryStorage()
const  upload =multer({storage:storage})
//get
router.get(courseMaterialURL,async(req,res)=>{
    try {
        const AllCourseMaterialls = await courseMaterialService.getAllCourseMaterils()
        return res.json(allMaterals)
    } catch (error) {
        console.error("Erro fetching materials",err)
        return res.status(500).json({error:"failed fetching"})
    }

})

//save
router.post(courseMaterialURL,upload.single("material"),async (req,res)=>{
    try {
        console.log("call save mat")
        console.log("req body",req.body)
        console.log("file",req.file)

        if(!req.body.fileName || req.body.materialType ||!req.body.courseId ||! req.file){
            return res.status(400).json({error:"required data"});
        }
        const newMaterial = new courseMaterial({
            materialId:"cmt-"+uuidv4(),
            fileName:req.body.fileName,
            materialType:req.body.materialType,
            material:fileBase64,
            courseId:req.body.courseId
        })
        await courseMaterialService.addCourseMaterial(newMaterial)
        res.sendStatus(201).json({message:"save materials"})
    } catch (error) {
        console.error("save error", +err)
         res.sendStatus(500).json({message:"save failed"})
    }

})

//update
router.patch('${courseMaterialURL}/:materialId',(req,res)=>{

})

//delete
router.delete('${courseMaterialURL}/:materialId',(req,res)=>{

})

module.exports = router