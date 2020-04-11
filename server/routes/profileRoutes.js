const express = require('express');
const authController = require('../controller/authController');
const profileController = require('../controller/profileController');
const router = express.Router();

router
  .route('/')
  .get(profileController.getAllProfiles)
  .post(authController.protect, profileController.createProfile)
  .patch(authController.protect, profileController.updateProfile)
  .delete(authController.protect, profileController.deleteProfile);

router.get('/:profileId', profileController.getProfile);

module.exports = router;
