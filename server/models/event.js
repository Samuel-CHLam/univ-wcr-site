const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  author: {                                        // should be a user name
    type:Schema.Types.ObjectId, 
    ref:'user'},
  host : String,                                   // should be a WCR Role
  banner_link: { type: String, default: null },    // should use Getters
  startTime: Date,
  endTime: Date,
  address: String,
  links: {type: [{media: String, link: String}], default: [null]},
  online_event: Boolean,
  description: String,
},
   {
    timestamps: true,
});

// compile model from schema
module.exports = mongoose.model("event", eventSchema);