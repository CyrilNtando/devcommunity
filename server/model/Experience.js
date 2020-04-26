const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A job must have a title'],
  },
  company: {
    type: String,
    required: [true, 'A job must have a company name'],
  },
  location: {
    type: String,
  },
  from: {
    type: Date,
    required: [true, 'Please provide a starting date'],
  },

  to: {
    type: Date,
  },
  current: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
});

module.exports = experienceSchema;
