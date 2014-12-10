import Ember from 'ember';

var UserFollowersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  }

});

export default UserFollowersRoute;
