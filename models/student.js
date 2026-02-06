const mongoose = require('mongoose');
const { type } = require('os');
const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    rollNo:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    }

})
module.exports = mongoose.model('Student', studentSchema);
