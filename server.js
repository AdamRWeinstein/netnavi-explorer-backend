// DEPENDENCIES
require("dotenv").config();
require('./config/db.connection.js')
const cors = require("cors")
const morgan = require("morgan")

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;

const express = require("express");
const characterRouter = require('./routes/characters')

// create application object
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors()); 
app.use(morgan("dev"));

// all requests for endpoints that begin with '/character'
app.use('/character', characterRouter)

// ROUTES
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

