const mongoose = require('mongoose');
const Schema =  mongoose.Schema

const WordSchema = new Schema({
    word:{
        type:String,
        required:true,
        unique:true
    },
    options:{
        type:Array,
        required:true
    },
    correctOption:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model('Word',WordSchema)