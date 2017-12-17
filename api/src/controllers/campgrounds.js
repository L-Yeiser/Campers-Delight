'use strict';
var mongoose = require('mongoose');
var Campground = mongoose.model('Campgrounds');

exports.list_all_campgrounds = function(req, res) {
  Campground.find({}, function(err, campground) {
    if (err) {
      res.send(err);
    }
    res.json({ campground: campground });
  });
};

exports.create_a_campground = function(req, res) {
  console.log('create a new campground', 'body:', req.body.campground);
  var new_campground = new Campground(req.body.campground);
  new_campground.save(function(err, campground) {

    console.log('after save', campground);
    if (err) {
      res.send(err);
    }
    res.json({ campground: campground });
  });
};

exports.read_a_campground = function(req, res) {
  console.log('find a campground', req.params)
  Campground.findById(req.params.campgroundId, function(err, campground) {
    if (err) {
      res.send(err);
    }
    res.json(campground);
  });
};

exports.update_a_campground = function(req, res) {
  Campground.findOneAndUpdate({_id: req.params.campgroundId}, req.body, {new: true}, function(err, campground) {
    if (err) {
      res.send(err);
    }
    res.json(campground);
  });
};

exports.delete_a_campground = function(req, res) {
  Campground.remove({
    _id: req.params.campgroundId
  }, function(err, campground) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Campground successfully deleted' });
  });
};
