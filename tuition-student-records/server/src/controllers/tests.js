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
  const page = +req.query.page || 1;
  const size = +req.query.size || 10;
  const skip = (page - 1) * size;
  const totalCount = await Test.find().count();
  const last_page = Math.ceil(totalCount / size);
  const tests = await Test.find();
  return res.status(200).send({ tests, size, page, last_page });
});

module.exports = router;
