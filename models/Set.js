const mongoose = require('mongoose');

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
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

SetSchema.pre('save', function (next) {
  this.updated = Date.now();
  return next;
});

module.exports = mongoose.model('Set', SetSchema);
