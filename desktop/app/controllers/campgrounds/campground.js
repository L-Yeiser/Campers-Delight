import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  imageSrc: function() {
    return `/images/${this.get('model.name').split(' ').join('_').toLowerCase()}.jpg`;
  }.property('model.name'),
});
