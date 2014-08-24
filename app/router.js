import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TagManagerENV.locationType
});

Router.map(function() {
  this.resource('heirarchies', { path: '/heirarchies' }, function(){
    this.resource('heirarchy', { path: '/:heirarchy_id' });
  });
});

export default Router;
