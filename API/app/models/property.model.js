const mongoose = require('mongoose');

const propertySchema = mongoose.Schema(
  {
    mls: {
      type: String,
      trim: true,
      required: [true, 'Please add a property MLS'],
    },
    price: {
      type: String,
      trim: true,
      required: [true, 'Please add a property price'],
    },
    address: {
      type: String,
      trim: true,
      required: [true, 'Please add a property address'],
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'Please add property description'],
    },
    tax: {
      type: String,
      trim: true,
      required: [true, 'Please add property tax'],
    },
    type: {
      type: String,
      trim: true,
      required: [true, 'Please add property type'],
    },
    building_age: {
      type: String,
      trim: true,
      required: [true, 'Please add property building age'],
    },
    size: {
      type: String,
      trim: true,
      required: [true, 'Please add property size'],
    },
    parking: {
      type: String,
      trim: true,
      required: [true, 'Please add property parking'],
    },
    basement: {
      type: String,
      trim: true,
      required: [true, 'Please add property basement'],
    },
    possesion: {
      type: String,
      trim: true,
      required: [true, 'Please add property possesion'],
    },
    details: {
      type: [String],
      required: [true, 'Please add property details'],
    },
    images: {
      type: [String],
      trim: true,
      required: [true, 'Please add property images'],
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model('Property', propertySchema);
