import Ember from 'ember';

var get = Ember.get;
var set = Ember.set;

export default Ember.Component.extend({
  classNameBindings: [":tag", "isOn:selected"],

  actions: {
    editTag: function() {
      var isOn = get(this, 'isOn');
      set(this, 'isOn', !isOn);
      console.log('edit tag action clicked for ' + get(this, 'tag.name'));
    }
  }
});
