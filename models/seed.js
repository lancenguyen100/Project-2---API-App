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
        {name:"Beech Mountain", location:"North Carolina", elevation: "5,506 feet"},
        {name:"Sugar Mountain", location:"North Carolina", elevation: "4,432 feet"},
        {name:"Ober Gatlinburg", location:"Tennessee", elevation: "3000 feet"},
        {name:"Keystone", location:"Colorado", elevation: "10,804"},
        {name:"Breckenridge", location:"Colorado", elevation: "9,600 feet"},
        {name:"Vail", location:"Colorado", elevation: "8,150 feet"},
        {name:"Bromley Mountain", location:"Vermont", elevation: "3,281"},
        {name:"Killington", location:"Vermont", elevation: "1,841"},
        {name:"Powder Mountain", location:"Utah", elevation: "7,700"},
        {name:"Solitude Mountain", location:"Utah", elevation: "10,488"}
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