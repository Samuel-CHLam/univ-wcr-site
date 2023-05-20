const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({ // only UserSchema do not follow the camel-case convention.
  title: String,
  summary: String,
  content: String,
  cover: String,
  banner_link: { type: String, default: null }, // should use Getters
  author: {
    type:Schema.Types.ObjectId, 
    ref:'user'},
},
   {
    timestamps: true,
});

// compile model from schema
module.exports = mongoose.model("post", postSchema);