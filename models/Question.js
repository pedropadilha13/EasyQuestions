const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    trim: true,
    required: [true, 'Question required']
  },
  correctAnswer: {
    type: String,
    trim: true,
    required: [true, 'Correct Answer is required']
  },
  incorrectAnswers: {
    type: [String],
    required: [true, 'Incorrect Answers required']
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

QuestionSchema.pre('save', function (next) {
  this.updated = Date.now();
  return next;
});

module.exports = mongoose.model('Question', QuestionSchema);
