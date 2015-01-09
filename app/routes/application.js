import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var _this = this;
    var route = _this; //not yet sure why we are setting route to "this"
    var promise = _this.store.find('user', {isAuthenticated: true});
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
      console.log('bye!');
      var _this = this;
      $.post( "/api/logout", function() {

        console.log('now setting user session to null');
        _this.set('session.user', null);

        console.log('now unloading store');
        _this.store.unloadAll('post');
        _this.store.unloadAll('user');

        console.log('now transitioning to login');
        _this.transitionTo('auth.login');

        }
      );

    }
  }
});
