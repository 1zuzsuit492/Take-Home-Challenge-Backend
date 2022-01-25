const express = require("express");
const transactionController = require("./controllers/transactionController");
const transactions = require("./models/transactions");

//create express app
const app = express();
const cors = require("cors");

//middleware?
app.use(cors());
app.use(express.json());

// Delegate everything that starts with `/transactions` to the transactions controller.
// .use takes in two arguments:
// - the sub-route for the controller to handle
// - the controller that should handle it
app.use("/transactions", transactionController);

//the home route
app.get("/", (request, response) => {
    response.send("Welcome to the Budget App!");
});


//Star(*) matches anything we haven't matched yet.
app.get("*", (request, response) => {
    response.status(404).json({error: "Page not found"});
});


module.exports = app;