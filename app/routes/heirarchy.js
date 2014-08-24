import Ember from 'ember';

var get = Ember.get;
var set = Ember.set;

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);

    this.store.find('category', { heirarchy: get(model, 'id') })
    .then(function(categories){
      set(controller, 'categoryList', categories);
    });
  }
});
