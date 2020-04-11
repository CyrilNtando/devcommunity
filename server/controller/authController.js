const db = require('../model');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
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

/*********************Tokens*******************************/
const signToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const createToken = (user, statusCode, res) => {
  //create a token
  const token = signToken(user._id);
  //store token in a cookie
  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ), //milliseconds
    //secure: true,https
    httpOnly: true,
  });
  // //Remove password from the user output
  user.password = undefined;
  //respond with user document and token
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

/*********************End of Token*******************************/

/*********************Protecting Routes*******************************/
exports.protect = catchAsync(async (req, res, next) => {
  //getting token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token)
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );

  //validate token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  //check if user exists
  const currentUser = await db.User.findById(decoded.id);
  if (!currentUser)
    return next(new AppError('The user does no longer exist', 401));
  //GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
});
/*********************End of Protecting Routes*******************************/
