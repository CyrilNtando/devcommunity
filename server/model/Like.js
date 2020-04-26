const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    Post: {
      type: mongoose.Schema.ObjectId,
      ref: 'Post',
    },
    like: {
      type: String,
      required: [true, 'A like must belong to a user'],
      enum: {
        values: ['like', 'unlike'],
        message: 'Like is either: Like or UnLike',
      },
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
likeSchema.index({ post: 1, user: 1 }, { unique: true });

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
