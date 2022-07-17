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
    elevation: String,
    description: String,
    img: String,
    activity: String,
    numberOfLift: {
        type: Number,
        minimun: 0
    },
    numberOfRun: {
        type: Number,
        minimun: 0,
    },
    owner: {
        type: Schema.Types.ObjectId, // reference single User ._id
        reference: "User" // const User = model("User", userSchema) the string of "User" is how we reference model
    },
    comments: [commentSchema] // one mountain can have many comments. Comments are a sub document of Mountain
},
{
    timestamps: true
})

// need to make a model
// this collection will be called mountains
const Mountain = model("Mountain", mountainSchema)

module.exports = Mountain