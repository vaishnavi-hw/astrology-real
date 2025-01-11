const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/astrologydata");
let dataSchema = new mongoose.Schema({
  "lagna": String,
  "bhav": String,
  "grah": String,
  "text": String
});
module.exports = mongoose.model("data", dataSchema);