import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    follow: function(userToFollow) {
    alert('follow called');
    userToFollow = typeof userToFollow !== 'undefined' ?  userToFollow : this.model.get('id');
     //var userToFollow = this.model.get('id')
     alert(userToFollow);
     var _this = this;
     var user = this.get('session.user');
     user.set('operation', 'follow');
     user.set('following', userToFollow);
     user.save().then(function(){
      _this.model.set('isFollowed', true); 
     });
   },
   unfollow: function(){
     var userToUnfollow = this.model.get('id');
     var _this = this;
     var user = this.get('session.user');
     user.set('operation', 'unfollow');
     user.set('unfollowing', userToUnfollow);
     user.save().then(function(){
       _this.model.set('isFollowed', false);
     });
   }
  }
});
//var userId = this.session.get('user.id');
//alert(toFollow);
/*var user = this.store.update('user', {
id: userId,
//toFollow: toFollow,
operation: 'follow',
following: follow
});*/
