const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', () => {});

router
  .route('/:id')
  .get(() => {})
  .patch(() => {})
  .delete(() => {});

module.exports = router;
