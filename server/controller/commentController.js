const db = require('../model');
const catchAsync = require('../utils/catchAsync');
const appError = require('../utils/appError');

exports.getAllComment = catchAsync(async function (req, res, next) {
  const comment = await db.Comment.find({ post: req.params.postId });
  res.status(200).json({
    status: 'success',
    data: {
      comment,
    },
  });
});

exports.createComment = catchAsync(async function (req, res, next) {
  const newComment = await db.Comment.create({
    user: req.user._id,
    post: req.params.postId,
    ...req.body,
  });
  res.status(201).json({
    status: 'success',
    data: {
      comment: newComment,
    },
  });
});

exports.updateComment = catchAsync(async function (req, res, next) {
  const comment = await db.Comment.findByIdAndUpdate(
    req.params.commentId,
    {
      text: req.body.text,
    },
    { new: true, runValidators: true }
  );
  if (!comment) return next(new appError('no comment found', 404));

  res.status(200).json({
    status: 'success',
    data: {
      comment,
    },
  });
});
exports.deleteComment = catchAsync(async function (req, res, next) {
  const comment = await db.Comment.findById(req.params.commentId);
  if (!comment) return next(new appError('no comment found', 404));
  comment.remove();
  res.status(204).json({
    status: 'success',
  });
});
