const express = require('express')

const router = express.Router()

const Postss = require("../models/posts.model")

const authenticate = require("../middleware/authenticate")

//Cruds

router.get("/", async(req,res) => {
    try{
        const postss = await Postss.find()

        res.status(200).send(postss)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

router.post("/",authenticate, async(req,res)=>{
    req.body.userId = req.userId
    try{
        const postss = await Postss.create(req.body)
        return res.status(200).send(postss)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const postss = await Postss.findByIdAndUpdate(req.params.id,req.body,{new:true00}).lean().exec();

        return res.status(200).send(postss)
    }
    catch{
        return res.status(500).send({message:err.message});
    }
})

router.delete("/:id" ,async(req,res)=>{
    try{
        const postss = await Postss.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(postss)
    }

    catch(err){
        return res.status(500).send({message:err.message});
    }
})


module.exports = router;