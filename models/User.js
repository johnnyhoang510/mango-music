const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  followers: [
    {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "posts"
    }
  ],
  likedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "posts"
    }
  ],
  profilePhoto: {
    type: String
  }
}, {
  timestamps: true
})

const User = mongoose.model('User', UserSchema);
module.exports = User;