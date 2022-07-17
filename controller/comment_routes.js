const express = require("express")

// Make a router
const router = express.Router()
// Import Mountain model to access information database
const Mountain = require("../models/mountain")

// POST - CREATE ROUTE FOR COMMENT
// localhost:5000/comments/:mountainId <- A single fruit can have many comments
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

// DELETE ROUTE
// DELETING A COMMENT OR COMMENTS
// localhost:5000/comments/delete/:mountainID/:commId
router.delete("/delete/:mountainId/:commentId", (req, res) => {
    const mountainId = req.params.mountainId
    const commentId = req.params.commentId

    // locate a moutain by ID
    Mountain.findById(mountainId)
    // one mountain can have many comments
    // find a comment by ID
    .then(mountain => {
        const comment = mountain.comments.id(commentId)
        comment.remove()
        // return and call .save
        return mountain.save()
    })
    .then(moutain => {
        res.redirect(`/mountains/${mountainId}`)
    })
    .catch(err => {
        res.json(err)
    })
    // remove the comment
})

module.exports = router