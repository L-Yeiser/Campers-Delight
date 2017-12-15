'use strict';

module.exports = function(app) {
  var campgroundsController = require('../controllers/campgrounds');

  app.route('/campgrounds')
    .get(campgroundsController.list_all_campgrounds)
    .post(campgroundsController.create_a_campground);


  app.route('/campgrounds/:campgroundId')
    .get(campgroundsController.read_a_campground)
    .put(campgroundsController.update_a_campground)
    .delete(campgroundsController.delete_a_campground);
};
