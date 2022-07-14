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
        {name: "Beech", 
        location: "North Carolina", 
        elevation: "5,506 feet",
        description: "Beech Mountain Resort is your go-to North Carolina Ski Resort for year-round run including skiing and snowboarding at a North Carolina Ski Resort.",
        img:"https://i.imgur.com/uXSLSbzs.jpg",
        activity: "hiking, biking, birding, fishing, shopping, snowboard/ski, scenic",
        numberOfLift: 8,
        numberOfRun: 15},
        {name: "Sugar", 
        location: "North Carolina", 
        elevation: "4,432 feet",
        description: "Sugar Mountain is a village in North Carolina's Blue Ridge Mountains. It's known for the Sugar Mountain Resort, with its ski slopes, trails and outdoor ice rink.",
        img: "",
        activity: "hiking, biking, birding, fishing, shopping, snowboard/ski, scenic",
        numberOfLift: 8,
        numberOfRun: 20},
        {name: "Ober Gatlinburg", 
        location: "Tennessee", 
        elevation: "3000 feet",
        description: "Spring, Summer and Fall, the amusement park is a family-oriented theme park offering “snowless” Summer Tubing, Ski Mountain Coaster, Ice Skating, Ice Bumper Cars, Alpine Slide, Scenic Chairlift and Wildlife Encounter.",
        img: "",
        activity: "aqarium, snowboard/ski, scenic, hiking, rock climbing, dining, camping",
        numberOfLift: 6,
        numberOfRun: 10},
        {name: "Keystone", 
        location: "Colorado", 
        elevation: "10,804 feet",
        description: "On a Keystone Colorado ski vacation discover three unbelievable mountains, tons of outdoor adventures, and amazing lodging and dining.",
        img: "",
        activity: "snowboarding/ski, hiking, scenic, dining, mountain biking  ",
        numberOfLift: 20,
        numberOfRun: 128},
        {name: "Breckenridge", 
        location: "Colorado", 
        elevation: "9,600 feet",
        description: "Breckenridge is a Colorado town at the base of the Rocky Mountains' Tenmile Range. It's known for its ski resort, year-round alpine activities and Gold Rush history.",
        img: "",
        activity: "snowboarding/ski, river float, gold mine tour, historic sites, astrophotography",
        numberOfLift: 35,
        numberOfRun: 187},
        {name: "Vail", 
        location: "Colorado", 
        elevation: "8,150 feet",
        description: "Vail, Colorado, is a small town at the base of Vail Mountain, home of the massive Vail Ski Resort. Set within White River National Forest, the town is a gateway for winter sports such as skiing and snowboarding.",
        img: "",
        activity: "snowboard/ski, hiking, cultural festivals, horseback riding, scenic rides",
        numberOfLift: 33,
        numberOfRun: 195},
        {name: "Aspen", 
        location: "Colorado", 
        elevation: "8000 feet",
        description: "Aspen Mountain (often called by its former name of Ajax among locals) is a ski area in the western United States, located in Pitkin County, Colorado, just outside and above the city of Aspen.",
        img:"",
        activity:"snowboard/ski, art museum, music festival, film festival",
        numberOfLift: 8,
        numberOfRun: 76},
        {name: "Bromley", 
        location: "Vermont", 
        elevation: "3,281 feet",
        description: "Bromley Mountain is located in southern Vermont, United States and is part of the Green Mountains. It is located in the town of Peru, Bennington County, seven miles east of Manchester, Vermont and just west of the Peru town center. It is a popular destination for skiing and snowboarding.",
        img: "",
        activity: "snowboard/ski, backroad discovery tour, Hildene, The Lincoln Family Home Tour, Dana L. Thompson Memorial Park",
        numberOfLift: 10,
        numberOfRun: 47},
        {name: "Killington", 
        location: "Vermont", 
        elevation: "1,841 feet",
        description: "Killington Mountain is the largest ski and snowboard resort in eastern North America known for long seasons thanks to abundant natural snowfall and the most extensive snow making system in the world.",
        img: "",
        activity: "hiking, snowboard/ski, Gifford Woods State Park, Green Mountain National Golf Course",
        numberOfLift: 21,
        numberOfRun: 155},
        {name: "Powder", 
        location: "Utah", 
        elevation: "7,700 feet",
        description: "With over 8,000 acres of skiable terrain, Powder Mountain is one of North America's largest ski areas. This is the place if you want endless pow or untouched corduroy.",
        img: "",
        activity: "New World Distillery, Weber County North Fork Park, snowboard/ski, The Stump, Huntsville Astronomic and Lunar Observatory",
        numberOfLift: 9,
        numberOfRun: 154},
        {name: "Solitude", 
        location: "Utah", 
        elevation: "10,488 feet",
        description: "Solitude Mountain Resort is a ski resort located in the Big Cottonwood Canyon of the Wasatch Mountains, thirty miles southeast of Salt Lake City, Utah. With 66 trails, 1,200 acres and 2,047 feet vertical, Solitude is one of the smaller ski resorts near Salt Lake City, along with its neighbor Brighton.",
        img: "",
        activity: "snowboard/ski, Big Cottonwood Canyon, water rafting, exclusive excursions, fishing, Gourmand Tours",
        numberOfLift: 8,
        numberOfRun: 80},
        {name: "Belleayre", 
        location: "New York", 
        elevation: "2,541 feet",
        description: "Belleayre Mountain, in Catskill Park, New York, United States, is a ski resort owned and operated by the Olympic Regional Development Authority or ORDA. It is the only Catskill resort that contains a gondola and attracts many new visitors from New York City.",
        img: "",
        activity: "Belleayre Scenic Gondolas, Shandaken Historical Museum, Delaware & Ulster Railroad, snowboard/ski",
        numberOfLift: 8,
        numberOfRun: 175},
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