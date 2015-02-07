import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    follow: function() {
      //var userId = this.session.get('user.id');
      var follow = this.model.get('id');
      //alert(toFollow);
     /*var user = this.store.update('user', {
       id: userId,
       //toFollow: toFollow,
       operation: 'follow',
       following: follow
     });*/
     var _this = this;
     var user = this.get('session.user');
     user.set('operation', 'follow');
     user.set('following', follow);
     user.save().then(function(){
      _this.model.set('isFollowing', true); //change isFollowing to isFollowed as it is more intuitive;
     });
    }
  }
});
