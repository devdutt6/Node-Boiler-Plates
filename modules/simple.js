const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const SimpleSchema = new mongoose.Schema({

} ,{ timestamps: true });

autoIncrement.initialize(mongoose.connection);
SimpleSchema.plugin(autoIncrement.plugin ,{
        model: 'SimpleSchema',
        startAt: 1,
        incrementBy: 1
});

const Simple = mongoose.model("Simple" ,  SimpleSchema);
module.exports = { Simple }