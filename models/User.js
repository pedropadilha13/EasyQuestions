const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false
  },
  facebookId: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    required: false
  },
  // googleAccessToken: {
  //   type: String,
  //   required: false
  // },
  // googleRefreshToken: {
  //   type: String,
  //   required: false
  // },
  // facebookAccessToken: {
  //   type: String,
  //   required: false
  // },
  // facebookRefreshToken: {
  //   type: String,
  //   required: false
  // },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.static('findByEmail', async function (email) {
  return await this.findOne({ email });
});

UserSchema.static('findByGoogleId', async function (googleId) {
  return await this.findOne({ googleId });
});

UserSchema.static('findByFacebookId', async function (facebookId) {
  return await this.findOne({ facebookId });
});

UserSchema.pre('save', function (next) {
  this.updated = Date.now();
  return next;
});

UserSchema.method('verifyPassword', function (password) {
  return new Promise(async (resolve, reject) => {
    const passwordIsCorrect = await bcrypt.compare(password, this.password);
    resolve(passwordIsCorrect);
  });
});

UserSchema.method('updatePassword', function (newPassword) {
  return new Promise(async (resolve, reject) => {
    try {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      this.password = hashedPassword;
      this.save();
      resolve(this);
    } catch (err) {
      reject(err);
    }
  });
});

UserSchema.method('getName', function () {
  return this.fullName || `${this.firstName} ${this.lastName}`;
});

module.exports = mongoose.model('User', UserSchema);
