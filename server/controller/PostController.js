const db = require('../model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllPost = catchAsync(async function (req, res, next) {
  const posts = await db.Post.find().sort({ createdAt: -1 });
  res.status(200).json({
    status: 'success',
    data: {
      posts,
    },
  });
});
exports.createPost = catchAsync(async function (req, res, next) {
  const newPost = await db.Post.create({
    user: req.user._id,
    text: req.body.text,
    name: req.body.name,
  });
  res.status(201).json({
    status: 'success',
    data: {
      post: newPost,
    },
  });
});
exports.getPost = catchAsync(async function (req, res, next) {
  const post = await db.Post.findById(req.params.id);
  if (!post) return next(new AppError('No Post found', 404));
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});
exports.editPost = catchAsync(async function (req, res, next) {
  const post = await db.Post.findByIdAndUpdate(req.params.postId, req.body, {
    new: true,
    runValidators: true,
  });
  if (!post) return next(new AppError('No Post found', 404));

  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});

exports.deletePost = catchAsync(async function (req, res, next) {
  const post = await db.Post.findById(req.params.postId);
  if (!post) return next(new AppError('No Post found', 404));
  await post.remove();
  res.status(204).json({
    status: 'success',
  });
});

exports.likePost = catchAsync(async function (req, res, next) {
  const post = await db.findById(req.params.postId);
  if (!post) return next(new AppError('No Post found', 404));
  post.like.push({ user: req.user._id });
  post.save();
  await post.save();
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});
exports.unlikePost = catchAsync(async function (req, res, next) {
  const post = await db.findById(req.params.postId);
  if (!post) return next(new AppError('No Post found', 404));
  post.like.pull({ user: req.user._id });
  post.save();
  await post.save();
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});
