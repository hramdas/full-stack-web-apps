const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    subject: String,
    marks: { type: Number },
    date: Date,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("test", testSchema);
