const express = require("express")
// make a router
const router = express.Router()
// import moutain model to access database
const Mountain = require("../models/mountain")


//////////////////////////////////
// DELETE - DELETE
// Delete by ID
router.delete("/:id", (req, res) => {
    const mountainId = req.params.id

    Mountain.findByIdAndRemove(mountainId)
        .then(mountain => {
            res.redirect("/mountains")
        })
        .catch(err => {
            res.json(err)
        })
})

/////////////////////////////////////////////////
// GET ROUTE FOR DISPLAYING AN UPDATE FORM
// need this before edit route
router.get("/:id/edit", (req, res) => {
    const mountainId = req.params.id

    Mountain.findById(mountainId)
        .then(mountain => {
            res.render("mountains/edit", { mountain })
        })
        .catch(err => {
            res.json(err)
        })
})

//////////////////////////////////////////////
// PUT - UPDATE
// localhost:5000/mountains/:id
// Route to run updated mountains
router.put("/:id", (req, res) => {
    const mountainId = req.params.id

    Mountain.findByIdAndUpdate(mountainId, req.body, { new: true})
        .then (mountain => {
            res.redirect(`/mountains/${mountain._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})


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
// localhost:5000/mountains
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


// // Favorite Routes
// router.get("/:id/favorites", (req, res) => {
//     console.log(req.params)
//     const mountainId = req.params.id

//     Mountain.findById(mountainId).toArray()
//     Mountain.findById(mountainId).insert()

//     .then(mountains => {
//         console.log(mountains)
//     })
    
// //     Mountain.insertOne(req.params.id)
// //     .then(mountains => {
// //         res.render("mountains/index", { mountains })
// //     })
// //     .catch(err => {
// //         res.json(err)
// //     })
// })



////////////////////////////////////////////
// GET - MINE
// might or might not use
// Show users' personal favs
router.get("/myMountains", (req, res) => {
    // locate the specific mountains associated with current user
    Mountain.find ({ owner: req.session.userId })
        .then(mountains => {
            res.render("mountains/index", { mountains })
        })
        .catch (err => {
            console.log(err)
            res.json({err})
        })
})


// GET - SHOW
// localhost:5000/mountains/:id
router.get("/:id", (req, res) => {
    const mountainId = req.params.id

    Mountain.findById(mountainId)
    .populate("comments.author")
    .then(mountain => {
        const userId = req.session.userId
        const username = req.session.username
        res.render("mountains/show", { mountain, userId, username })
    })
    .catch(err => {
        res.json(err)
    })
})



//////////////////////////////
// EXPORT ROUTER
module.exports = router


