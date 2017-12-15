'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatingSchema = new Schema({
  descriptions: {
    type: String,
  },
  value: {
    type: Number,
  }
});
