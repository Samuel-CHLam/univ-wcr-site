const mongoose = require("mongoose");

const votingSchema = new mongoose.Schema({ // Oxford SU Voting Record
  title: String,
  meetingDate: Date,
  meetingSession: String,
  meetingLink: String,
  notes: [String],
  believes: [String],
  resolutions: [String],
  yesVote: Number,
  noVote: Number,
  abstainVote: Number,
  unusedVote: Number,
  resolved: Boolean, 
},
   {
    timestamps: true,
});

// compile model from schema
module.exports = mongoose.model("voting", votingSchema);