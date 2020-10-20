const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ItemSchema = new Schema(
    {
        name: {type:String, required: true},
        date: { type: Date, default: Date.now() },
    }
);


module.exports = mongoose.model('item', ItemSchema);