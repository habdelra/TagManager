import Ember from 'ember';

var get            = Ember.get;
var set            = Ember.set;
var filterBy       = Ember.computed.filterBy;
var observer       = Ember.observer;

export default Ember.Component.extend({
  classNames:     ['tag-list'],
  approvedTags:   filterBy('tags', 'status', 'approved'),
  unapprovedTags: filterBy('tags', 'status', 'unapproved'),

  init: function() {
    this._super();
    var _this       = this;
    var store       = get(this, 'store');
    var hierarchyId = get(this, 'hierarchy.id');

    store.find('tag', { hierarchy: hierarchyId }).then(function(tags) {
      if (_this.isDestroyed) { return; }

      set(_this, 'tags', tags);
    });
  },

  whenChecked: observer('isChecked', function() {
    var isChecked = get(this, 'isChecked');
    this.sendAction('selectAll', isChecked);
  })

});
