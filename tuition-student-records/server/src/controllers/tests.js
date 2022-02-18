const Test = require("../models/tests");
const express = require("express");
const { route } = require("..");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const test = await Test.create(req.body);
    return res.status(201).send(test);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

router.get("/", async (req, res) => {
  const tests = await Test.find().lean().exec();
  return res.status(200).send(tests);
});

module.exports = router;
