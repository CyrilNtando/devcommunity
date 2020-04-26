const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    keepAlive: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful'));

module.exports.User = require('./User');
module.exports.Profile = require('./Profile');
module.exports.Post = require('./Post');
module.exports.Comment = require('./Comment');
