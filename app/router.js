import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TagManagerENV.locationType
});

Router.map(function() {
  this.resource('products', { path: '/products' }, function(){
    this.resource('product', { path: '/:product_id' });
  });
});

export default Router;
