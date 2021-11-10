const mongoose = require('mongoose');

const ObjectSchema = new mongoose.Schema({

} ,{ timestamps: true });


const Object = mongoose.model("Object" ,  ObjectSchema);
module.exports = { Object }