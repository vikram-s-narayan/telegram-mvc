import Ember from 'ember';

var UserPostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

export default UserPostsRoute
