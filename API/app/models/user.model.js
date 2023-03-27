const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: [true, 'Please add a firstname'],
    },
    lastname: {
      type: String,
      trim: true,
      required: [true, 'Please add a lastname'],
    },
    phone: {
      type: String,
      trim: true,
      required: [true, 'Please add a phonenumber'],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Please add an email'],
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'Please add a password'],
    },
    avatar: {
      type: String,
      trim: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('User', userSchema);
