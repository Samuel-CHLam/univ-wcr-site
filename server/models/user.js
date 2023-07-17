const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  profile_pic_link: String, // should use Getters
  affliationArray: [{
    roleName: String,
    institutionName: String,
    startYear: Number,
    endYear: Number,
  }],
  wcrRole: String, // name of wcr role, alumni
  subject: String,
  personalIntro: String,
  joinedUnivSince: Number,
  facebookLink: String,
  twitterLink: String,
  linkedInLink: String,
  websiteLink: String,
  otherContact: [{media: String, link: String}]
});

// compile model from schema
module.exports = mongoose.model("user", userSchema);
