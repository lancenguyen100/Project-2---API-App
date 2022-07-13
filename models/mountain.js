const mongoose = require("./connection")
const commentSchema = require("./comment")

const { Schema, model } = mongoose

const mountainSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

// need to make a model
// this collection will be called mountains
const Mountain = model("Mountain", mountainSchema)

module.exports = Mountain