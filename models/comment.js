const { Schema } = require("mongoose")
const mongoose = require("./connection")

const commentSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    author: {
        // Reference a SINGLE user
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }
}, {
    timestamps: true    
})

module.exports = commentSchema