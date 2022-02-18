const Result = require("../models/results");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let result = await Result.find({
      student: req.body.student,
      test: req.body.test,
    });
    if (result)
      return res
        .status(400)
        .send({ status: "failed", message: "Result already submitted" });
    result = await Result.create(req.body);
    return res.status(201).send(result);
  } catch (e) {
    return res.status(500).send({ status: "failed", message: e.message });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const result = await Result.find().lean().exec();
//     return res.status(200).send(result);
//   } catch (e) {
//     return res.status(500).send({ status: "failed", message: e.message });
//   }
// });

router.get("/", async (req, res) => {
  try {
    const result = await Result.find().lean().exec();
    return res.status(200).send(result);
  } catch (e) {
    return res.status(500).send({ status: "failed", message: e.message });
  }
});
module.exports = router;
