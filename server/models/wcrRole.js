const mongoose = require("mongoose");

const wcrRoleSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// compile model from schema
module.exports = mongoose.model("wcrRoler", wcrRoleSchema);