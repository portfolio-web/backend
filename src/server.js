const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contactRouter = require("./routes/contactRouter");

const server = express();
const db = mongoose.connect("mongodb://localhost/portfolioAPI");
const port = process.env.port || 4000;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

server.use("/", contactRouter);

server.get("/equisd", (req, res) => {
  res.send("Hello there");
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
