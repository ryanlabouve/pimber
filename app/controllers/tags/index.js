import Ember from 'ember';

export default Ember.ArrayController.extend({
  search: '',
  selectedTags: [],
  filteredTags: function() {
    var search = this.get('search');
    if(search.length) {
      return this.filter(function(tag) {
        var re = new RegExp(search);
        return re.test(tag.get('name'));
      });
    } else {
      return this;
    }
  }.property('search')
});
