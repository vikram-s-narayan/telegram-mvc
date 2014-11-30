import Ember from 'ember';

var MystreamRoute = Ember.Route.extend({
  model: function() {
          return this.store.find('post');
      }
});

export default MystreamRoute;
