const express = require('express');
const router = express.Router();
const comment = require('./commentRoutes');
router.use('/:postId/comment');
router
  .route('/')
  .post(() => {})
  .get(() => {});
router
  .route('/:postId')
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

router.route('/:postId/like').post().delete();

module.exports = router;
