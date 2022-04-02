const express=require('express');
const route=express.Router();
const User = require('../model/user.model')



route.get("/",async(req, res, next) => {
    try{
        const data=await User.find();
        return res.send(data)
    }
    catch(err){
        return res.send(err.message)
    }
})

route.get("/:username",async(req, res, next) => {
    try{
        console.log(req.params.username)
        const data=await User.find({email:req.params.username});
        return res.send(data)
    }
    catch(err){
        return res.send(err.message)
    }
})


module.exports =route;