const express = require("express");

const transaction = express.Router();

const transactionsArr = require("../models/transactions");

transaction.get("/",(_,response) =>{
    response.json(transactionsArr) //an object containing info about the thing being created
})
transaction.get("/:index", (request, response) => {
    const {index} = request.params;
    if (transactionsArr[index]){
        console.log(transactionsArr[index]);
        response.json(transactionsArr[index]);
    }
    else {
        response.redirect("*")
    }
}) //pulling info from specific index

transaction.put("/:index", (request, response)=>{
    transactionsArr[request.params.index] = request.body;
     //gives us access to our given index setting it equal to new input
    response.status(200).json(transactionsArr[request.params.index]);
});



transaction.post("/",(request, response) => {
    transactionsArr.push(request.body);
    response.json(transactionsArr[transactionsArr.length - 1]);
})


transaction.delete("/:index", (request, response) => {
    const {index} = request.params;
    if (transactionsArr[index]) {
    transactionsArr.splice(index, 1)
    response.status(200).json(transactionsArr)
    }
    else {
      response.status(404).json({error: "Not Found"});
    }
})

module.exports = transaction;

