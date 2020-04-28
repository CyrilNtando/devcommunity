const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
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
        user: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          unique: true,
          validate: {
            validator: function (val) {
              return true;
            },
          },
        },
      },
    ],
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
postSchema.virtual('comments', {
  ref: 'Comment',
  foreignField: 'post',
  localField: '_id',
});

postSchema.pre('save', async function (next) {
  next();
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
