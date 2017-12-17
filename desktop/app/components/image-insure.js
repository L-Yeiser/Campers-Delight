import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: [ 'image-insure image' ],
  targetSrc: undefined,
  defaultSrc: undefined,
  src: undefined,

  loadImage: function() {
    this.set('src', this.get('targetSrc'));

    this.$('.img').on('error', () => {
      if (!this.destroyed) {
        this.set('src', this.get('defaultSrc'));
      }
    });
  }.on('didInsertElement').observes('targetSrc'),

  cleanUp: function() {
    this.$().off();
  }.on('willDestroyElement')
});
