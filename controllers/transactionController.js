const express = require("express");

const transaction = express.Router();

const transactionsArr = require("../models/transactions");

transaction.get("/",(_,response) =>{
    response.json(transactionsArr) //an object containing info about the thing being created
})

transaction.put("/:id", (request, response)=>{
    transactionsArr[request.params.id] = request.body;
     //gives us access to our given id setting it equal to new input
    response.status(200).json(transactionsArr[request.params.id]);
});

transaction.get("/:id", (request, response) => {
    const {id} = request.params;
    if (transactionsArr[id]){
        response.json(transactionsArr[id]);
    }
    else {
        response.redirect("*")
    }
})

transaction.post("/",(request, response) => {
    transactionsArr.push(request.body);
    response.json(transactionsArr[transactionsArr.length - 1]);
})


transaction.delete("/:id", (request, response) => {
    const {id} = request.params;
    if (transactionsArr[id]) {
    transactionsArr.splice(id, 1)
    response.status(200).json(transactionsArr)
    }
    else {
      response.status(404).json({error: "Not Found"});
    }
})

module.exports = transaction;

