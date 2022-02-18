const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "students" },
    test: { type: mongoose.Schema.Types.ObjectId, ref: "tests" },
    marks: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("result", resultSchema);
