import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('campgrounds', function() {
    this.route('campground', { path: ':campground_id' });
  });
});

export default Router;
