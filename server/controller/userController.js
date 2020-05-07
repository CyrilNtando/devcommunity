const db = require('../model');
const { createToken } = require('./authController');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  //check if email and password exists
  if (!email || !password)
    return next(new AppError('Please provide email or password', 400));
  //check if the user exists and password  is correct
  const user = await db.User.findOne({ email }).select('+password'); //must include pass field;

  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError('Incorrect email or password', 401));
  //if everything is ok, send token to client
  createToken(user, 200, res);
});

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await db.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  createToken(newUser, 201, res);
});

exports.getCurrentUser = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: req.user,
    },
  });
});
