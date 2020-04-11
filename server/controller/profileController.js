const db = require('../model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllProfiles = catchAsync(async (req, res, next) => {
  const profiles = await db.Profile.find();

  if (!profiles) {
    next(new AppError('The are no profiles', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: profiles,
    },
  });
});

exports.getProfile = catchAsync(async (req, res, next) => {
  const profile = await db.Profile.findById(req.params.profileId);

  res.status(200).json({
    status: 'success',
    data: {
      profile,
    },
  });
});

exports.createProfile = catchAsync(async (req, res, next) => {
  const profileFields = {
    user: req.user._id,
    ...req.body,
  };
  if (typeof req.body.skills !== 'undefined') {
    profileFields.skills = req.body.skills.split(',');
  }
  const newProfile = await db.Profile.create(profileFields);

  res.status(201).json({
    status: 'success',
    data: {
      data: newProfile,
    },
  });
});
exports.updateProfile = catchAsync(async (req, res, next) => {
  const updateField = req.body;
  if (typeof req.body.skills !== 'undefined')
    updateField.skills = req.body.skills.split(',');
  const profile = await db.Profile.findOneAndUpdate(
    { user: req.user._id },
    updateField,
    { new: true, runValidators: true }
  );
  if (!profile) {
    return next(new AppError('No profile found', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      profile,
    },
  });
});
exports.deleteProfile = catchAsync(async (req, res, next) => {
  const profile = await db.Profile.findOneAndDelete({ user: req.user._id });
  if (!profile) {
    return next(new AppError('No profile found', 404));
  }
  res.status(204).json({
    status: 'success',
    data: profile,
  });
});
