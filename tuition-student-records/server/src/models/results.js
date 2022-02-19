const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "student" },
    test: { type: mongoose.Schema.Types.ObjectId, ref: "test" },
    marks: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("result", resultSchema);
