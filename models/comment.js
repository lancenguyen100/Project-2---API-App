const { schema } = require("mongoose")
const mongoose = require("./connection")

const commentSchema = new mongoose.Schema({
    message: {
        type: String,
        require: true
    },
    author: {
        // Reference a SINGLE user
        type: mongoose.Schema.Types.ObjectId,
        reference: "User" 
    }
}, {
    timestamps: true    
})

module.exports = commentSchema