import DS from 'ember-data';

export default DS.Model.extend({
  link: DS.attr('string'),
  description: DS.attr('string'),
  read: DS.attr('boolean'),
  date: DS.attr('string'),
  tags: DS.attr('string')
});
