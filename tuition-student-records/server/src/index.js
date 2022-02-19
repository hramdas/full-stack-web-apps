const express = require("express");
const app = express();
app.use(express.json());

const studentController = require("./controllers/students");
app.use("/student", studentController);

const testController = require("./controllers/tests");
app.use("/test", testController);

const resultController = require("./controllers/result");
app.use("/result", resultController);
module.exports = app;
