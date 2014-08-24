import Ember from 'ember';

var get            = Ember.get;
var set            = Ember.set;
var filterBy       = Ember.computed.filterBy;

export default Ember.Component.extend({
  classNames:     ['tag-list'],
  approvedTags:   filterBy('tags', 'status', 'approved'),
  unapprovedTags: filterBy('tags', 'status', 'unapproved'),

  init: function() {
    this._super();
    var _this      = this;
    var store      = get(this, 'store');
    var categoryId = get(this, 'category.id');

    store.find('tag', { category: categoryId }).then(function(tags) {
      if (_this.isDestroyed) { return; }

      set(_this, 'tags', tags);
    });
  }
});
