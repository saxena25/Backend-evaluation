const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['Admin', 'Member'],
        default: 'Member'
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    borrowedBooks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }]
})

const User = mongoose.model("User", userSchema);

module.exports = User;