const mongoose = require('mongoose');
const User = require('./User');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    unique: true,
  },
  handle: {
    type: String,
    required: [true, 'Please provide your profile handler'],
    maxlength: [40, 'A handler must have less or equal 40 characters'],
  },
  skills: {
    type: [String],
    required: [true, 'Please provide at least one skill'],
  },

  company: { type: String },
  website: { type: String },
  location: { type: String },
  status: { type: String },
  bio: { type: String },
  githubusername: { type: String },

  social: {
    youtube: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  experience: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Experience',
    },
  ],
  education: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Education',
    },
  ],
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
