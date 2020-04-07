const AppError = require('../utils/appError');

//ERROR HANDLERS
const handleDuplicateFields = (error) => {
  const value = error.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value ${value}. Please enter another value`;
  return new AppError(message, 400);
};
const handleValidationErrorDB = (error) => {
  const errors = Object.values(error.errors).map((err) => err.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

//DISPATCH ERROR
const dispatchError = (error, res) => {
  //operational,trusted error: send to client
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
    //Programming or other unknown error: don't leak error details
  } else {
    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
};

//ERROR HANDLING MIDDLEWARE
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  let error = Object.assign({}, err, { message: err.message });
  if (error.code === 11000) error = handleDuplicateFields(error);
  if (error.name === 'validationError') error = handleValidationErrorDB(error);
  dispatchError(error, res);
};
