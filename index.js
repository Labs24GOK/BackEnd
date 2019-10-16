//larry
require("dotenv").config();
const express = require("express");
const server = express();
const studentRouter = require("./studentrouter");

console.log(process.env.NAME, process.env.ANOTHERNAME); //env variables
//middleware
server.use(express.json()); // parses the req.body
server.use("/student", studentRouter);
// express.json() => leanamiddleware => route
// localhost:3000/student/

server.post("/", (req, res) => {
  res.status(201).json({
    body: req.body
  });
});
server.put("/", (req, res) => {
  res.json({ body: req.body });
});
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server is listening on port 3000");
});

// export PORT=2000 && node index.js

//leana
// const expess = require("express");
// const server = express();

// server.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });

// server.post("/", (req, res) => {
//   res.send()
// });
