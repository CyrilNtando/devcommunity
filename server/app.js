express = require('express');
const cookieParser = require('cookie-parser');
const AppError = require('./utils/appError');
const errorHandler = require('./controller/errorController');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const app = express();

//MIDDLEWARE

//
//body-parser,reading data from body into req.body
app.use(express.json({ limit: '1000kb' })); //parse data less than 1000kb
app.use(cookieParser());

//test
app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});
//MOUNT ROUTES
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/profiles', profileRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/comment', commentRoutes);

//ROUTE NOT FOUND
app.all('*', (req, res, next) => {
  // const error = new Error(`Can't find ${req.originalUrl} on this server`);
  // error.status = 'fail';
  // error.statusCode = 404;
  const error = new AppError(
    `Cannot find ${req.originalUrl} on this server`,
    404
  );
  next(error);
});

//GLOBAL ERROR
app.use(errorHandler);
module.exports = app;
