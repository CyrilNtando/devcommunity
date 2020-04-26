const mongoose = require('mongoose');
const User = require('./User');
const educationSchema = require('./Education');
const experienceSchema = require('./Experience');
const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    unique: true,
    required: [true, 'Profile must have a user'],
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
  experience: [experienceSchema],
  education: [educationSchema],
});

profileSchema.statics.updateSubDocument = function (
  userId,
  embeddedId,
  subDocument,
  updateData
) {
  return this.findOne({ user: userId })
    .then(function (doc) {
      if (!doc) {
        throw new Error('Document not found');
      }
      return doc[subDocument].id(embeddedId);
    })
    .then(function (embeddedDoc) {
      if (!embeddedDoc) {
        throw new Error('Embedded document not found');
      }
      return Object.assign(embeddedDoc, updateData);
    });
};

profileSchema.pre(/^find/, function (next) {
  next();
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
