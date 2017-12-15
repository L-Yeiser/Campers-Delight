'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Ratings = require('./ratings');


var CampgroundSchema = new Schema({
  name: {
    type: String,
  },
  desciption: {
    type: String,
  },
  state: {
    type: String,
  },
  image: {
    type: String,
  },
  hasShower: {
    type: Boolean,
  },
  hasBathroom: {
    type: Boolean,
  },
  ratings: [ Ratings ]
});

module.exports = mongoose.model('Campgrounds', CampgroundSchema);
