const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    grade: { type: Number, required: true },
    gender: String,
    age: Number,
    picture: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("student", studentSchema);
