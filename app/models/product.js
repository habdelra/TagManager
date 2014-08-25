import DS from 'ember-data';

export default DS.Model.extend({
  name:        DS.attr('string'),
  hierarchies: DS.hasMany('hierarchy', {async: true})
});
