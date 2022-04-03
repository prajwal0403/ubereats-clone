require("dotenv").config();
const express = require('express');
const User = require('../model/product.model');
const router = express.Router();

router.get("", async (req,res) =>{
    try{
        const user = await User.find().lean().exec();
        res.send(user);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
router.get("/:id", async (req,res) =>{
    try{
        // console.log(req.params)
        const user = await User.find({id:req.params.id}).lean().exec();
        // console.log(user);
        res.send(user);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
router.post("", async (req,res) =>{
    try{
        const user = await User.create(req.body);
        return res.send(user);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})
module.exports = router;