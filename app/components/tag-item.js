import Ember from 'ember';

var get = Ember.get;

export default Ember.Component.extend({
  clasNames: ['tag'],

  actions: {
    editTag: function() {
      console.log('edit tag action clicked for ' + get(this, 'tag.name'));
    }
  }
});
