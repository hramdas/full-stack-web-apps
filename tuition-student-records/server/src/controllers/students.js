const express = require("express");
const Student = require("../models/students");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let student = await Student.findOne({ email: req.body.email });

    if (student)
      return res.status(400).send({
        status: "failed",
        message: "User already registered using given email",
      });

    student = await Student.create(req.body);
    return res.status(201).send(student);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.get("/", async (req, res) => {
  const students = await Student.find();
  return res.status(200).send(students);
});

module.exports = router;
