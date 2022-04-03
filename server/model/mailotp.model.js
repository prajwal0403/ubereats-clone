const mongoose = require('mongoose');

const mailotpSchema= new mongoose.Schema({
   email:{type:String, required:true},
   otp:{type:String, required:true},
},{
   versionKey:false
});

// module.exports=mongoose.model('countries',countrySchema);
module.exports = mongoose.model("mailotp", mailotpSchema);