import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    logout: function() {
      alert('bye!');
      this.set('session.user', null);
      window.location.reload(true);
      this.transitionToRoute('login');
    }
  }

});
