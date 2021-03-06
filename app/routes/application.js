import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() { //before you load the model do this ...
    var _this = this;
    var promise = this.store.find('user', {operation: 'isAuthenticated'}); //returns an array of users where operation is isAuthenticated
    //make call to server; give me back the user that is making this request if you know who the user is.
    //if we have a session cookie authenticated on that request then server can identify user
    //else it sends back empty response
    return promise.then(function(users) {
      //if (users ... ) => means object is not undefined or not null; else do nothing;
      if (users && users.get('length') > 0) {//if an array exists and if that array has got a length more than 0; why are we checking if an array exists?
        var user = users.get('firstObject');// get the first user object from the array; will there be any scenario where there will be more than one object?
        _this.set('session.user', user);
      }
      return users;
    });
  },

  actions: {
    follow: function(userToFollow) {
      console.log('follow function called');
      var user = this.get('session.user');
      user.set('operation', 'follow');
      user.set('following', userToFollow.get('id'));

      user.save().then(function(){
        userToFollow.set('isFollowed', true);
      }, function(response) {
        alert(response);
      });
    },

    unfollow: function(userToUnfollow){
      //var userToUnfollow = this.model.get('id');
      //var _this = this;
      console.log('unfollow function called');
      var user = this.get('session.user');
      user.set('operation', 'unfollow');
      user.set('unfollowing', userToUnfollow.get('id'));
      user.save().then(function(){
        userToUnfollow.set('isFollowed', false);
      });
    },

    logout: function() {
      console.log('bye!');
      var _this = this;
      Ember.$.post( "/api/logout", function() {

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
