// Please don't change the pre-written code

const express = require("express");
const server = express();

// Set custom header on response object
const setCustomHeader = (res,name,value) => {
  res.set(name,value);
  console.log(name,value);
  
};

// Route that uses the setCustomHeader function
server.get("/", (req, res) => {
  setCustomHeader(res, "Content-Type", "application/json");
  //console.log("Welcome");
  res.send(`get method called!`);
});

module.exports = { setCustomHeader, server };
