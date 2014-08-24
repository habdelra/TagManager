import DS from 'ember-data';

export default DS.Model.extend({
  name:      DS.attr('string'),
  heirarchy: DS.belongsTo('heirarchy'),
  tags:      DS.hasMany('tag', {async: true})
});
