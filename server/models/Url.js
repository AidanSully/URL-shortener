const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const urlSchema = new Schema({
  id: {
    type: String,
    required: "ID is required",
  },
  url: {
    type: String,
    required: "URL is required",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Url", urlSchema);
