import Ember from 'ember';

export default Ember.ArrayController.extend({
  isLoaded: false,
  init: function() {
    console.log('init tags');
    this.store.find('tag');
  }
});
