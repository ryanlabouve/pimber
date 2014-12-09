import Ember from 'ember';

export default Ember.ArrayController.extend({
  total: Ember.computed.alias('this.length'),
  showingRandomLink: false,
  randomLink: function() {
    // return this.store.find('link', { random: true })
  },
  actions: {
    showRandomLink: function() {
      this.set('showingRandomLink', true);
    }
  }

});
