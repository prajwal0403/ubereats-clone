const express=require('express');
const route=express.Router();
const {send_mail}=require('../utils');

let data;
route.post("/",async(req, res, next) => {
    try{
        console.log(req.body)
        data=req.body;
        await send_mail(req.body);
        // const data=await User.create(req.body);
        return res.send(req.body)
    }
    catch(err){
        return res.send(err.message)
    }
})

route.get("/",async(req, res, next) => {
    try{
        // console.log(req.body)

        // await send_mail({});
        // // const data=await User.create(req.body);
         return res.send(JSON.stringify(data))
    }
    catch(err){
        return res.send(err.message)
    }
})
module.exports = route;