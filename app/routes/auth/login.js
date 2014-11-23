import Ember from 'ember';

var AuthLoginRoute = Ember.Route.extend({
   model: function() {
      return this.store.find('user');
    },

});

export default AuthLoginRoute;
