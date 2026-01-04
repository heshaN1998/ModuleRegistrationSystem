const courseMaterialURL ="/material"
const express = require('express')
const router =express.Router()

//get
router.get(courseMaterialURL,(req,res)=>{

})

//save
router.post(courseMaterialURL,courseMat,(req,res)=>{

})

//update
router.patch('${courseMaterialURL}/:materialId',(req,res)=>{

})

//delete
router.delete('${courseMaterialURL}/:materialId',(req,res)=>{

})

module.exports = router