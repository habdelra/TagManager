import DS from 'ember-data';
import Ember from 'ember';

var get = Ember.get;

export default DS.FixtureAdapter.extend({
  queryFixtures: function(records, query) {
    return records.filter(function(record) {
      for(var key in query) {
        if (!query.hasOwnProperty(key)) { continue; }
        var value = get(query, key);
        var item = get(record, key);
        if (item instanceof Ember.Object) {
          if (get(item, 'id') !== value) { return false; }
        }
        else if (item !== value) { return false; }
      }
      return true;
    });
  }
});
