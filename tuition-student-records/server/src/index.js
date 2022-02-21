const express = require("express");
const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from

  next();
});

app.get("/", async (req, res) => {
  return res.status(200).send("Connected to server");
});
const studentController = require("./controllers/students");
app.use("/student", studentController);

const testController = require("./controllers/tests");
app.use("/test", testController);

const resultController = require("./controllers/result");
app.use("/result", resultController);
module.exports = app;
