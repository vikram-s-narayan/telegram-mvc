import Ember from 'ember';

var UserFollowingRoute = Ember.Route.extend({
  /*model: function() {
    return this.store.find('user', {operation: 'getFollowing'});
  }*/
  model: function() {
    var parentModel = this.modelFor('user');
    var currentUser = parentModel.get('id');
    return this.store.find('user', {operation: 'getFollowing',
    currentUser: currentUser});
  }
});

export default UserFollowingRoute;
