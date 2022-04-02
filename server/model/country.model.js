const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
   country:{type:String, required:true},
   cities:[{type:String, required:true}],
},{
   versionKey:false
});

// module.exports=mongoose.model('countries',countrySchema);
module.exports = mongoose.model("countries", countrySchema);