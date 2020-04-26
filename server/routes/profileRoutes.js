const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const profileController = require('../controller/profileController');

/*/api/v1/profiles**/
router
  .route('/')
  .get(profileController.getAllProfiles)
  .post(authController.protect, profileController.createProfile)
  .patch(authController.protect, profileController.updateProfile)
  .delete(authController.protect, profileController.deleteProfile);

/*/api/v1/profiles/education**/
router
  .route('/education')
  .post(authController.protect, profileController.createEduction);
router
  .route('/education/:id')
  .patch(authController.protect, profileController.updateEducation)
  .delete(authController.protect, profileController.deleteEducation);

/*/api/v1/profiles/experience**/
// router.route('/experience').post();
// router.route('/experience/:id').get().post().patch().delete();

module.exports = router;
