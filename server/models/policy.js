const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({ // Oxford SU Voting Record
  title: String,
  meetingDate: Date,
  meetingSession: String,
  meetingLink: String,
  notes: [String],
  believes: [String],
  resolutions: [String],
},
   {
    timestamps: true,
});

// compile model from schema
module.exports = mongoose.model("policy", policySchema);