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
  }
});

module.exports = mongoose.model('Question', QuestionSchema);
