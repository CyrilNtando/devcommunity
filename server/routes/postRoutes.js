const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const postController = require('../controller/postController');
const comment = require('./commentRoutes');

//api/v1/post/:postId/comment
router.use('/:postId/comment', comment);

//api/v1/post
router
  .route('/')
  .post(authController.protect, postController.createPost)
  .get(postController.getAllPost);
//api/v1/post/:postId
router
  .route('/:postId')
  .get(postController.getPost)
  .patch(authController.protect, postController.editPost)
  .delete(authController.protect, postController.deletePost);

router
  .route('/:postId/like')
  .post(authController.protect, postController.likePost)
  .patch(authController.protect, postController.unlikePost);

module.exports = router;
