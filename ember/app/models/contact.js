import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  phoneNumbers: DS.hasMany('phone_number')
});
