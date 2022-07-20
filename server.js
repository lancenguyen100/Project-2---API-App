////// IMPORT DEPENDENCIES //////
// This allows us to load our .env variables
require("dotenv").config()

const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

// //////Multer//////
// const multer = require("multer")
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./uploads")
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({ storage: storage})
// app.use(express.static(_dirname + "/public"))
// app.use("/uploads", express.static("upload"))
// /////Multer/////////////

// CONTROLLER ROUTES 
const userRoutes = require("./controller/user_routes")
const mountainRoutes = require("./controller/mountain_routes")
const commentRoutes = require("./controller/comment_routes")

// Create our express application object
const app = require("liquid-express-views")(express())

// MIDDLEWARE
// Request logging
app.use(morgan("tiny"))
// Override delete method
app.use(methodOverride("_method"))
// Parses urlencoded request bodies
app.use(express.urlencoded({ extended: false }))
// Serve files from publicly statically
app.use(express.static("public"))
// Session middleware
const session = require("express-session")
const MongoStore = require("connect-mongo")
// Middleware that sets up our session
app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        }),
        saveUninitialized: true,
        resave: false
    })
)


//////// ROUTES ////////////
app.use("/users", userRoutes)
app.use("/mountains", mountainRoutes)
app.use("/comments", commentRoutes)


// localhost:5000/
// Make sure server is running
app.get("/", (req, res) => {
    res.send("Yo! That's server is popping!")
    res.redirect("/mountains")
})


////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////
// const PORT = process.env.PORT

app.listen(process.env.PORT || 3000)


// , () => {
//     console.log(`app is listening on port: ${PORT}`)
// })