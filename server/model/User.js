const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
    validate: [validator.isEmail, 'provide a valid email'],
    unique: true,
  },
  profileImage: { String },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    maxlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please conform your password'],
    maxlength: 8,
    validate: function (value) {
      return value === this.password;
    },
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

userSchema.pre('save', async function (next) {
  //if password has not been modified move to next middleware
  if (!this.isModified('password')) return next();
  //if password has changed encrypt password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  //clear passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  //check if password match return a boolean
  return await bcrypt.compare(candidatePassword, userPassword);
};
const User = mongoose.model('User', userSchema);
module.exports = User;
