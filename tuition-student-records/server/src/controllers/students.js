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

router.get("/:id", async (req, res) => {
  const students = await Student.findById(req.params.id);
  return res.status(200).send(students);
});
router.get("/", async (req, res) => {
  const page = +req.query.page || 1;
  const size = +req.query.size || 10;
  const skip = (page - 1) * size;
  const totalCount = await Student.find().count();
  const last_page = Math.ceil(totalCount / size);
  const students = await Student.find().limit(size).skip(skip);
  const data = { students, page, last_page };
  return res.status(200).send(data);
});

module.exports = router;
