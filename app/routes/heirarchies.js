import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('heirarchy').then(function(heirarchies){
      return heirarchies.sortBy('id');
    });
  }
});
