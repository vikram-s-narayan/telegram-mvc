import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var route = this;
    var promise = this.store.find('user', {isAuthenticated: true});
    return promise.then(function(users) {
      if (users && users.get('length') > 0) {
        var user = users.get('firstObject');
        route.set('session.user', user);
      }
      return users;
    });
  },

  actions: {
    logout: function() {
      alert('bye!');
      var _this = this;
      $.post( "/api/logout", function() {
      alert('now transitioning to login');
      _this.transitionTo('auth.login');

      alert('now setting user session to null');
      _this.set('session.user', null);

      alert('now unloading store');
      _this.store.unloadAll('post');
      _this.store.unloadAll('user');

      alert('now clearing session');
      //document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      alert(document.cookie);
        }
      );

    }
  }
});

/*
Code fix suggested by Vlad to ensure all data is removed on logout;
this.get('session').set('user', null); // but I did not implement this line;
this.store.unloadAll('post');
this.store.unloadAll('user');
*/
