import Ember from 'ember';

var UserRoute =
 Ember.Route.extend({
   model: function(params) {
     this.store.find('user',params.user_id).then(function(user){
      return user;
     })
   }
});

export default UserRoute;
