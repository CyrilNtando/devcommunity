const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A post must belong to a user'],
  },
  text: {
    type: String,
    required: [true, 'A post cannot be empty'],
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  comment: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
    },
  ],
  like: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      unique: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
