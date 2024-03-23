// FormSubmission.js

// Import mongoose
const mongoose = require('mongoose');

// Define the schema for form submissions
const formSubmissionSchema = new mongoose.Schema({
  sessions: {
    type: Number,
    required: true
  },
  breaks: {
    type: Number,
    required: true
  },
  sessionLevel: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the FormSubmission model using the schema
module.exports = mongoose.model('FormSubmission', formSubmissionSchema);
