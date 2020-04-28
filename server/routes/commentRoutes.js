const express = require('express');
const router = express.Router({ mergeParams: true });
const authController = require('../controller/authController');
const commentController = require('../controller/commentController');
//api/v1/post/:postId/comment
router
  .route('/')
  .get(commentController.getAllComment)
  .post(authController.protect, commentController.createComment);
//api/v1/post/:postId/comment/:commentId
router
  .route('/:id')
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = router;
