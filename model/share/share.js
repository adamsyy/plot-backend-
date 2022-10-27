const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Share= new Schema({
    cost:Number,
    remaining:Number,
    total:Number,
    owner:String,
    name:String,
    location:String,
    images:[String]

});

const ShareSchema = mongoose.model("Share", Share);
module.exports = ShareSchema;
