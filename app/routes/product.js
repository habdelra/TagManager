import Ember from 'ember';

var get = Ember.get;
var set = Ember.set;

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);

    this.store.find('hierarchy', { product: get(model, 'id') })
    .then(function(hierarchies){
      set(controller, 'hierarchyList', hierarchies);
    });
  }
});
