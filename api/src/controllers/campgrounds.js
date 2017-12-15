'use strict';


var mongoose = require('mongoose');
var Campground = mongoose.model('Campgrounds');

exports.list_all_campgrounds = function(req, res) {
  Campground.find({}, function(err, campground) {
    if (err)
      res.send(err);
    res.json(campground);
  });
};




exports.create_a_campground = function(req, res) {
  var new_campground = new Campground(req.body);
  console.log('hitting', req.body);
  new_campground.save(function(err, campground) {
    if (err)
      res.send(err);
    res.json(campground);
  });
};


exports.read_a_campground = function(req, res) {
  Campground.findById(req.params.campgroundId, function(err, campground) {
    if (err)
      res.send(err);
    res.json(campground);
  });
};


exports.update_a_campground = function(req, res) {
  Campground.findOneAndUpdate({_id: req.params.campgroundId}, req.body, {new: true}, function(err, campground) {
    if (err)
      res.send(err);
    res.json(campground);
  });
};


exports.delete_a_campground = function(req, res) {


  Campground.remove({
    _id: req.params.campgroundId
  }, function(err, campground) {
    if (err)
      res.send(err);
    res.json({ message: 'Campground successfully deleted' });
  });
};
