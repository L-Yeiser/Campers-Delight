import Ember from 'ember';
import ApplicationSerializer from './application';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

const { uuid } = Ember;

export default ApplicationSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    ratings: { embedded: 'always' }
  },

  normalize(type, hash) {
    hash.id = hash._id;

    if (hash.ratings) {
      hash.ratings.forEach(rating => {
        rating.id = uuid();
      });
    }
    return this._super(...arguments);
  },
});
