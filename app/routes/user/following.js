import Ember from 'ember';

var UserFollowingRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user', {operation: 'getFollowing'});
  }
});

export default UserFollowingRoute;
