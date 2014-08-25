import DS from 'ember-data';

export default DS.Model.extend({
  name:      DS.attr('string'),
  hierarchy: DS.belongsTo('product'),
  tags:      DS.hasMany('tag', {async: true})
});
