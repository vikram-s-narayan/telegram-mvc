import Ember from 'ember';

var UserRoute =
 Ember.Route.extend({
   model: function(params) {
     return this.store.find('user',params.user_id).then(function(user){
      return Ember.Object.create({
        userId: user.get('id'),
        userName: user.get('name')
      })
     })
   }
});

export default UserRoute;
