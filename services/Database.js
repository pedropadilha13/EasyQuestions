const mongoose = require('mongoose');

const { mongoURI } = process.env;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected');
    return conn;
  } catch (error) {
    console.error('Error connecting do DB\n', error);
  }
};

module.exports = connectDB;
