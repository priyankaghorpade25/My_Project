// Please don't change the pre-written code

const express = require("express");
const server = express();
const path=require("path");
//const publicPath=path.join('\\public');C:\\Users\\Rushikesh\\Downloads\\problem (6)\\problem
const staticPath = path.join(__dirname, "public");

// const renderStatic = () => {
//   server.use(express.static(publicPath));
// };
const renderStatic = (server, staticPath) => {
  server.use(express.static(staticPath));
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

//renderStatic();
renderStatic(server, staticPath);

module.exports = { renderStatic, server };
