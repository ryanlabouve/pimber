import Ember from 'ember';

export default Ember.ArrayController.extend({
  total: Ember.computed.alias('this.length'),
  showingRandomLink: false,
  randomLink: false,
  actions: {
    showRandomLink: function() {
      var _this = this;
      var random_index = Math.floor(Math.random() * this.get('length'));
      return this.find(function(item, index, enumberable) {
        if (index === random_index) {
          // console.log(item, _this);
          _this.set('randomLink', item);
          return true;
        }
      });

    }
  }

});
