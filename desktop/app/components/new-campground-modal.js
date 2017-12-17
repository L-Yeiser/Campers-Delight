import Ember from 'ember';

const { Component, inject, computed, uuid } = Ember;

export default Component.extend({
  store: inject.service(),

  name: undefined,

  newCampground: computed({
    get() {
      const rating = this.get('store').createRecord('rating', { id: uuid() });
      const campground = this.get('store').createRecord('campground', {
        name: 'Untitled Campground'
      });

      campground.get('ratings').pushObject(rating);
      return campground;
    },
    set(key, value) {
      return value;
    }
  }),

  rating: function() {
    return this.get('newCampground.ratings.firstObject');
  }.property('newCampground.ratings.firstObject'),

  afterAction: () => {},

  actions: {
    closeModal() {
      this.get('newCampground').deleteRecord();
      this.set('isShowingModal', false);
    },

    addCampground() {
      this.get('newCampground')
        .save()
        .then(campground => {
          this.set('isShowingModal', false);
          this.afterAction(campground);
        });
    }
  }
});
