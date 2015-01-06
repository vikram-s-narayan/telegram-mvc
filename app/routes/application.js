import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    logout: function() {
      alert('bye!');
      this.set('session.user', null);
      this.store.unloadAll('post');
      this.store.unloadAll('user');
      window.location.reload(true);
      this.transitionToRoute('login');
    }
  }

});

/*
Code fix suggested by Vlad to ensure all data is removed on logout;
this.get('session').set('user', null); // but I did not implement this line;
this.store.unloadAll('post');
this.store.unloadAll('user');
*/
