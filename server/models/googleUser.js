const mongoose = require("mongoose");

const googleUserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  webRole: { type: String, default: "visitor" }, // visitor, priviledged, admin
});

// compile model from schema
module.exports = mongoose.model("googleUser", googleUserSchema);
