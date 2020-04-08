const mongoose = require('mongoose');

EducationSchema = mongoose.Schema({
  school: {
    type: String,
    required: [true, 'A institution must have a name'],
    maxlength: [40, 'A institution name must have less or equal 40 characters'],
  },
  degree: {
    type: String,
    required: [true, 'A course must have an qualification'],
    maxlength: [
      40,
      'A qualification name must have less or equal 40 characters',
    ],
    enum: {
      values: ['certificate', 'diploma', 'degree'],
      message: 'qualification is either: certificate, diploma or degree ',
    },
  },
  course: {
    type: String,
    required: [true, 'A course must have a name'],
  },
  from: {
    type: Date,
    required: [true, 'Please provide date of enrollment'],
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
