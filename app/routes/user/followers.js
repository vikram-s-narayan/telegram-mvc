import Ember from 'ember';

var UserFollowersRoute = Ember.Route.extend({
  model: function() {
    var parentModel = this.modelFor('user');
    var currentUser = parentModel.get('id');
    return this.store.find('user', {operation: 'getFollowers',
                                    currentUser: currentUser});
  }

});

export default UserFollowersRoute;
