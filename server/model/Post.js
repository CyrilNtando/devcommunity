const mongoose = require('mongoose');
const Comment = require('./Comment');
const appError = require('../utils/appError');
const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    unique: true,
  },
});
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
  like: [likeSchema],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

postSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
});

postSchema.pre('remove', async function (next) {
  const comments = await Comment.deleteMany({ post: this._id }, (err) => {
    if (err) next(new appError('could not delete comment try later', 500));
    next();
  });
});

postSchema.set('toObject', { virtuals: true });
postSchema.set('toJSON', { virtuals: true });
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
