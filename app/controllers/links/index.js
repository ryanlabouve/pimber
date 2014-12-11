import Ember from 'ember';

export default Ember.ArrayController.extend({
  total: Ember.computed.alias('this.length'),
  showingRandomLink: false,
  randomLink: function() {
    // return this.store.find('link', { random: true })
  },
  actions: {
    showRandomLink: function() {
      // this.set('showingRandomLink', true);
      var random_index = Math.floor(Math.random() * this.get('length'));
      // console.log( this.get('array[random_index]') );
      // console.log(this.get(random_index));
      return this.find(function(item, index, enumberable) {
        if (index === random_index) {
          console.log(item);
          return true;
        }
      });

    }
  }

});
