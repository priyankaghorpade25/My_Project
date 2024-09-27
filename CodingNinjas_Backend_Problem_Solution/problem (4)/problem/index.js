// Please don't change the pre-written code

const express = require("express");
const server = express();
server.get('/',(req,res)=>{
    res.send("get");
})
server.put('/',(req,res)=>{
    res.send("put");
})
server.post('/',(req,res)=>{
    res.send("post");
})
server.delete('/',(req,res)=>{
    res.send("delete");

})
module.exports = server;
