const express = require("express")

// Make a router
const router = express.Router()
// Import Mountain model to access information database
const Mountain = require("../models/mountain")

// POST - CREATE ROUTE FOR COMMENT
// localhost:3000/comments/:mountainId <- A single fruit can have many comments
router.post("/:mountainId", (req, res) => {
    const mountainId = req.params.mountainId
    req.body.author = req.session.userId

    Mountain.findById(mountainId)
    // once mountain has been found...
    // we can add a comment to that mountain
    .then(mountain => {
        mountain.comments.push(req.body)

        // return and call .save to save changes to document
        return mountain.save()
    })
    .then(mountain => {
        res.redirect(`/mountains/${mountain._id}`)
    })
    .catch(err => {
        res.json(err)
    })
})