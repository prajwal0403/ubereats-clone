const express=require('express');
const route=express.Router();
const {send_mail}=require('../utils');
const Mailotp  = require('../model/mailotp.model')

let data;
route.post("/",async(req, res, next) => {
    try{
        // const user_id = 6248f58287828be5260b7773
        await Mailotp.findByIdAndUpdate("6248f58287828be5260b7773",{email:req.body.email,otp:req.body.otp});
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
        const mailData = await Mailotp.findById("6248f58287828be5260b7773").lean().exec()
        // await send_mail({});
        // const data=await User.create(req.body);
        // console.log(JSON.stringify(data))
        // const Data = JSON.stringify(data)
         return res.json(mailData);
    }
    catch(err){
        return res.send(err.message)
    }
})
module.exports = route;