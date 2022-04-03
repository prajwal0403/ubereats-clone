const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   img:{type:String, required:true},
    title:{type:String, required:true},
    rating:{type:String, required:true},
    time:{type:Number, required:true},
    id:{type:Number, required:true},
    del:{type:String, required:true},
    price:{type:String, required:true},
},{
   versionKey:false
});

module.exports = mongoose.model("products", productSchema);