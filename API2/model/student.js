const mongoose =require('mongoose');
const StudentSchema = mongoose.Schema({
    name:String,
    address:String
},{collection:'Student',versionKey:false});

module.exports = mongoose.model('Student',StudentSchema);
