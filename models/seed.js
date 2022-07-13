//////// This file runs on `npm run seed` ////////

/////// Import Dependencies ///////
const mongoose = require("./connection")
const Mountain = require("./mountain")
/////// Seed Code ///////////

// save my db connection to a variable for easy reference later
const db = mongoose.connection

// this runs the callback function when the db connection is opened from this file
db.on("open", () => {
    // array of starter mountains
    const newMountains = [
        //mountain name:
        //mountain location:
        {name:"Beech Mountain", location:"North Carolina",},
        {name:"Sugar Mountain", location:"North Carolina"},
        {name:"Ober Gatlinburg", location:"Tennessee"},
        {name:"Keystone", location:"Colorado"},
        {name:"Breckenridge", location:"Colorado"},
        {name:"Vail", location:"Colorado"},
        {name:"Bromley Mountain", location:"Vermont"},
        {name:"Killington", location:"Vermont"},
        {name:"Powder Mountain", location:"Utah"},
        {name:"Solitude Mountain", location:"Utah"}
    ]

// when we seed data, we usually clear out the db first
Mountain.remove({})
// then we create data
    .then(deletedMountains => {
        console.log("this is what remove returns", deletedMountains)

        // now that our delete was successful, we can create our fruits
        Mountain.create(newMountains)
            .then(data => {
                console.log("the new mountains", data)
                db.close()
            })
    })
    .catch(error => {
        console.log("error:", error)
        db.close()
    })
    // close connection whether seeding is successful or not
 })