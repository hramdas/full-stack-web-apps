const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("teacher", teacherSchema);
