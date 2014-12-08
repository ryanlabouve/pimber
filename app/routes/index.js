import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      links: this.store.findAll('link'),
      tags: this.store.findAll('tag')
    });
  }
});

export default IndexRoute;
