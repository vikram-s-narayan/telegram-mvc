import Ember from 'ember';

var AuthSignupRoute = Ember.Route.extend({
  model: function() {
     return this.store.find('user');
   }
});

export default AuthSignupRoute;
