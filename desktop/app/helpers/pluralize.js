import Ember from 'ember';

export function pluralize([ length ], { singular, plural }) {
  return length === 1 ? singular : plural;
}

export default Ember.Helper.helper(pluralize);
