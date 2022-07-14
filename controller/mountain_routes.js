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

///////////////////////////////////////////////////
// POST - CREATE

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




//////////////////////////////
// EXPORT ROUTER
module.exports = router


