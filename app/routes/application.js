import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    logout: function() {
      alert('bye!');

      alert('now transitioning to login');
      this.transitionTo('auth.login');

      alert('now setting user session to null');
      this.set('session.user', null);

      alert('now unloading store');
      this.store.unloadAll('post');
      this.store.unloadAll('user');
    }
  }
});

/*
Code fix suggested by Vlad to ensure all data is removed on logout;
this.get('session').set('user', null); // but I did not implement this line;
this.store.unloadAll('post');
this.store.unloadAll('user');
*/
