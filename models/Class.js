const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  name: String,
  description: String,
  schedule: String, // format: YYYY-MM-DD HH:MM
  capacity: Number,
  trainer: String,
});

module.exports = mongoose.model("Class", ClassSchema);
