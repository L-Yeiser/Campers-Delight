import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model({ campground_id: campgroundId }) {
    return this.store.peekAll('campground')
      .findBy('id', campgroundId);
  }
});
