const express = require("express")
// make a router
const router = express.Router()
// import moutain model to access database
const Mountain = require("../models/mountain")

//////////////////////////////////
// DELETE - DELETE


/////////////////////////////////////////////////
// GET ROUTE FOR DISPLAYING AN UPDATE FORM

//////////////////////////////////////////////
// PUT - UPDATE
// localhost:3000/mountains/:id


////////////////////////////////////////////////////
// GET ROUTE FOR DISPLAYING MY FORM FOR CREATE
// GET route for showing the form first
// CANNOT create a moutain with a form first
router.get("/new", (req, res) => {
    res.render("mountains/new")
})

///////////////////////////////////////////////////
// POST - CREATE
// Create route for posting new content
router.post("/", (req, res) => {
    
    req.body.owner = req.session.userId

    Mountain.create(req.body)
        .then(mountain => {
            console.log(mountain)
            res.redirect("/mountains")
        })
        .catch(err => {
            res.json(err)
        })
})

/////////////////////////////////////////////////////
// GET - INDEX
// localhost:3000/mountains
router.get("/", (req,res) => {
    // mongoose to find all mountains
    Mountain.find({})
    // return mountains as json
        .then(mountains => {
            res.render("mountains/index", { mountains })
        })
        .catch(err => {
            res.json(err)
        })
})


//////////////////////////////////////////////
// GET - MINE
// might or might not use


// GET - SHOW
// localhost:3000/mountains/:id
router.get("/:id", (req, res) => {
    const mountainId = req.params.id

    Mountain.findById(mountainId)
    .then(mountain => {
        res.render("mountains/show", { mountain })
    })
    .catch(err => {
        res.json(err)
    })
})



//////////////////////////////
// EXPORT ROUTER
module.exports = router


