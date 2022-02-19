const Result = require("../models/results");
const Student = require("../models/students");
const Test = require("../models/tests");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let result = await Result.findOne({
      student: req.body.student,
      test: req.body.test,
    });
    if (result) {
      return res
        .status(400)
        .send({ status: "failed", message: "Result already submitted" });
    }
    result = await Result.create(req.body);
    return res.status(201).send(result);
  } catch (e) {
    return res.status(500).send({ status: "failed", message: e.message });
  }
});

// All tests of a student
router.get("/student/:id", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;
    const skip = (page - 1) * size;
    const totalCount = await Student.find({ result: req.params.id }).count();
    const last_page = Math.ceil(totalCount / size);
    const student = await Student.findById(req.params.id);
    const result = await Result.find({ student: req.params.id })
      .limit(size)
      .skip(skip)
      .select("test")
      .populate("test");
    return res
      .status(200)
      .send({ student, results: { result, page, size, last_page } });
  } catch (e) {
    return res.status(500).send({ status: "failed", message: e.message });
  }
});

//all students for a test
router.get("/test/:id", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;
    const skip = (page - 1) * size;
    const totalCount = await Result.find({ test: req.params.id }).count();
    const last_page = Math.ceil(totalCount / size);
    const test = await Test.findById(req.params.id);
    const result = await Result.find({ test: req.params.id })
      .limit(size)
      .skip(skip)
      .select("student")
      .select("marks")
      .populate("student");
    return res
      .status(200)
      .send({ test, results: { result, page, size, last_page } });
  } catch (e) {
    return res.status(500).send({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await Result.find().lean().exec();
    return res.status(200).send(result);
  } catch (e) {
    return res.status(500).send({ status: "failed", message: e.message });
  }
});
module.exports = router;
