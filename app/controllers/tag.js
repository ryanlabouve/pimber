import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    addTag: function() {
      this.parentController.get('selectedTags').pushObject(this);
    }
  }
});
