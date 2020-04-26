const express = require('express');
const router = express.Router({ mergeParams: true });
//api/v1/post/:postId/comment/
router.get('/', () => {});
//api/v1/post/:postId/comment/:commentId
router
  .route('/:id')
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = router;
