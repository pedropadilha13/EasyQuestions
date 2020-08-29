const mongoose = require('mongoose');

const QuestionSchema = mongoose.model('Question');
const UserSchema = mongoose.model('User');

const SetSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Set name required']
  },
  questions: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Question'
  },
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Set', SetSchema);
