import Ember from 'ember';

export default Ember.ObjectController.extend({

  // put your Product actions here

  actions: {

    selectAll: function(isSelected) {
      console.log('isSelected Action fired. Value is: ' +isSelected);
    }
  }

});
