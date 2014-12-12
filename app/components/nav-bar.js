import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logout: function() {
      alert('bye!');
      this.set('session.user', null);
      this.transitionToRoute('login');
      window.location.reload(true);

    }
  }
});
