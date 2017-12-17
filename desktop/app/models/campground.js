import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  state: attr('string'),
  hasBathroom: attr('boolean'),
  hasShower: attr('boolean'),
  ratings: hasMany('rating'),

  averageRating: function() {
    const ratings = this.get('ratings');

    return Math.round(ratings
      .reduce((total, rating) => {
        return total + rating.get('value');
      }, 0) / ratings.get('length'));
  }.property('ratings.@each.value')
});
