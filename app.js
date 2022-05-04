const express = require("express");
const eventsController = require("./controllers/eventsController");
const groupsController = require("./controllers/groupsController");
const usersController = require("./controllers/usersController");


//create express app
const app = express();
const cors = require("cors");

//middleware?
app.use(cors());
app.use(express.json());

// .use takes in two arguments:
// - the sub-route for the controller to handle
// - the controller that should handle it
app.use('/groups', groupsController);
app.use('/events', eventsController);
app.use('/user', usersController);

//the home route
app.get("/", (request, response) => {
    response.send("Welcome to Study Buddies!");
});


//Star(*) matches anything we haven't matched yet.
app.get("*", (request, response) => {
    response.status(404).json({error: "Page not found"});
});


module.exports = app;